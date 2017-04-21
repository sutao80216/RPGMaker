//=============================================================================
// 詳細ステータス画面の表示内容を変更するプラグイン
// FTKR_CSS_DetailedStatus.js
// 作成者     : フトコロ
// 作成日     : 2017/04/21
// 最終更新日 : 
// バージョン : v1.0.0
//=============================================================================

var Imported = Imported || {};
Imported.FTKR_CSS_DS = true;

var FTKR = FTKR || {};
FTKR.CSS.DS = FTKR.CSS.DS || {};

//=============================================================================
/*:
 * @plugindesc v1.0.0 詳細ステータス画面の表示内容を変更するプラグイン
 * @author フトコロ
 *
 * @param --詳細ステータスの表示設定--
 * @default
 * 
 * @param Enabled Detailed Status
 * @desc 詳細ステータス画面のレイアウト変更機能を使うか。
 * 0 - 無効, 1 - 有効
 * @default 0
 * 
 * @param DS Lines Number
 * @desc 各表示エリアの行数を指定します。
 * 詳細はヘルプ参照
 * @default 1,4,6,2
 * 
 * @param DS Line0 Status
 * @desc Line0部に表示するステータスを指定します。
 * 詳細はヘルプ参照
 * @default name;class;nickname
 * 
 * @param DS Space0
 * @desc 各Textの間隔を指定します。
 * @default 0,20,50,0
 * 
 * @param DS Space In Text0
 * @desc Text内で複数表示する場合の間隔を指定します。
 * @default 5
 * 
 * @param DS Width Rate0
 * @desc Text1~Text3の表示幅の比率を指定します。
 * 詳細はヘルプ参照
 * @default 1,1,1
 *
 * @param DS Line1 Status
 * @desc Line1部に表示するステータスを指定します。
 * 詳細はヘルプ参照
 * @default face;level,state,hp,mp;custom(0),custom(1),custom(2),custom(3)
 * 
 * @param DS Space1
 * @desc 各Textの間隔を指定します。
 * @default 0,20,50,0
 * 
 * @param DS Space In Text1
 * @desc Text内で複数表示する場合の間隔を指定します。
 * @default 5
 * 
 * @param DS Width Rate1
 * @desc Text1~Text3の表示幅の比率を指定します。
 * 詳細はヘルプ参照
 * @default 2,2,3
 *
 * @param DS Line2 Status
 * @desc Line2部に表示するステータスを指定します。
 * 詳細はヘルプ参照
 * @default param(2),param(3),param(4),param(5),param(6),param(7);;equip(0),equip(1),equip(2),equip(3),equip(4)
 * 
 * @param DS Space2
 * @desc 各Textの間隔を指定します。
 * @default 40,100,0,0
 * 
 * @param DS Space In Text2
 * @desc Text内で複数表示する場合の間隔を指定します。
 * @default 5
 * 
 * @param DS Width Rate2
 * @desc Text1~Text3の表示幅の比率を指定します。
 * 詳細はヘルプ参照
 * @default 4,1,5
 *
 * @param DS Line3 Status
 * @desc Line3部に表示するステータスを指定します。
 * 詳細はヘルプ参照
 * @default profile;;
 * 
 * @param DS Space3
 * @desc 各Textの間隔を指定します。
 * @default 0,20,50,0
 * 
 * @param DS Space In Text3
 * @desc Text内で複数表示する場合の間隔を指定します。
 * @default 5
 * 
 * @param DS Width Rate3
 * @desc Text1~Text3の表示幅の比率を指定します。
 * 詳細はヘルプ参照
 * @default 1,0,0
 *
 * @param --ラインの設定--
 * @default
 * 
 * @param DS Horz Line Color
 * @desc 各表示エリア間の線色を指定します。
 * -1 は非表示
 * @default 0
 * 
 * @param DS Horz Line Thick
 * @desc 各表示エリア間の線幅を指定します。
 * @default 2
 * 
 * @param DS Horz Line Opacity
 * @desc 各表示エリア間の線色の透明度を指定します。
 * @default 48
 * 
 * 
 * @help
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * 本プラグインを実装することで、詳細ステータス画面のレイアウトを変更できます。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 設定方法
 *-----------------------------------------------------------------------------
 * 1.「プラグインマネージャー(プラグイン管理)」に、本プラグインを追加して
 *    ください。
 * 
 * 2. 本プラグインを動作させるためには、
 *    FTKR_CustomSimpleActorStatus.jsが必要です。
 *    本プラグインは、FTKR_CustomSimpleActorStatus.jsよりも下の位置に
 *    なるように追加してください。
 * 
 * 
 *-----------------------------------------------------------------------------
 * アクターの詳細ステータス表示の設定
 *-----------------------------------------------------------------------------
 * プラグインパラメータの設定により、ステータス画面で表示する表示レイアウトを
 * 変更することができます。
 * 
 * <Enabled Detailed Status>
 *    :詳細ステータス画面のレイアウト変更機能を使うか指定します。
 *    :0 - 無効, 1 - 有効
 * 
 * <DS Lines Number>
 *    :詳細ステータスウィンドウは、表示エリアを横に4分割で分けています。
 *    :このパラメータで何行ごとに分割するかを、カンマ(,)で区切って指定します。
 *    :入力例)
 *    : 1,4,6,2
 * 
 * <DS Line0 Status>
 * <DS Line1 Status>
 * <DS Line2 Status>
 * <DS Line3 Status>
 *    :横に4分割した表示エリアをそれぞれLine0 ~ Line3として、
 *    :それぞれのエリアで表示するパラメータを設定します。
 *    :
 *    :セミコロン(;)を使用して、左側、中央、右側の表示内容を区切ります。
 *    :<Actor Status>における、Text1(左側)、Text2(中央)、Text3(右側)に
 *    :相当します。
 *    :
 *    :セミコロン(;)で区切った間の入力方式は、<Actor Status Text*>と同じです。
 *    :入力例)
 *    : name;class;level,hp,mp
 *    : - 左側に name を表示します。
 *    :   中央に class を表示します。
 *    :   右側に level,hp,mp を縦に並べて表示します。
 * 
 * <DS Space0>
 * <DS Space1>
 * <DS Space2>
 * <DS Space3>
 *    :各Lineにおけるのテキストの間隔をカンマ(,)で区切って指定します。
 *    :入力方式は、<Actor Status Space>と同じです。
 * 
 * <DS Space In Text0>
 * <DS Space In Text1>
 * <DS Space In Text2>
 * <DS Space In Text3>
 *    :各Lineにおける、複数のステータスを1つのテキスト内に表示した場合の
 *    :間隔を指定します。
 *    :入力方式は、<Actor Status Space In text>と同じです。
 * 
 * <DS Width Rate0>
 * <DS Width Rate1>
 * <DS Width Rate2>
 * <DS Width Rate3>
 *    :ウィンドウを3分割する場合に、Text1~Text3の表示エリアをどのような比率で
 *    :確保するか設定します。
 *    :入力方式は、<Actor Status Width Rate>と同じです。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 詳細ステータス表示のラインの設定
 *-----------------------------------------------------------------------------
 * プラグインパラメータの設定により、ステータス画面で表示するラインを
 * 変更することができます。
 * 
 * <DS Horz Line Color>
 *    :表示エリア間のラインの線色を設定します。
 *    :-1 はラインが無くなり、表示エリアがその分上にずれます。
 * 
 * <DS Horz Line Thick>
 *    :表示エリア間のラインの線幅を設定します。
 *    :幅を 0 にしても非表示になるだけで、表示エリアはずれません。
 * 
 * <DS Horz Line Opacity>
 *    :表示エリア間のラインの線の透明度を設定します。
 *    :透明度を 0 にしても非表示になるだけで、表示エリアはずれません。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 本プラグインのライセンスについて(License)
 *-----------------------------------------------------------------------------
 * 本プラグインはMITライセンスのもとで公開しています。
 * This plugin is released under the MIT License.
 * 
 * 
 *-----------------------------------------------------------------------------
 * 変更来歴
 *-----------------------------------------------------------------------------
 * 
 * v1.0.0 - 2017/04/21 : 初版作成
 * 
 *-----------------------------------------------------------------------------
 */
