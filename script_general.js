(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"definitions": [{"hfov":360,"label":trans('panorama_39B3D941_3471_691F_41BF_C750F32B0F6D.label'),"thumbnailUrl":"media/panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_t.jpg","hfovMax":130,"partial":false,"hfovMin":"120%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":15360,"rowCount":5,"url":"media/panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_0/{face}/0/{row}_{column}.jpg","height":2560,"class":"TiledImageResourceLevel","colCount":30},{"tags":"ondemand","width":9216,"rowCount":3,"url":"media/panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_0/{face}/1/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","colCount":18},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6}]},"thumbnailUrl":"media/panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_t.jpg"}],"vfov":180,"pitch":0,"data":{"label":"Pakubuwono_360_DraftFinal_Beauty0003"},"id":"panorama_39B3D941_3471_691F_41BF_C750F32B0F6D"},{"data":{"name":"Button37504"},"minHeight":0,"borderSize":0,"width":32,"shadow":false,"visible":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F0C5A7_1F75_A734_41B9_9503E4FD44FF_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F0C5A7_1F75_A734_41B9_9503E4FD44FF","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":32,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F0C5A7_1F75_A734_41B9_9503E4FD44FF.png","mode":"push","rollOverIconURL":"skin/IconButton_11F0C5A7_1F75_A734_41B9_9503E4FD44FF_rollover.png","borderRadius":0},{"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesHorizontalAlign":"center","toolTipShadowBlurRadius":3,"displayTooltipInSurfaceSelection":true,"minHeight":50,"playbackBarBorderSize":0,"minWidth":100,"toolTipFontFamily":"Arial","playbackBarBorderRadius":0,"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","id":"MainViewer","subtitlesEnabled":true,"width":"100%","playbackBarProgressBorderColor":"#000000","toolTipShadowOpacity":1,"toolTipBorderRadius":3,"subtitlesVerticalAlign":"bottom","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"playbackBarHeadShadow":true,"toolTipBackgroundColor":"#F6F6F6","progressRight":0,"playbackBarHeadBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingLeft":5,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"transitionMode":"blending","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","class":"ViewerArea","progressBackgroundColorDirection":"vertical","playbackBarBottom":5,"toolTipHorizontalAlign":"center","translationTransitionDuration":1000,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"progressBorderColor":"#000000","subtitlesPaddingRight":5,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColor":["#3399FF"],"subtitlesBottom":50,"progressBackgroundOpacity":1,"playbackBarHeadHeight":15,"subtitlesShadow":false,"toolTipPaddingLeft":6,"toolTipShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesPaddingTop":5,"subtitlesPaddingBottom":5,"doubleClickAction":"toggle_fullscreen","progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowColor":"#000000","toolTipShadowSpread":0,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBottom":0,"progressHeight":10,"subtitlesTop":0,"toolTipFontStyle":"normal","subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"toolTipPaddingRight":6,"borderSize":0,"subtitlesFontWeight":"normal","progressBorderSize":0,"shadow":false,"height":"100%","progressBarBorderRadius":0,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowOpacity":0.7,"toolTipFontWeight":"normal","toolTipTextShadowOpacity":0,"playbackBarProgressOpacity":1,"paddingTop":0,"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","progressBarBorderSize":0,"subtitlesFontFamily":"Arial","paddingBottom":0,"propagateClick":false,"progressBorderRadius":0,"toolTipPaddingBottom":4,"paddingLeft":0,"transitionDuration":500,"vrPointerSelectionTime":2000,"toolTipShadowHorizontalLength":0,"playbackBarOpacity":1,"progressLeft":0,"subtitlesBorderSize":0,"surfaceReticleOpacity":0.6,"playbackBarHeadBorderColor":"#000000","paddingRight":0,"subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","toolTipShadowColor":"#333333","subtitlesTextShadowBlurRadius":0,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarLeft":0,"toolTipBorderSize":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"toolTipOpacity":1,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundColor":"#000000","playbackBarHeadOpacity":1,"borderRadius":0,"playbackBarProgressBorderRadius":0,"subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF"},{"data":{"name":"Button37500"},"minHeight":0,"borderSize":0,"width":40,"shadow":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F395A6_1F75_A734_41B8_9DEC0E68B8A7_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F395A6_1F75_A734_41B8_9DEC0E68B8A7","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":40,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F395A6_1F75_A734_41B8_9DEC0E68B8A7.png","mode":"push","rollOverIconURL":"skin/IconButton_11F395A6_1F75_A734_41B8_9DEC0E68B8A7_rollover.png","borderRadius":0},{"hfov":360,"label":trans('panorama_39B07F37_3471_6963_41A2_84D12C8685CE.label'),"thumbnailUrl":"media/panorama_39B07F37_3471_6963_41A2_84D12C8685CE_t.jpg","hfovMax":130,"partial":false,"hfovMin":"120%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":15360,"rowCount":5,"url":"media/panorama_39B07F37_3471_6963_41A2_84D12C8685CE_0/{face}/0/{row}_{column}.jpg","height":2560,"class":"TiledImageResourceLevel","colCount":30},{"tags":"ondemand","width":9216,"rowCount":3,"url":"media/panorama_39B07F37_3471_6963_41A2_84D12C8685CE_0/{face}/1/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","colCount":18},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_39B07F37_3471_6963_41A2_84D12C8685CE_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_39B07F37_3471_6963_41A2_84D12C8685CE_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_39B07F37_3471_6963_41A2_84D12C8685CE_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6}]},"thumbnailUrl":"media/panorama_39B07F37_3471_6963_41A2_84D12C8685CE_t.jpg"}],"vfov":180,"pitch":0,"data":{"label":"Pakubuwono_360_DraftFinal_Beauty0002"},"id":"panorama_39B07F37_3471_6963_41A2_84D12C8685CE"},{"data":{"name":"Button37508"},"minHeight":0,"borderSize":0,"width":40,"shadow":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F085A7_1F75_A734_41A4_FA54F6CDC6E5_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F085A7_1F75_A734_41A4_FA54F6CDC6E5","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":40,"class":"IconButton","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","transparencyActive":true,"iconURL":"skin/IconButton_11F085A7_1F75_A734_41A4_FA54F6CDC6E5.png","mode":"push","rollOverIconURL":"skin/IconButton_11F085A7_1F75_A734_41A4_FA54F6CDC6E5_rollover.png","borderRadius":0},{"class":"PanoramaCamera","initialSequence":"this.sequence_39B01341_3471_191F_4191_AD8F5C32163C","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"id":"panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_camera"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_398545D8_3471_192D_4180_C2167C663C51_camera","media":"this.panorama_398545D8_3471_192D_4180_C2167C663C51","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_39B3D941_3471_691F_41BF_C750F32B0F6D_camera","media":"this.panorama_39B3D941_3471_691F_41BF_C750F32B0F6D","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_39B07F37_3471_6963_41A2_84D12C8685CE_camera","media":"this.panorama_39B07F37_3471_6963_41A2_84D12C8685CE","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"data":{"name":"Container37498"},"minHeight":20,"borderSize":0,"gap":4,"minWidth":20,"shadow":false,"width":"100%","backgroundOpacity":0,"paddingTop":0,"id":"Container_11F055A7_1F75_A734_4196_3BD5D0D578AF","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"scrollBarMargin":2,"bottom":"0%","horizontalAlign":"center","scrollBarOpacity":0.5,"paddingRight":0,"toolTipHorizontalAlign":"center","contentOpaque":false,"height":"4.715%","class":"Container","children":["this.IconButton_11F045A4_1F75_A734_41BD_458A9CA8830F","this.IconButton_11F395A6_1F75_A734_41B8_9DEC0E68B8A7","this.IconButton_11F375A6_1F75_A734_418D_7D13C727D67F","this.IconButton_11F365A6_1F75_A734_41B8_09A9809AE7EC","this.Container_11F355A6_1F75_A734_4173_7541476FA28A","this.IconButton_11F095A7_1F75_A734_418F_7DD28147A9B8","this.IconButton_11F085A7_1F75_A734_41A4_FA54F6CDC6E5","this.IconButton_11F075A7_1F75_A734_41BB_FDCAAD699E53","this.IconButton_11F065A7_1F75_A734_4130_61BE030F20F4"],"verticalAlign":"middle","scrollBarWidth":10,"overflow":"hidden","scrollBarVisible":"rollOver","layout":"horizontal","borderRadius":0,"scrollBarColor":"#000000","right":"0%"},{"hfov":360,"label":trans('panorama_398545D8_3471_192D_4180_C2167C663C51.label'),"thumbnailUrl":"media/panorama_398545D8_3471_192D_4180_C2167C663C51_t.jpg","hfovMax":130,"partial":false,"hfovMin":"120%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":15360,"rowCount":5,"url":"media/panorama_398545D8_3471_192D_4180_C2167C663C51_0/{face}/0/{row}_{column}.jpg","height":2560,"class":"TiledImageResourceLevel","colCount":30},{"tags":"ondemand","width":9216,"rowCount":3,"url":"media/panorama_398545D8_3471_192D_4180_C2167C663C51_0/{face}/1/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","colCount":18},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_398545D8_3471_192D_4180_C2167C663C51_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_398545D8_3471_192D_4180_C2167C663C51_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_398545D8_3471_192D_4180_C2167C663C51_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":6}]},"thumbnailUrl":"media/panorama_398545D8_3471_192D_4180_C2167C663C51_t.jpg"}],"vfov":180,"pitch":0,"data":{"label":"Pakubuwono_360_DraftFinal_Beauty0001"},"id":"panorama_398545D8_3471_192D_4180_C2167C663C51"},{"data":{"name":"Button37499"},"minHeight":0,"borderSize":0,"width":32,"shadow":false,"visible":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F045A4_1F75_A734_41BD_458A9CA8830F_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F045A4_1F75_A734_41BD_458A9CA8830F","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":32,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F045A4_1F75_A734_41BD_458A9CA8830F.png","mode":"push","rollOverIconURL":"skin/IconButton_11F045A4_1F75_A734_41BD_458A9CA8830F_rollover.png","borderRadius":0},{"class":"PanoramaCamera","initialSequence":"this.sequence_39B07341_3471_191F_41C4_EFF56F082280","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"id":"panorama_39B07F37_3471_6963_41A2_84D12C8685CE_camera"},{"data":{"name":"Button37506"},"minHeight":0,"borderSize":0,"width":32,"shadow":false,"visible":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F0A5A7_1F75_A734_41BA_C660184DE13C_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F0A5A7_1F75_A734_41BA_C660184DE13C","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":32,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F0A5A7_1F75_A734_41BA_C660184DE13C.png","mode":"push","rollOverIconURL":"skin/IconButton_11F0A5A7_1F75_A734_41BA_C660184DE13C_rollover.png","borderRadius":0},{"data":{"name":"Button37501"},"minHeight":0,"borderSize":0,"width":40,"shadow":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F375A6_1F75_A734_418D_7D13C727D67F_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F375A6_1F75_A734_418D_7D13C727D67F","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":40,"class":"IconButton","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","transparencyActive":true,"iconURL":"skin/IconButton_11F375A6_1F75_A734_418D_7D13C727D67F.png","mode":"push","rollOverIconURL":"skin/IconButton_11F375A6_1F75_A734_418D_7D13C727D67F_rollover.png","borderRadius":0},{"data":{"name":"Button37507"},"minHeight":0,"borderSize":0,"width":32,"shadow":false,"visible":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F095A7_1F75_A734_418F_7DD28147A9B8_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F095A7_1F75_A734_418F_7DD28147A9B8","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":32,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F095A7_1F75_A734_418F_7DD28147A9B8.png","mode":"push","rollOverIconURL":"skin/IconButton_11F095A7_1F75_A734_418F_7DD28147A9B8_rollover.png","borderRadius":0},{"surfaceSelectionEnabled":false,"buttonRestart":"this.IconButton_11F395A6_1F75_A734_41B8_9DEC0E68B8A7","touchControlMode":"drag_rotation","buttonMoveDown":"this.IconButton_11F0A5A7_1F75_A734_41BA_C660184DE13C","zoomEnabled":true,"buttonMoveLeft":"this.IconButton_11F365A6_1F75_A734_41B8_09A9809AE7EC","viewerArea":"this.MainViewer","buttonMoveUp":"this.IconButton_11F0C5A7_1F75_A734_41B9_9503E4FD44FF","class":"PanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","buttonMoveRight":"this.IconButton_11F095A7_1F75_A734_418F_7DD28147A9B8","gyroscopeVerticalDraggingEnabled":true,"buttonZoomOut":"this.IconButton_11F045A4_1F75_A734_41BD_458A9CA8830F","aaEnabled":true,"buttonZoomIn":"this.IconButton_11F065A7_1F75_A734_4130_61BE030F20F4","arrowKeysAction":"translate","buttonPause":"this.IconButton_11F0B5A7_1F75_A734_41A9_4FAC972150D4","id":"MainViewerPanoramaPlayer"},{"data":{"name":"Button37505"},"minHeight":0,"borderSize":0,"width":40,"shadow":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F0B5A7_1F75_A734_41A9_4FAC972150D4_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F0B5A7_1F75_A734_41A9_4FAC972150D4","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":40,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F0B5A7_1F75_A734_41A9_4FAC972150D4.png","mode":"toggle","borderRadius":0},{"data":{"name":"Container37503"},"gap":4,"minHeight":20,"borderSize":0,"width":40,"shadow":false,"minWidth":20,"backgroundOpacity":0,"scrollBarMargin":2,"id":"Container_11F355A6_1F75_A734_4173_7541476FA28A","paddingTop":0,"paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","overflow":"hidden","scrollBarOpacity":0.5,"paddingRight":0,"toolTipHorizontalAlign":"center","contentOpaque":false,"height":"100%","class":"Container","verticalAlign":"middle","scrollBarWidth":10,"layout":"vertical","scrollBarVisible":"rollOver","scrollBarColor":"#000000","children":["this.IconButton_11F0C5A7_1F75_A734_41B9_9503E4FD44FF","this.IconButton_11F0B5A7_1F75_A734_41A9_4FAC972150D4","this.IconButton_11F0A5A7_1F75_A734_41BA_C660184DE13C"],"borderRadius":0},{"data":{"name":"Button37510"},"minHeight":0,"borderSize":0,"width":32,"shadow":false,"visible":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F065A7_1F75_A734_4130_61BE030F20F4_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F065A7_1F75_A734_4130_61BE030F20F4","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":32,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F065A7_1F75_A734_4130_61BE030F20F4.png","mode":"push","rollOverIconURL":"skin/IconButton_11F065A7_1F75_A734_4130_61BE030F20F4_rollover.png","borderRadius":0},{"data":{"name":"Button37509"},"minHeight":0,"borderSize":0,"width":40,"shadow":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F075A7_1F75_A734_41BB_FDCAAD699E53_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F075A7_1F75_A734_41BB_FDCAAD699E53","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":40,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F075A7_1F75_A734_41BB_FDCAAD699E53.png","mode":"toggle","borderRadius":0},{"data":{"name":"Button37502"},"minHeight":0,"borderSize":0,"width":32,"shadow":false,"visible":false,"cursor":"hand","minWidth":0,"pressedIconURL":"skin/IconButton_11F365A6_1F75_A734_41B8_09A9809AE7EC_pressed.png","backgroundOpacity":0,"paddingTop":0,"id":"IconButton_11F365A6_1F75_A734_41B8_09A9809AE7EC","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"horizontalAlign":"center","verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":32,"class":"IconButton","transparencyActive":true,"iconURL":"skin/IconButton_11F365A6_1F75_A734_41B8_09A9809AE7EC.png","mode":"push","rollOverIconURL":"skin/IconButton_11F365A6_1F75_A734_41B8_09A9809AE7EC_rollover.png","borderRadius":0},{"class":"PanoramaCamera","initialSequence":"this.sequence_39B05340_3471_191D_41C6_ECF0129E4BC8","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"id":"panorama_398545D8_3471_192D_4180_C2167C663C51_camera"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"id":"sequence_39B01341_3471_191F_4191_AD8F5C32163C"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"id":"sequence_39B07341_3471_191F_41C4_EFF56F082280"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"id":"sequence_39B05340_3471_191D_41C6_ECF0129E4BC8"}],"data":{"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player468","defaultLocale":"en","locales":{"en":"locale/en.txt"}},"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"minHeight":20,"borderSize":0,"gap":10,"minWidth":20,"shadow":false,"vrPolyfillScale":0.75,"width":"100%","mediaActivationMode":"window","id":"rootPlayer","backgroundOpacity":1,"paddingTop":0,"buttonToggleMute":"this.IconButton_11F075A7_1F75_A734_41BB_FDCAAD699E53","defaultVRPointer":"laser","paddingBottom":0,"propagateClick":false,"paddingLeft":0,"scrollBarMargin":2,"scripts":{"copyToClipboard":TDV.Tour.Script.copyToClipboard,"translate":TDV.Tour.Script.translate,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getOverlays":TDV.Tour.Script.getOverlays,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getKey":TDV.Tour.Script.getKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"clone":TDV.Tour.Script.clone,"resumePlayers":TDV.Tour.Script.resumePlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"init":TDV.Tour.Script.init,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"cloneCamera":TDV.Tour.Script.cloneCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMainViewer":TDV.Tour.Script.getMainViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showWindow":TDV.Tour.Script.showWindow,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizStart":TDV.Tour.Script.quizStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPixels":TDV.Tour.Script.getPixels,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"existsKey":TDV.Tour.Script.existsKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists},"mobileMipmappingEnabled":false,"horizontalAlign":"left","downloadEnabled":false,"scrollBarOpacity":0.5,"paddingRight":0,"mouseWheelEnabled":true,"backgroundColor":["#FFFFFF"],"contentOpaque":false,"height":"100%","class":"Player","toolTipHorizontalAlign":"center","verticalAlign":"top","scrollBarWidth":10,"overflow":"hidden","scrollBarVisible":"rollOver","layout":"absolute","desktopMipmappingEnabled":false,"start":"this.init()","scrollBarColor":"#000000","children":["this.MainViewer","this.Container_11F055A7_1F75_A734_4196_3BD5D0D578AF"],"borderRadius":0,"backgroundPreloadEnabled":true};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Tue Jan 23 2024