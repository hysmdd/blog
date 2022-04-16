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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","7a5734b5c49516e01bbfbf30a15f141f"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","3a99a70cc87777b35ef3d29ff039da19"],["E:/qinhao/hexo/public/AOP_1/index.html","52556cf829ec87b9286dd19c41aa9950"],["E:/qinhao/hexo/public/AOP_2/index.html","e218f0a4bf6622a5b3c80096bfaaf407"],["E:/qinhao/hexo/public/AOP_3/index.html","b0341b3c7270df0e550ad5ea3e55eb6d"],["E:/qinhao/hexo/public/Algorithm_1/index.html","1dbac8730c69532fbbbf87ed4c20d235"],["E:/qinhao/hexo/public/Base/index.html","f79f7ce5bfeb9b9f17fdc77cc1986ed7"],["E:/qinhao/hexo/public/ByteDanceVerify.html","19774437f26739bb08273b0f58dd695d"],["E:/qinhao/hexo/public/CPU_Register/index.html","64eb66d31db8c5a210a2ca4722eee391"],["E:/qinhao/hexo/public/C_Programming_1/index.html","9bbd3cf26d93b0efa9b02741d6227852"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","e600ce2f91972718b9a9e8e472c773d3"],["E:/qinhao/hexo/public/FileDownload/index.html","2c9f6732c1f35e2db79f48ed096f9b30"],["E:/qinhao/hexo/public/Files_and_directories/index.html","bd83f05ff0526c1a3250d967557d1c07"],["E:/qinhao/hexo/public/FixedTools/index.html","efd8a2423a990f66c45baad14f975125"],["E:/qinhao/hexo/public/GRE-VPN/index.html","be34058e8be7220b90536460b0f9bfc6"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","56b767298488604559cdeb9f707bed67"],["E:/qinhao/hexo/public/GSM/index.html","3a7816ac5021a841b240575e622ffb71"],["E:/qinhao/hexo/public/ICIC/index.html","3ffa38200806bd8dc028ca6785d00b15"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","a8e6269b4ece4690ec0ebb9f6dbc1f65"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","1140de4c2b4f12377ccbe5d50c414de4"],["E:/qinhao/hexo/public/JDBC/index.html","bffcb6b140dade473971e670e73f864c"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","cabbde2ec7e3919c2140c47b42d91901"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","e634c40889cc8d191a8a6a18447f3930"],["E:/qinhao/hexo/public/LTE/index.html","949ffd952904411c85e3673e086c2ff9"],["E:/qinhao/hexo/public/Layer/index.html","902587bf8e87751a6f08d8d4a72093b6"],["E:/qinhao/hexo/public/Linux_often_use/index.html","637142b3017cf139ab16151f3dd2bac5"],["E:/qinhao/hexo/public/MIMO/index.html","0fdc33a965e1596ee92fbef121a96a4a"],["E:/qinhao/hexo/public/MySQL/index.html","c2d470cd2911ac43e81a594995718b8b"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","46826dfdafd078170fb4e3027f402329"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","47ae2e9cd851ca2e7cfd566a14a8d059"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","d34c9e0753a971d4bab1c3de942fe277"],["E:/qinhao/hexo/public/NB-IoT/index.html","a2ecd6e8f23e8f60e931fbf62981cd40"],["E:/qinhao/hexo/public/Network_Access/index.html","8f6cd177db50a69b3a414eb7aea449aa"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","bbd9ff2f5c845924b82d23d627ecec67"],["E:/qinhao/hexo/public/OFDMA/index.html","08f711bfa3a9561a9f3852bc1b74c4fd"],["E:/qinhao/hexo/public/OLT_command/index.html","0dcae313384ee0c3d8ea904c31302b41"],["E:/qinhao/hexo/public/OverLoad_1/index.html","b81f6ad3b94df113fab9ff46d717d7d4"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","2052b7cd2aa412fade022dfc4e27795e"],["E:/qinhao/hexo/public/Python-3/index.html","902d6f7abe8c8ecd9c190011cfae46a9"],["E:/qinhao/hexo/public/Python-4/index.html","a29f85df31c1eedf5bd29af88493a8df"],["E:/qinhao/hexo/public/Python-5/index.html","36ec4115d236812b3f91dacfd56ccd91"],["E:/qinhao/hexo/public/PythonUdp/index.html","4f79d71c974eed6088a37d49f720f23b"],["E:/qinhao/hexo/public/Python_basic/index.html","b629d322a0e84f0d159f5d290f09a311"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","90417f1e0e1c99d1121f07df5dea7d8c"],["E:/qinhao/hexo/public/Python_variable/index.html","bd29c1915c9c456d08f9f8f4125024a3"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","4a1b824d45feb1588fc5f06ef07e4476"],["E:/qinhao/hexo/public/TCP/index.html","002f25ab1af32b4ae0aca71da925a691"],["E:/qinhao/hexo/public/TCP_client/index.html","5918b2806471e9e439a84f0e5293ad7d"],["E:/qinhao/hexo/public/TCP_server/index.html","ba6a6dc549c336c6897aae046fc5d702"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","c943e29c1a50972cac5ed6d573e64d6e"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","ece3caf94e4e082169c9912cee5d82e1"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","e3361c2269a4c5695c23c627386960cb"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","967a6e7e1671b00a748026c726e36a5a"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","4d6f39334dc43725e4e9468699f9c9b0"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","9004e864accca84fca9f96d577f57480"],["E:/qinhao/hexo/public/about/index.html","2b85f80a1afe5503df15af3b6e03ca0d"],["E:/qinhao/hexo/public/acl/index.html","9baa7b9b5fc3beb8de92ebb0f49bab2e"],["E:/qinhao/hexo/public/archives/2020/01/index.html","8a330061c6b3c011536913c3a3ee5a55"],["E:/qinhao/hexo/public/archives/2020/02/index.html","c7958df9c58899139affacf0fae6bcad"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","04a8ffb4cb600a0972fbfade36d87526"],["E:/qinhao/hexo/public/archives/2020/03/index.html","1370dafb19a2b8d0199f399942fdaf65"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","450e9fdce52d0138a21be9fd81357588"],["E:/qinhao/hexo/public/archives/2020/04/index.html","8e5dc5711e294253ed8aa7b6aa81d940"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d61e071275360485e3cc5baa63907aa4"],["E:/qinhao/hexo/public/archives/2020/06/index.html","e5e0d90ae430ea4e4f25172b1c26a032"],["E:/qinhao/hexo/public/archives/2020/07/index.html","54325746e3800692e45bc2c1fafccce0"],["E:/qinhao/hexo/public/archives/2020/08/index.html","be74cec564796d6eaffc2220280908f2"],["E:/qinhao/hexo/public/archives/2020/10/index.html","a16bdab17d06e35ce0a7a36c045cb262"],["E:/qinhao/hexo/public/archives/2020/11/index.html","84242ee2e0b35bed2cdbe128e5edf908"],["E:/qinhao/hexo/public/archives/2020/index.html","9a78584c0b68fb160d7be4131a9d0efa"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","37594e8ab86b76ac9b7e4bdab3f30902"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","7457176ddbdb8167a621f8e15342dadd"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ee9d773f21e2e6350317101e9918421d"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","b3a717f8ae55611203b8ce2527a6ae11"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","0448f2889ba705771c6ecccc4b878530"],["E:/qinhao/hexo/public/archives/2021/03/index.html","e23f0bcc02a589ee0bb633091990a278"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","fec16787eb4bb3f9bfc219378dcd88b9"],["E:/qinhao/hexo/public/archives/2021/04/index.html","10759905e933f35601d5aeeb2aa81777"],["E:/qinhao/hexo/public/archives/2021/05/index.html","bb062f2bc39533acd74225c39e6ba5d1"],["E:/qinhao/hexo/public/archives/2021/06/index.html","1364ebdb3ac98ebe8986e4b690f9926d"],["E:/qinhao/hexo/public/archives/2021/07/index.html","17c7af6aaa05ea6f4fbea8f281020d9e"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","8f9b15878b6d0ae0b779e9c66d98ef6f"],["E:/qinhao/hexo/public/archives/2021/08/index.html","03a805e538dea0775bec5b40b8fc2181"],["E:/qinhao/hexo/public/archives/2021/09/index.html","93c9e15d7718f5c1abd1d62f41022a34"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","1a8959b932250eda82df6c05b156f25b"],["E:/qinhao/hexo/public/archives/2021/10/index.html","b0c1716ea13b4d5bb19a167ac7b65fb4"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","4760890358bd578adab00883797917cc"],["E:/qinhao/hexo/public/archives/2021/index.html","1c9da4a8d491ad9a021d24b87b5d8784"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","6ab2df18bbb0a0135cd65f352a46c962"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","15bf8adbbc8159113378d125c646a981"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","7a3ac442951eed6704c2e26c10a60362"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","604dc30ca516527f89b817dd91772f27"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","e0c4299f94eff81ef1a0c7e88a2b26fb"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","129da020d021a204f115c4731b79a5e5"],["E:/qinhao/hexo/public/archives/2022/01/index.html","2c20003e98218de6415af908af96f2b4"],["E:/qinhao/hexo/public/archives/2022/index.html","3cfc90941f7b62bb792365baa6c594fe"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","3675943dc4ddc62fd881e3e1ca708c53"],["E:/qinhao/hexo/public/archives/index.html","a8c1b65fb7ae82c1607dae8244343c82"],["E:/qinhao/hexo/public/archives/page/10/index.html","e8260e90b31ee1df543b16e203b06128"],["E:/qinhao/hexo/public/archives/page/11/index.html","e8260e90b31ee1df543b16e203b06128"],["E:/qinhao/hexo/public/archives/page/12/index.html","e8260e90b31ee1df543b16e203b06128"],["E:/qinhao/hexo/public/archives/page/13/index.html","e8260e90b31ee1df543b16e203b06128"],["E:/qinhao/hexo/public/archives/page/2/index.html","a8c1b65fb7ae82c1607dae8244343c82"],["E:/qinhao/hexo/public/archives/page/3/index.html","a8c1b65fb7ae82c1607dae8244343c82"],["E:/qinhao/hexo/public/archives/page/4/index.html","a8c1b65fb7ae82c1607dae8244343c82"],["E:/qinhao/hexo/public/archives/page/5/index.html","b3a19e08caee1e6812be996137e6ed71"],["E:/qinhao/hexo/public/archives/page/6/index.html","b3a19e08caee1e6812be996137e6ed71"],["E:/qinhao/hexo/public/archives/page/7/index.html","b3a19e08caee1e6812be996137e6ed71"],["E:/qinhao/hexo/public/archives/page/8/index.html","b3a19e08caee1e6812be996137e6ed71"],["E:/qinhao/hexo/public/archives/page/9/index.html","b3a19e08caee1e6812be996137e6ed71"],["E:/qinhao/hexo/public/artitalk/index.html","53e5721357291f487f5288a35e4a6a2a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","41fdec52da345798e21173c677f65d0e"],["E:/qinhao/hexo/public/bitwarden/index.html","62b7096a34e9bdd3fbd8acde5bee4d1d"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","1752964b9a27b56891c2e7ed1c6eab48"],["E:/qinhao/hexo/public/c-11/index.html","0db863243c88fb5a025221237c8b57a7"],["E:/qinhao/hexo/public/c_1/index.html","c54274f95801d51fa8dfccf29bc0257e"],["E:/qinhao/hexo/public/c_10/index.html","1262840577d9d431b3a9986b95ef9161"],["E:/qinhao/hexo/public/c_2/index.html","3371856cceddc7bc909bcf70b0333d40"],["E:/qinhao/hexo/public/c_3/index.html","3f207ec231a8180cadc15f0be8783db6"],["E:/qinhao/hexo/public/c_4/index.html","7840909be951fe4c2fd374305989e326"],["E:/qinhao/hexo/public/c_5/index.html","0a83ff3cea4ce21bf9981e796f9c1ccf"],["E:/qinhao/hexo/public/c_6/index.html","0aa5468c903d44ee2ce41e3d61ada5cc"],["E:/qinhao/hexo/public/c_7/index.html","c6b8765107dce255d3e673c37e856586"],["E:/qinhao/hexo/public/c_8/index.html","9ce6af488553daf6526273a290098b09"],["E:/qinhao/hexo/public/c_9/index.html","f5f6ca6be76bc5d306dc73630e1c50d3"],["E:/qinhao/hexo/public/categories/C语言/index.html","c5bc8c364fa46275eba6bea833a485bb"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","48a2964b3e9b8bea0fec66dc845744a3"],["E:/qinhao/hexo/public/categories/Java/index.html","0063bcb49e4eed52c7fc1ae99eb1ba30"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","89cc6ecd2e216a90210d7d6db7090f9f"],["E:/qinhao/hexo/public/categories/Linux/index.html","45efa255378f3756ca21ff6b5894e4d4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","b3205ca6185310e17096a1236a876da4"],["E:/qinhao/hexo/public/categories/Python/index.html","8cd075c5ab3ba03ec1385fe097e6a15d"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","c069346583bb01c2bd0e4e27e48c613f"],["E:/qinhao/hexo/public/categories/交换机/index.html","b4ba2f45babe37b299b124dc8668d8af"],["E:/qinhao/hexo/public/categories/前端学习/index.html","631f823b1edde84f986c3e9f48a5887c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","ddbcce45d1f0252d1ff574100c9095e0"],["E:/qinhao/hexo/public/categories/小技巧/index.html","2883fffc4920b5e26e22a18c16fae9e3"],["E:/qinhao/hexo/public/categories/操作系统/index.html","e132d6e1e91f49cf52956e393db5319b"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","1ebe0f56be067e1bd89dad10c11b8869"],["E:/qinhao/hexo/public/categories/数据库/index.html","675ce124ab70d58a289cec17af547c34"],["E:/qinhao/hexo/public/categories/数据结构/index.html","189d9b000cf160f912564ae60efbb9b6"],["E:/qinhao/hexo/public/categories/服务器/index.html","4588d114f54de5e6dc900684ab190c01"],["E:/qinhao/hexo/public/categories/算法基础/index.html","87618c178029c1b92a45ef51c9f7e730"],["E:/qinhao/hexo/public/categories/网络安全/index.html","5bb360947f15bd30eafb2b0c4afb3634"],["E:/qinhao/hexo/public/categories/股票知识/index.html","a845e507aab8c3516fdbb46b6646c7e8"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","e1c66ecbb9ee0ff3fec42ac59dbbe58e"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","8f910890770a5579ab8a6e87ae320626"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","609794d35b4f2aaa5c796034512f4290"],["E:/qinhao/hexo/public/categories/软件破解/index.html","89c7b50bfc45f15cf7910f6a005f8113"],["E:/qinhao/hexo/public/categories/通信技术/index.html","f41490a5515d1644540c9adbae920604"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","39bcc3359eebe6a5af2386a755986fbc"],["E:/qinhao/hexo/public/category/index.html","49de5e6dae8be871f89337821308bd17"],["E:/qinhao/hexo/public/cinemas/index.html","5a921eda197f331d3930fdbf15cec74c"],["E:/qinhao/hexo/public/color/index.html","6b7476b492ecc283f1ef452aefe21c6c"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","58276d04a90b5effa067df29d100ee19"],["E:/qinhao/hexo/public/computer_network_basics/index.html","6bcd543ee31592c7c620953f4f8e2144"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","30276ae22ea17e84623299d8c9cda7e7"],["E:/qinhao/hexo/public/dataStructure-1/index.html","e91d8c2845d423e64ff5f4e452c8a8c7"],["E:/qinhao/hexo/public/dataStructure-2/index.html","301e32d2b5e58957fb08b71c12c16076"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","ef6a56d34053b58878907aa130337902"],["E:/qinhao/hexo/public/friends/index.html","e7fd087610f9cefa59a5f72f5ce5aaef"],["E:/qinhao/hexo/public/gallery/index.html","315ff0e4967cbe2dad95331afe5f91da"],["E:/qinhao/hexo/public/gallery/myphotos/index.html","34deb079509a4e2ac5895b2bcb689e52"],["E:/qinhao/hexo/public/gallery/reset/index.html","8a131fd96439297a3dcd1873a4f5df10"],["E:/qinhao/hexo/public/gcc/index.html","f7930e613b0fcbf5b8296bda75c94b0b"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","5bd9ba6785e85a8d4c226e56caf3db28"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","6a07bc40738d9324e50c14f19b398fae"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","c815f35d357200e378bbf374ee3c4abb"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","2945cf476bcd8b73b39849e7833ec803"],["E:/qinhao/hexo/public/linux/index.html","001fadbab0c9e014562cb11f34e504b0"],["E:/qinhao/hexo/public/login_demo/index.html","8455f9fee28643ab272190b6e0647378"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","a95e84ce4b1eefe162089b2cc627259b"],["E:/qinhao/hexo/public/memory_save_number/index.html","64de582e8aeb521d0534ad39c6b24e42"],["E:/qinhao/hexo/public/mobile_communication/index.html","f8c6539b7baa20f314f75a6430609683"],["E:/qinhao/hexo/public/movies/index.html","3208c680edf21f79cb168ae0c46985ad"],["E:/qinhao/hexo/public/mylist/index.html","5676f1d323b02e9c05a7353db36ebc2c"],["E:/qinhao/hexo/public/myphotos/index.html","456393c1c1bb0e8ebe7320ae1ee8e572"],["E:/qinhao/hexo/public/mysql-install/index.html","8ffc5cbf2165dfcf4964ca446c59ac4c"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","a07dca5433da98bfee98ab66daafdf21"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","a6817f9c89d690a824cf6cd6322dfa7c"],["E:/qinhao/hexo/public/mysql_question_1/index.html","bb0e9edf28373512d849731538093116"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","75749e0052a6ee57530d2c5963302908"],["E:/qinhao/hexo/public/not-allow-F12/index.html","6e2cef7eecd0df6184d52eca5ddf3460"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","a29444734ef74e7d654bef2d5a6c9fb5"],["E:/qinhao/hexo/public/page/10/index.html","fbad5813b4a3d694ea8f30ce0dd4b732"],["E:/qinhao/hexo/public/page/11/index.html","64df111eb29001c90cc8ddad301cbe59"],["E:/qinhao/hexo/public/page/12/index.html","c746291e48d15ba4c4bcc41568a2b6d1"],["E:/qinhao/hexo/public/page/13/index.html","a35e61acedacf3e699d900b4094f223c"],["E:/qinhao/hexo/public/page/2/index.html","dc44cb473e0eaaff5c185434050f0bec"],["E:/qinhao/hexo/public/page/3/index.html","44a185711677e909392f86bf5c7405b3"],["E:/qinhao/hexo/public/page/4/index.html","dabd5f2f79e50638ba73a1c77a879c7f"],["E:/qinhao/hexo/public/page/5/index.html","b08da4a67641df0bcc72d729894e7c98"],["E:/qinhao/hexo/public/page/6/index.html","d69c82289c6fe9e2410dfd57a55e659a"],["E:/qinhao/hexo/public/page/7/index.html","3524e31df1bbf7d70d40297f5c8bc4cd"],["E:/qinhao/hexo/public/page/8/index.html","a8af37424bf9eeb6eb5074701debb758"],["E:/qinhao/hexo/public/page/9/index.html","ce70b4492f4c46e0a751c889a72aa8a2"],["E:/qinhao/hexo/public/python-2/index.html","c130e398bfacb69a192240efa3b8f84d"],["E:/qinhao/hexo/public/ssh/index.html","0574e6b98852f404ffffbbd46793d47a"],["E:/qinhao/hexo/public/stock_1/index.html","a1829b589cd65a28193d824c1496c77b"],["E:/qinhao/hexo/public/stock_10/index.html","a7c89c3b83d48321a65e53f9d04f17fc"],["E:/qinhao/hexo/public/stock_11/index.html","d1f8f56963a3dc309852dcaa3ba911ee"],["E:/qinhao/hexo/public/stock_12/index.html","8d6b241932b0a96b09bf7358a0cfa874"],["E:/qinhao/hexo/public/stock_13/index.html","40f85238592373bc02aafa668892757c"],["E:/qinhao/hexo/public/stock_14/index.html","3f353e87e244373dc3c3dd42969ef89a"],["E:/qinhao/hexo/public/stock_15/index.html","40ca77e2ce57831daef7c463a3848d02"],["E:/qinhao/hexo/public/stock_2/index.html","1e78acf2a1549c998f87d19d74adb456"],["E:/qinhao/hexo/public/stock_3/index.html","1fb8bbf303457facf05b20509514b3bb"],["E:/qinhao/hexo/public/stock_4/index.html","770290b361c00c58684847cc679785c6"],["E:/qinhao/hexo/public/stock_5/index.html","ba68b0f0f3f985a6a7396b404acf4c6d"],["E:/qinhao/hexo/public/stock_6/index.html","a555d9b7af2da1f2ef5196a65b01a7cb"],["E:/qinhao/hexo/public/stock_7/index.html","924581d3b0de2c21edd3038e41ae5501"],["E:/qinhao/hexo/public/stock_8/index.html","ffbdf23d9c721835ff362bb94c3c8130"],["E:/qinhao/hexo/public/stock_9/index.html","85471afd5a3e1d47c866340c54c4ee50"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","428f87b1556c78e5cd59ecf86bee7227"],["E:/qinhao/hexo/public/sw-register.js","52d05c88e70e90acc2c6337c7a6572f5"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","554966f170b877d5d741ace555084524"],["E:/qinhao/hexo/public/system1/index.html","d006b32827912b29b0182b2cd7c227db"],["E:/qinhao/hexo/public/system10/index.html","deb3cccd19e8aa8f96b187e109cab788"],["E:/qinhao/hexo/public/system11/index.html","443ea6ad17b5cdeb639d38897aa7d9f2"],["E:/qinhao/hexo/public/system12/index.html","520d2a31059cccd0615c7ee883c0b891"],["E:/qinhao/hexo/public/system2/index.html","65d5cdffe884dba04a79e6dbaa5b63ab"],["E:/qinhao/hexo/public/system3/index.html","9ae0ab7cbb188fa442fba093d9747d16"],["E:/qinhao/hexo/public/system4/index.html","679494c0ff6e6cd9b49a98b241cba1d0"],["E:/qinhao/hexo/public/system5/index.html","b15d8fbc74fb5aed06a1ca791e1ed402"],["E:/qinhao/hexo/public/system6/index.html","eeed7a41ea217db8bfd5ffca6d1c0495"],["E:/qinhao/hexo/public/system7/index.html","076bc0ba9eabb3dc030e1bcf6909b530"],["E:/qinhao/hexo/public/system8/index.html","3a8684b758aae548629a96b21e8dd6f3"],["E:/qinhao/hexo/public/system9/index.html","0613299e6f0eef841267585a133b2086"],["E:/qinhao/hexo/public/system_info/index.html","506f64dea62682b6fe637b2360838a52"],["E:/qinhao/hexo/public/tags/index.html","59b67c532bf185583fc85266d9b18b57"],["E:/qinhao/hexo/public/transactionManager/index.html","644420ca2cd0c4eb487bc6f9bbb82f90"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","062736d9e111629fee69620912530f22"],["E:/qinhao/hexo/public/wireless_radio/index.html","207c86d9cca8344fe9ef7acd0c54bf06"],["E:/qinhao/hexo/public/wireless_word/index.html","5df2150b71f3149596f99dc9b1373add"],["E:/qinhao/hexo/public/xml/index.html","fd7d274d41e2d95faa9587dbffee6d06"]];
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







