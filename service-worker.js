/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","1678c57313cd6249d91f742a30e49324"],["E:/qinhao/hexo/public/5G网络优化/index.html","455264d120cfc2e51476ad1dca49997b"],["E:/qinhao/hexo/public/Algorithm_1/index.html","c400b0739eca7c5d56802f70a71dbd7b"],["E:/qinhao/hexo/public/Base/index.html","6fd3a5e93bcc216285c6da0b52796833"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e681688149dde659d46214a34999147b"],["E:/qinhao/hexo/public/CPU_Register/index.html","829dc259877dc4697e05e5aeedee5156"],["E:/qinhao/hexo/public/C_Programming_1/index.html","c393bb852dd816ed48b3c1735c8aa958"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","c0f60f037e14c93e708e5f88afc49c10"],["E:/qinhao/hexo/public/FileDownload/index.html","e951a6a20eaa2b49f17a09357616336d"],["E:/qinhao/hexo/public/Files_and_directories/index.html","de493a8965c6ee8c8bb5e90f052b59a2"],["E:/qinhao/hexo/public/FixedTools/index.html","1850115b4ed05d1015a8b5a436da7ae7"],["E:/qinhao/hexo/public/GRE-VPN/index.html","c97cd5b4893c988a49ded797722a4a16"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","6761a757e55c9dbb62aedb6f6d7d6e96"],["E:/qinhao/hexo/public/GSM/index.html","6f99fbc5ec83e05a4d869ab408a09287"],["E:/qinhao/hexo/public/ICIC/index.html","8c05697201819a40c89aac8e61698931"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","220ba9d3d60ae913e192217d4f643a38"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","a5bac805bfed198dde5515415e28e3e8"],["E:/qinhao/hexo/public/JDBC/index.html","990b6f4b1bd158dd1bbe62140ec8dc55"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","c605e548bfbf89eb79e6445a35483f7d"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","a0accb5d71284218ad6d3b3fc3e94da7"],["E:/qinhao/hexo/public/LTE/index.html","5cd7cb8fd7c4372240a994f3c8b0982a"],["E:/qinhao/hexo/public/Layer/index.html","454fe5f7fe0039f6835c721a3a4a00e5"],["E:/qinhao/hexo/public/Linux_often_use/index.html","c4ccbf989d2e8c1c3b6008782f17394b"],["E:/qinhao/hexo/public/MIMO/index.html","a950c8961241055290feae8c90971e92"],["E:/qinhao/hexo/public/MySQL/index.html","6d4ddda47adc7088d538037f05b0d0e1"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","1ff2155d5f4fa35f50c14836bc68ee08"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","50d62c1356a952fea2de3bd0320da29e"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","f377ddb81dd1aa3b206dd96eb98a936a"],["E:/qinhao/hexo/public/NB-IoT/index.html","1cec1ec1d59cc5a41ad86cb8dd9d63e9"],["E:/qinhao/hexo/public/Network_Access/index.html","efc0542d18f8eb17eef3e3dd1e8949f1"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","b8ce2e76f7e4be3a16b75f1504e4b8d8"],["E:/qinhao/hexo/public/OFDMA/index.html","1e41c05837de75e0ebc97fa479f7fdbf"],["E:/qinhao/hexo/public/OLT_command/index.html","4ce08c6cea50338934eb94b630588dd3"],["E:/qinhao/hexo/public/OverLoad_1/index.html","c952e3358afab7a3df1b4e0cd45762a6"],["E:/qinhao/hexo/public/Python-3/index.html","917fb04dbad420a54085571c26cd7477"],["E:/qinhao/hexo/public/Python-4/index.html","bdd86752141410410c7fa24b923c1650"],["E:/qinhao/hexo/public/Python-5/index.html","50898f9031852e76200b2e44e1e3ff4a"],["E:/qinhao/hexo/public/PythonUdp/index.html","57d23d966a6569a62f4b146e350d9e84"],["E:/qinhao/hexo/public/Python_basic/index.html","c40a45a72c1d537bd9013fc7a94bc69e"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","8387ecde1f0a4f80d33b71e565389bd9"],["E:/qinhao/hexo/public/Python_variable/index.html","74ce70c4da28012a16150266ac40f642"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","8a3eadba6e9fd65550febba0250bfc4e"],["E:/qinhao/hexo/public/TCP/index.html","8e274b61c0dc054d0413913d7d84b35a"],["E:/qinhao/hexo/public/TCP_client/index.html","f0dcc1707d211902196d34584013193c"],["E:/qinhao/hexo/public/TCP_server/index.html","0ca5d89c834d3d590f9e11e6ed1188e5"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","0913f0947ecfc51c2f2879b0279d006f"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","1c27f3afc003c6cb36dfd8bbf49e3536"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","5f4093c638d27f24cbdfc968a79fed08"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","06c8d93102b5229d7a9956b6f95ecc83"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","885d556f07674131ffdb9af941831225"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","b724ac6cc36945d427595201f884a4f1"],["E:/qinhao/hexo/public/about/index.html","20aaa4c366e713012f9afc7335609d82"],["E:/qinhao/hexo/public/acl/index.html","a939281d59885adb7612b6b40be24ac0"],["E:/qinhao/hexo/public/archives/2020/01/index.html","863b9ebc88f35ceb59c4c11393036b69"],["E:/qinhao/hexo/public/archives/2020/02/index.html","ec90c397a8b47de18bf0f9b8a9604db1"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","7357db888bbd20206b6902dc3afa9362"],["E:/qinhao/hexo/public/archives/2020/03/index.html","a594e359366157eedf47ed48b968c793"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","ec856e7c9504ecc7671d271a920ba3da"],["E:/qinhao/hexo/public/archives/2020/04/index.html","1fcb1de95c9007d4a61bdff1145e3acc"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d7036f3cee00ce72de78ceab861e3ef9"],["E:/qinhao/hexo/public/archives/2020/06/index.html","fce32f09eb4121ed57a933d3519b80a0"],["E:/qinhao/hexo/public/archives/2020/07/index.html","039bf0b5ac9e99a8f536ad712af3e112"],["E:/qinhao/hexo/public/archives/2020/08/index.html","399866ee01db794e3eadc27e82b64188"],["E:/qinhao/hexo/public/archives/2020/10/index.html","a1b6fe0351766db44b5b4781735019dc"],["E:/qinhao/hexo/public/archives/2020/11/index.html","378a2c31421fcba8259bd93ed8018a60"],["E:/qinhao/hexo/public/archives/2020/index.html","cdd46c42f6f55b12e6597ccf4498f620"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","b77bd7cebe869cb730c92b5c518a1e4f"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","64410766561df13f2861c59aed20142e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","dfa75c9be2c20183a4242b0af43f7dae"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","6f13e4c6317c18104b44c0d1210c3d6d"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","f7a924cbd89b502d1ab790b0191f0afd"],["E:/qinhao/hexo/public/archives/2021/03/index.html","849d5672a75845e70905841acab84ba1"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","4ac26ff8117e803ec4bb65cde349061d"],["E:/qinhao/hexo/public/archives/2021/04/index.html","3d60f2f694a920bbb07313539d750a2a"],["E:/qinhao/hexo/public/archives/2021/05/index.html","1a138d178cc60f17402f0352e1339058"],["E:/qinhao/hexo/public/archives/2021/06/index.html","142086b13ddcb086c0076e74fdbfbda3"],["E:/qinhao/hexo/public/archives/2021/07/index.html","f39d958c8235d6560ddc1bd2828fce9f"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","df57614bd8cc168e1a05736946c5c311"],["E:/qinhao/hexo/public/archives/2021/08/index.html","9c702a351c75744529c6373029369f72"],["E:/qinhao/hexo/public/archives/2021/09/index.html","76a837a4314a05898fe6e097fb5d5df8"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","11c6f041363bdb02d0238bb81d71f6fc"],["E:/qinhao/hexo/public/archives/2021/10/index.html","e7b6966a6fefe45b1a41ee0e73267d25"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","ced77810cb82de6661476d75d8bcd1e5"],["E:/qinhao/hexo/public/archives/2021/index.html","2634aa25c6c1df8a3c09ef63d00cd42f"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","7ed461bc5cdf03341bbe7127614ccb7d"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","174038b39a62acd07afef8a845f75d0d"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","d85a483d27923a2faac04255f968d3ec"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","fc00daac6aa3f1a7daa1246944edb587"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","4f25a0712c2358d32f66ae55b55913b5"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","8b8c7e5d1f95051b2cfbe427df5e53b2"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","4f3b57102d70ba5674eafc00e8b6383e"],["E:/qinhao/hexo/public/archives/index.html","710c8fa78068bcb04aecdad35207d9ac"],["E:/qinhao/hexo/public/archives/page/10/index.html","179f4c30b561a05eeb3d9f5069b26e23"],["E:/qinhao/hexo/public/archives/page/11/index.html","d824beec8bb1546dc2db20679eb59c78"],["E:/qinhao/hexo/public/archives/page/12/index.html","d824beec8bb1546dc2db20679eb59c78"],["E:/qinhao/hexo/public/archives/page/13/index.html","d824beec8bb1546dc2db20679eb59c78"],["E:/qinhao/hexo/public/archives/page/2/index.html","0e0ecd755359a7e8c2ff7c4b95ecfe7e"],["E:/qinhao/hexo/public/archives/page/3/index.html","0e0ecd755359a7e8c2ff7c4b95ecfe7e"],["E:/qinhao/hexo/public/archives/page/4/index.html","0e0ecd755359a7e8c2ff7c4b95ecfe7e"],["E:/qinhao/hexo/public/archives/page/5/index.html","0e0ecd755359a7e8c2ff7c4b95ecfe7e"],["E:/qinhao/hexo/public/archives/page/6/index.html","0e0ecd755359a7e8c2ff7c4b95ecfe7e"],["E:/qinhao/hexo/public/archives/page/7/index.html","179f4c30b561a05eeb3d9f5069b26e23"],["E:/qinhao/hexo/public/archives/page/8/index.html","179f4c30b561a05eeb3d9f5069b26e23"],["E:/qinhao/hexo/public/archives/page/9/index.html","179f4c30b561a05eeb3d9f5069b26e23"],["E:/qinhao/hexo/public/artitalk/index.html","07056a453f639d0bd4d51a902cec117e"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","106f30cc59409c31b35b6a9bf7181996"],["E:/qinhao/hexo/public/bitwarden/index.html","dbd57ccaa4317ce5d871bf2dcdf6b01e"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","b8b2574dc32dcfd21d7af128010c5c23"],["E:/qinhao/hexo/public/c-11/index.html","456383fdbac98d673edbabd635fdb8d0"],["E:/qinhao/hexo/public/c_1/index.html","720b7ad0f4fbbe20e1502577e25105e4"],["E:/qinhao/hexo/public/c_10/index.html","30521d052d262ac14f2fc346752cdd63"],["E:/qinhao/hexo/public/c_2/index.html","da1a6221aeee1966e05a6bc65c37cb2f"],["E:/qinhao/hexo/public/c_3/index.html","14c66a5704b34838c54e03695a0274bf"],["E:/qinhao/hexo/public/c_4/index.html","9e562a425edfd3171d60721998b032e3"],["E:/qinhao/hexo/public/c_5/index.html","abf0998564016e37a78497fc31bfebe1"],["E:/qinhao/hexo/public/c_6/index.html","a2dc6449b42953b6b401e58f75905a11"],["E:/qinhao/hexo/public/c_7/index.html","deca73b49fdf23a2ab328b71d15e5f5c"],["E:/qinhao/hexo/public/c_8/index.html","c1f0a586ff79fe651727d7ba1de9068d"],["E:/qinhao/hexo/public/c_9/index.html","f5d15ef95c8c22719196301950ff1af1"],["E:/qinhao/hexo/public/categories/C语言/index.html","5a7a2476cae0af2026e5d33ab213ad7f"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","dc127ff89f1dd8495c7a2f8ac9fed246"],["E:/qinhao/hexo/public/categories/Java/index.html","91fd9b8e189720cb0d122ea320334743"],["E:/qinhao/hexo/public/categories/Linux/index.html","33e5ef445ce94d4e50ff3c6a9700adcb"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","f42ec7c5f000f18e728e443885e8b047"],["E:/qinhao/hexo/public/categories/Python/index.html","6582a35d4e7d38a327fd9ea39f7662a1"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","1ef7cd3a3d645f0f4a6159392be57a2f"],["E:/qinhao/hexo/public/categories/交换机/index.html","398f4f2eabf1c730c32ac6a88dd444b5"],["E:/qinhao/hexo/public/categories/前端学习/index.html","f8672ed000b4f33c5ad952e33596b9de"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a7c432d220e40604ed4860039383b81b"],["E:/qinhao/hexo/public/categories/小技巧/index.html","64d5797965b8982b26e5ecbacccded0c"],["E:/qinhao/hexo/public/categories/操作系统/index.html","9f7715fc64145cd2226bbd2775ee86b2"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","f3cd0bcb610ba5e9d127aa5296172af7"],["E:/qinhao/hexo/public/categories/数据库/index.html","9b61af55fac69db9507e7520383ba001"],["E:/qinhao/hexo/public/categories/数据结构/index.html","9296213d3e79eacb733606aa3e3474ab"],["E:/qinhao/hexo/public/categories/服务器/index.html","71a1a07f2c2601dc432f214212bf4e01"],["E:/qinhao/hexo/public/categories/算法基础/index.html","1e61878a5fa030ad963a1cdf19e797eb"],["E:/qinhao/hexo/public/categories/网络安全/index.html","6def15e3ef3169207221fe72fb22fc34"],["E:/qinhao/hexo/public/categories/股票知识/index.html","8eb361784f80b6e6da58f584b9ebcc82"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","8b99a0fcd93d0ddac5679f8d8376667a"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","49dc5b89d456d038d2b26cc594457043"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","d615540f8536a975635878f87ce76c4f"],["E:/qinhao/hexo/public/categories/软件破解/index.html","23efb88dd7eeee38ac6bce4e130c7b1e"],["E:/qinhao/hexo/public/categories/通信技术/index.html","b5a43a019288bb7f15b623fc7695cf77"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","f040c36166fd3fca442e83d301dd440a"],["E:/qinhao/hexo/public/category/index.html","e0ec645acf563c80182aed5556ca8fd4"],["E:/qinhao/hexo/public/cinemas/index.html","07af15713048b36dfa70f7b15a755933"],["E:/qinhao/hexo/public/color/index.html","411866b8661000ce55b7844180ccfc54"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","d6516849f15342d496a37ce17830b615"],["E:/qinhao/hexo/public/computer_network_basics/index.html","1726f6d201cb2e4159b2b642701e119f"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","0bf3d768021bd5fd2ab5601cd7584901"],["E:/qinhao/hexo/public/dataStructure-1/index.html","99832e3c15d3d0576d25880be321b533"],["E:/qinhao/hexo/public/dataStructure-2/index.html","263e6ca5dac1b32ca8f959df7b0754cc"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","b6ca86c36dfa15fbb948a1519843eccb"],["E:/qinhao/hexo/public/friends/index.html","7e73fc6e6415c123072f0a09f83a756f"],["E:/qinhao/hexo/public/gallery/index.html","c88a03ba9698e5590c223805db6e81a1"],["E:/qinhao/hexo/public/gallery/reset/index.html","5995186294e23ba8e3443ced22d0c551"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","1fa453b327d82d3904e559ec637f86fb"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","3f01c2b5babdc42c6e5a4bcdc44ab821"],["E:/qinhao/hexo/public/gcc/index.html","47d27721615c1b1670ebce087c233db8"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","e683e4b30b362dbbe6aa1c70238b504c"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","b8165e8f3f143e3dc64dde1b5519eab8"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","e3bee527fc6970b49557fb4002ae72f1"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","e7a71cdd43c2f466f507c33c6a0146f1"],["E:/qinhao/hexo/public/linux/index.html","fa691aa4620daee58d123cd6949a3bc9"],["E:/qinhao/hexo/public/login_demo/index.html","168f79d4f04aea4f4cd2899acecffe23"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","0caaed2487337d98bca3ea1bc7d011be"],["E:/qinhao/hexo/public/memory_save_number/index.html","887c69017f530cf07af642cc8806e0a2"],["E:/qinhao/hexo/public/mobile_communication/index.html","4ebe034c7163dcddf5e03cf818afc58d"],["E:/qinhao/hexo/public/movies/index.html","e0f1aafbf270ba0fe92baaaadcbb32c6"],["E:/qinhao/hexo/public/mylist/index.html","99696f2dc3dfe6a0f9061bbc5fdd5f93"],["E:/qinhao/hexo/public/myphotos/index.html","56358c400e787779e8a8efec6da6c1b3"],["E:/qinhao/hexo/public/mysql-install/index.html","2d1ac9efbe10b85eacd063d780956d33"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","39c716e0b0ccf8e93248df7649002330"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","c57cc36e4413b54a6f2826fedcf15780"],["E:/qinhao/hexo/public/mysql_question_1/index.html","bf90a80655ff0ed047361d633588525c"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","db906276dad9af6ed2bc192c50e5487d"],["E:/qinhao/hexo/public/not-allow-F12/index.html","1df582c3da6a0129c0cfbcf32c048baa"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","4a7b4a3862f0d26e59fa53d94ebed2f2"],["E:/qinhao/hexo/public/page/10/index.html","27a94b973ae52f3df768095a392943ca"],["E:/qinhao/hexo/public/page/11/index.html","311cebec50868c76b4a5eceff1ada6d3"],["E:/qinhao/hexo/public/page/12/index.html","95f9da15aa4ce67576e420d8b27a5be7"],["E:/qinhao/hexo/public/page/13/index.html","d399cfb315fcb7a4ecc1d32b28cd37ae"],["E:/qinhao/hexo/public/page/2/index.html","7efecae24f80eda9dad3c89e64641a36"],["E:/qinhao/hexo/public/page/3/index.html","ae41489f12eaed9d19decd50a5892f15"],["E:/qinhao/hexo/public/page/4/index.html","d7487ddfca8dd711af43046d8a08e522"],["E:/qinhao/hexo/public/page/5/index.html","51a40da25887a4bb0e50a24302c87784"],["E:/qinhao/hexo/public/page/6/index.html","73d64c16246ed46d0f02ed0681864268"],["E:/qinhao/hexo/public/page/7/index.html","0b8cd9cc769262484b8459e6b0172a3b"],["E:/qinhao/hexo/public/page/8/index.html","3621f8c6c7a66b0fd3d483907cccd052"],["E:/qinhao/hexo/public/page/9/index.html","02077b87ef2b24e984fb9467b4f6b933"],["E:/qinhao/hexo/public/python-2/index.html","329b98e1ceb70d496f648a237ad69373"],["E:/qinhao/hexo/public/ssh/index.html","ea36dfb509fb437c1f44d8f30cc88d9d"],["E:/qinhao/hexo/public/stock_1/index.html","e88d82ed5cbcfec295c33bac7d2bbc37"],["E:/qinhao/hexo/public/stock_10/index.html","5313f46a532b6307979ded3c4566ac3e"],["E:/qinhao/hexo/public/stock_11/index.html","c0e9c2358fbee9f2a61cd761cb751d20"],["E:/qinhao/hexo/public/stock_12/index.html","5f866e5b9cc9dd017370325f49d23e1d"],["E:/qinhao/hexo/public/stock_13/index.html","320ac4dbc57aecb3920e0a6ca414ab5f"],["E:/qinhao/hexo/public/stock_14/index.html","5f3927530093ebe95da48423d3dca70f"],["E:/qinhao/hexo/public/stock_15/index.html","5d6c998a4879a550010cba6ff09f1e9d"],["E:/qinhao/hexo/public/stock_2/index.html","0b18ef6939ca89407f28f0af625b2e94"],["E:/qinhao/hexo/public/stock_3/index.html","3ec032fceedacf5d4039a1c488a29018"],["E:/qinhao/hexo/public/stock_4/index.html","2444d4039b4319f74f84cbc7794c3a1c"],["E:/qinhao/hexo/public/stock_5/index.html","7a38c7ee94c3805192fc3b717faa025c"],["E:/qinhao/hexo/public/stock_6/index.html","3875fa12e9c51ddeed3722e0e5824fdb"],["E:/qinhao/hexo/public/stock_7/index.html","38fcd90f51c9fd97bba14e1a6ed3399a"],["E:/qinhao/hexo/public/stock_8/index.html","bc22882b140eba9aa8925960b9e8776c"],["E:/qinhao/hexo/public/stock_9/index.html","44049dfaccf522a94c06b45908af527c"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","7c039b08d38114b5450d3996a997ff0b"],["E:/qinhao/hexo/public/sw-register.js","bfba81779ed9866151846b27b8614797"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","99abad5cc73ce7bccc5ce5bd0b54799d"],["E:/qinhao/hexo/public/system1/index.html","cfba18ae55c030a865bd547607d4e561"],["E:/qinhao/hexo/public/system10/index.html","f7dda2fbf920ca5560cc31c037f79595"],["E:/qinhao/hexo/public/system11/index.html","7bde47dd7a9e0e1401f1482bc6e9769e"],["E:/qinhao/hexo/public/system12/index.html","22a93a35c4d12cf685fb24b416876a2d"],["E:/qinhao/hexo/public/system2/index.html","84f67155a0fd34c1cb2f39eec4b6927a"],["E:/qinhao/hexo/public/system3/index.html","f08bc6d257134679674c00219389d183"],["E:/qinhao/hexo/public/system4/index.html","1d7710e5724906556dc91d78c2aa2b51"],["E:/qinhao/hexo/public/system5/index.html","a7cdd701c9aacf2de3c7e99749322f99"],["E:/qinhao/hexo/public/system6/index.html","e0936dbbc655530c55bd663f56ec572b"],["E:/qinhao/hexo/public/system7/index.html","cb5099b187c7d46cb09eb467e883a48c"],["E:/qinhao/hexo/public/system8/index.html","ff6275cf8761a93c639ff62dd51ab457"],["E:/qinhao/hexo/public/system9/index.html","74cc8876cdd4194e6d33307b0173425b"],["E:/qinhao/hexo/public/system_info/index.html","c5aa4748ae4573f89d417c35f66808a5"],["E:/qinhao/hexo/public/tags/index.html","a44f1d530f960f064c7d6b514e547ab8"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","f14e71115bac8f993a827ba5456fafc5"],["E:/qinhao/hexo/public/wireless_radio/index.html","7d6f2bef57a8bbf4d6604de7f85216f1"],["E:/qinhao/hexo/public/wireless_word/index.html","84ab76bb2e12bd206bd5c6aff364c29a"],["E:/qinhao/hexo/public/xml/index.html","1233eac71fe9e38c4471a7d7b511123e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







