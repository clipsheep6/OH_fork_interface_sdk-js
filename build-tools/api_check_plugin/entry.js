/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const fs = require('fs');

function checkEntry(url) {
  let result = '';
  let isOpenEscapeWay = false;
  const sourceDirname = __dirname;
  __dirname = 'interface/sdk-js/build-tools/api_check_plugin';
  const mdFilesPath = path.resolve(sourceDirname, '../../../../', 'all_files.txt');
  try {
    const execSync = require('child_process').execSync;
    execSync('cd interface/sdk-js/build-tools/api_check_plugin && npm install');
    const rules = require(path.resolve(__dirname, './code_style_rule.json'));
    const administrators = new Set();
    rules.administrators.forEach((administrator) => {
      administrators.add(administrator.id);
    })
    const request = require(path.resolve(__dirname, './node_modules/sync-request'));
    const pullRequestSteps = url.split(/(\/|\\\\)/g);
    // 默认搜寻500条评论
    for (let i = 0; i < 5; i++) {
      const commentRequestPath = `https://gitee.com/api/v5/repos/openharmony/interface_sdk-js/pulls/${pullRequestSteps[pullRequestSteps.length - 1]}/comments?page=${i + 1}&per_page=100&direction=desc`;
      let res = request('GET', commentRequestPath, {
        headers: {
          'Content-Type': 'application/json;charset=UFT-8'
        }
      });
      let resBody = new TextDecoder('utf-8').decode(res.body);

      // result += `url:::${url} \n`;
      // result += '============================\n';
      // result += `原文:::${res} \n`;
      // result += '============================\n';
      // result += `评论:::${resBody}\n`;
      // const keyStr = 'pass api check';
      let comments = JSON.parse(`{"resultBody": ${resBody}}`);
      for (let i = 0; i < comments.resultBody.length; i++) {
        const comment = comments.resultBody[i];
        result += `${administrators.has(comment['user']['id']) && /^approve api check$/.test(comment.body)}\n`;
        if (administrators.has(comment['user']['id']) && /^approve api check$/.test(comment.body)) {
          isOpenEscapeWay = true;
          break;
        }
      }
      if (isOpenEscapeWay) {
        break;
      }
    }
    const { scanEntry } = require(path.resolve(__dirname, './src/api_check_plugin'));
    result += scanEntry(mdFilesPath, isOpenEscapeWay);
    const { removeDir } = require(path.resolve(__dirname, './src/utils'));
    removeDir(path.resolve(__dirname, 'node_modules'));
  } catch (error) {
    // catch error
    result += `API_CHECK_ERROR : ${error}`;
  }
  const { writeResultFile } = require('./src/utils');
  writeResultFile(result, path.resolve(__dirname, './Result.txt'), {});
}

checkEntry(process.argv[2]);
