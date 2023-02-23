import ts from "typescript";
import { Code } from "../utils/constant";
import { LogUtil } from "../utils/logUtil";
import { StringUtils } from "../utils/stringUtils";
import { AstNodeHelper, RawSourceCodeInfoImpl } from "./coreImpls";
import { comment, Context, ISourceCodeProcessor, ProcessResult, rawInfo, sourceParser } from "./typedef";

export class RawSourceCodeProcessor implements ISourceCodeProcessor, sourceParser.INodeVisitorCallback {
  rawSourceCodeInfo?: RawSourceCodeInfoImpl;
  process(context: Context, content: string): ProcessResult {
    const sourceParser: sourceParser.SourceCodeParser = context.getSourceParser(content);
    this.rawSourceCodeInfo = new RawSourceCodeInfoImpl(content);
    sourceParser.visitEachNodeComment(this, false);
    context.setRawSourceInfo(this.rawSourceCodeInfo);
    return {
      code: Code.OK,
      content: content
    };
  }

  onVisitNode(node: comment.CommentNode): void {
    if (node.astNode) {
      const nodeSignature = AstNodeHelper.getNodeSignature(node.astNode);
      if (StringUtils.isEmpty(nodeSignature)) {
        return;
      }
      const sourceFile = node.astNode.getSourceFile();
      if (!sourceFile) {
        return;
      }
      const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.astNode.getStart());
      this.rawSourceCodeInfo?.addRawNodeInfo(nodeSignature, node.astNode, line + 1, character);
    }
  }
}