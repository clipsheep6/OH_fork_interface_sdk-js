/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

/**
 * Provides an interface for SymbolGlyph.
 *
 * @interface SymbolGlyphInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Provides an interface for SymbolGlyph.
 *
 * @interface SymbolGlyphInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface SymbolGlyphInterface {
  /**
   * Called when resource is entered in SymbolGlyph.
   *
   * @param { Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when resource is entered in SymbolGlyph.
   *
   * @param { Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (value: Resource): SymbolGlyphAttribute;
}

/**
 * The symbol rendering strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * The symbol rendering strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum SymbolRenderingStrategy {
  /**
   * The single rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The single rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  SINGLE = 0,

  /**
   * The multiple color rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The multiple color rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  MULTIPLE_COLOR = 1,

  /**
   * The multiple opacity rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The multiple opacity rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  MULTIPLE_OPACITY = 2,
}

/**
 * The symbol effect strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * The symbol effect strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum SymbolEffectStrategy {
  /**
   * There is no effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * There is no effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  NONE = 0,

  /**
   * The scale effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The scale effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  SCALE = 1,

  /**
   * The hierarchical effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The hierarchical effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  HIERARCHICAL = 2,

  /**
   * The appear effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  APPEAR = 3,

  /**
   * The disappear effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  DISAPPEAR = 4,

  /**
   * The bounce effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  BOUNCE = 5,

  /**
   * The replace effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  REPLACE = 6,

  /**
   * The pulse effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  PULSE = 7,
}

/**
 * Declare the effect options of symbols
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface EffectOptions
{
  /**
   * The repeat times of the effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  repeat?: number,
  
  /**
   * The active state of the effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  isActive?: boolean
}

/**
 * The common subtype effect of symbol
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum CommonSubType {
  /**
   * The scale down animation of symbol 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  DOWN,
  
  /**
   * The scale up animation of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  UP
}

/**
 * Declare type scope type of the symbol
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum ScopeType {
  /**
   * The whole animation of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  WHOLE,
  
  /**
   * The layered animation of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  LAYER,
}

/**
 * Declare fill style of symbol
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum FillStyle {
  /**
   * The cumulative fill style of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  CUMULATIVE,
  
  /**
   * The iterative fill style of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  ITERATIVE,
}

/**
 * Declare visual scale mode of symbol
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
declare enum VisualMode {
  /**
   * The default scale size of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  MEDIUM = 0,

  /**
   * Small scale size of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  SAMLL = 1,

  /**
   * Large scale size of symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  LARGE = 2,
}

/**
 * Defines SymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class SymbolEffect {
}

/**
 * Defines AppearSymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class AppearSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { ScopeType } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(scope?: ScopeType);

  /**
   * The scope type of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  scope?: ScopeType;
}

/**
 * Defines DisappearSymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class DisappearSymbolEffect extends SymbolEffect {
  /**
    * constructor.
    *
    * @param { ScopeType } [scope] -  The scope type of symbol effect.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 12
    */
  constructor(scope?: ScopeType);

  /**
   * The scope type of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  scope?: ScopeType;
}

/**
 * Defines ScaleSymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class ScaleSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { ScopeType } [scope] -  The scope type of symbol effect.
   * @param { CommonSubType } [subType] - The common subtype of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(scope?: ScopeType, subType?: CommonSubType);

  /**
   * The scope type of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  scope?: ScopeType;
  
  /**
   * The common subtype of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  subType?: CommonSubType;
}

/**
 * Defines BounceSymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class BounceSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { ScopeType } [scope] -  The scope type of symbol effect.
   * @param { CommonSubType } [subType] - The common subtype of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(scope?: ScopeType, subType?: CommonSubType);

  /**
   * The scope type of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  scope?: ScopeType;
  
  /**
   * The common subtype of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  subType?: CommonSubType;
}

/**
 * Defines HierarchicalSymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class HierarchicalSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { FillStyle } [fillStyle] -  The fill style of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(fillStyle?: FillStyle);

  /**
   * The fill style of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  fillStyle?: FillStyle;
}

/**
 * Defines ReplaceSymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export class ReplaceSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { ScopeType } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor(scope?: ScopeType);

  /**
   * The scope type of symbol effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  scope?: ScopeType;
}

/**
 * Provides attribute for SymbolGlyph.
 * 
 * @extends CommonMethod<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Provides attribute for SymbolGlyph.
 * 
 * @extends CommonMethod<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class SymbolGlyphAttribute extends CommonMethod<SymbolGlyphAttribute> {
  /**
   * Called when the SymbolGlyph size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the SymbolGlyph size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontSize(value: number | string | Resource): SymbolGlyphAttribute;

  /**
   * Set the visual scale mode of symbol.
   *
   * @param { VisualMode } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  visualMode(value: VisualMode): SymbolGlyphAttribute;

  /**
   * Called when the SymbolGlyph color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the SymbolGlyph color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontColor(value: Array<ResourceColor>): SymbolGlyphAttribute;

  /**
   * Called when the font symbolGlyph weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the font symbolGlyph weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontWeight(value: number | FontWeight | string): SymbolGlyphAttribute;

  /**
   * Called when the symbolGlyph effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the symbolGlyph effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @param { SymbolEffect } [symbolEffect] - The symbol effect type
   * @param { EffectOptions } [effectOptions] - The symbol effect options
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  effectStrategy(value: SymbolEffectStrategy, symbolEffect?: SymbolEffect,
    effectOptions?: EffectOptions): SymbolGlyphAttribute;

  /**
   * Called when the symbolGlyph rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Called when the symbolGlyph rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  renderingStrategy(value: SymbolRenderingStrategy): SymbolGlyphAttribute;
}

/**
 * Defines SymbolGlyph Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines SymbolGlyph Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const SymbolGlyph: SymbolGlyphInterface;

/**
 * Defines SymbolGlyph Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines SymbolGlyph Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const SymbolGlyphInstance: SymbolGlyphAttribute;