//=============================================================================

if (Imported.FTKR_CSS) {

//=============================================================================
// プラグイン パラメータ
//=============================================================================
FTKR.CSS.DS.parameters = PluginManager.parameters('FTKR_CSS_DetailedStatus');

//詳細ステータスオブジェクト
FTKR.CSS.DS.detailedStatus = {
    lineNum:String(FTKR.CSS.DS.parameters['DS Lines Number'] || ''),
    horz:{
      thick:Number(FTKR.CSS.DS.parameters['DS Horz Line Thick'] || 0),
      color:Number(FTKR.CSS.DS.parameters['DS Horz Line Color'] || 0),
      opacity:Number(FTKR.CSS.DS.parameters['DS Horz Line Opacity'] || 0),
    },
    line:[
      String(FTKR.CSS.DS.parameters['DS Line0 Status'] || ''),
      String(FTKR.CSS.DS.parameters['DS Line1 Status'] || ''),
      String(FTKR.CSS.DS.parameters['DS Line2 Status'] || ''),
      String(FTKR.CSS.DS.parameters['DS Line3 Status'] || ''),
    ],
    space:[
      String(FTKR.CSS.DS.parameters['DS Space0'] || ''),
      String(FTKR.CSS.DS.parameters['DS Space1'] || ''),
      String(FTKR.CSS.DS.parameters['DS Space2'] || ''),
      String(FTKR.CSS.DS.parameters['DS Space3'] || ''),
    ],
    spaceIn:[
      Number(FTKR.CSS.DS.parameters['DS Space In Text0'] || 0),
      Number(FTKR.CSS.DS.parameters['DS Space In Text1'] || 0),
      Number(FTKR.CSS.DS.parameters['DS Space In Text2'] || 0),
      Number(FTKR.CSS.DS.parameters['DS Space In Text3'] || 0),
    ],
    widthRate:[
      String(FTKR.CSS.DS.parameters['DS Width Rate0'] || ''),
      String(FTKR.CSS.DS.parameters['DS Width Rate1'] || ''),
      String(FTKR.CSS.DS.parameters['DS Width Rate2'] || ''),
      String(FTKR.CSS.DS.parameters['DS Width Rate3'] || ''),
    ],
};

//=============================================================================
// Window_Base
//=============================================================================

/*-------------------------------------------------------------
アクターの詳細ステータスを表示する関数
drawCssDetailedStatus(actor, x, y, width, dss)
actor :アクターオブジェクト
x     :x座標
y     :y座標
width :表示エリアの幅
dss   :詳細ステータスオブジェクト
-------------------------------------------------------------*/
Window_Base.prototype.drawCssDetailedStatus = function(actor, x, y, width, dss) {
    if (!dss) dss = FTKR.CSS.DS.detailedStatus;
    var lineHeight = this.lineHeight();
    var lineNums = dss.lineNum.split(',').num();
    var ays = []; var ahs = [];
    for (var t = 0; t < 4; t++) {
        var text = dss.line[t].split(';');
        var lss = {
            text1:text[0] || '',
            text2:text[1] || '',
            text3:text[2] || '',
            space:dss.space[t],
            spaceIn:dss.spaceIn[t],
            widthRate:dss.widthRate[t],
            faceLine:dss.faceLine,
        };
        ahs[t] = lineHeight * lineNums[t];
        ays[t] = t > 0 ? ays[t-1] + ahs[t-1]: y;
        this.drawCssActorStatus(0, actor, x, ays[t], width, ahs[t], lss);
        ahs[t] += this.drawCssHorzLine(ays[t] + ahs[t]) * lineHeight;
    }
};

//表示エリア間のラインの表示関数
Window_Status.prototype.drawCssHorzLine = function(y, horz) {
    horz = horz || FTKR.CSS.DS.detailedStatus.horz;
    if (horz.color === -1) return 0;
    var lineY = y + this.lineHeight() / 2 - 1;
    this.contents.paintOpacity = horz.opacity;
    this.contents.fillRect(0, lineY, this.contentsWidth(), horz.thick, this.textColor(horz.color));
    this.contents.paintOpacity = 255;
    return 1;
};

//=============================================================================
// Window_Status
// ステータス画面のステータスウィンドウの表示クラス
//=============================================================================

//書き換え
Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        this.drawCssDetailedStatus(this._actor, 0, 0, w);
    }
};

};//TKR_CustomSimpleActorStatus.jsが必要