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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","309a075cf82a94ed9aef132cdd0872ee"],["E:/qinhao/hexo/public/5G网络优化/index.html","c4a2c66101e960ea193c40629e9aefc6"],["E:/qinhao/hexo/public/Algorithm_1/index.html","034264de829be49842b0e76bb966ff28"],["E:/qinhao/hexo/public/Base/index.html","1bda66d3e6d344150d001425696fa46c"],["E:/qinhao/hexo/public/ByteDanceVerify.html","82d2d238395916588b32a06f142cc0c3"],["E:/qinhao/hexo/public/CPU_Register/index.html","ba959213fd5c7714035063d649a0a723"],["E:/qinhao/hexo/public/C_Programming_1/index.html","dd670443533620de30701790a23e66b2"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","76b32659e2f5f352402dc34f342199c2"],["E:/qinhao/hexo/public/FileDownload/index.html","77fed2eb55112460ca34cee495d9672e"],["E:/qinhao/hexo/public/Files_and_directories/index.html","30a3d1cb39279ae8c84dcba661438fd0"],["E:/qinhao/hexo/public/FixedTools/index.html","a5398e2524992a3804b1a3f0869dcabe"],["E:/qinhao/hexo/public/GRE-VPN/index.html","c17cbc0585d0e4a13a3b0253ce6210ff"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","583dbfd1de532ffca1f7f761fd44d527"],["E:/qinhao/hexo/public/GSM/index.html","69702ac801bc01c2bb6f7e916db0c1a4"],["E:/qinhao/hexo/public/ICIC/index.html","6782fe974cac03bbbaeb877f2e73fd65"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","0b7e86337f867a28384fb0edb9c186bd"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","d3ca03a654c50795acebf7f0a45fadf8"],["E:/qinhao/hexo/public/JDBC/index.html","cdcb54cfe48f40209b3a40afaa79afc0"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","7f004047bb363137d2884769d450a7d3"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","8746feb72666a4fa9480d24bd07a1ee0"],["E:/qinhao/hexo/public/LTE/index.html","08334550eba103c9e815d31f8d1f32fe"],["E:/qinhao/hexo/public/Layer/index.html","e7fc6eaa20e2580aa840061e57e2efa1"],["E:/qinhao/hexo/public/Linux_often_use/index.html","49e7a4ed41b7a58837a10cf3ca053574"],["E:/qinhao/hexo/public/MIMO/index.html","a315694ced369201214a26080764dd68"],["E:/qinhao/hexo/public/MySQL/index.html","20005c63b401b7197049928a485ec89e"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","3ba99ea97115738f3622909d1046509a"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","678fbe6929f5b4e7b6dd970266eb32b4"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","db24aac971b8669b5d9a961fd1207fc0"],["E:/qinhao/hexo/public/NB-IoT/index.html","1752c0af6cdc3c55b60c0744b837026e"],["E:/qinhao/hexo/public/Network_Access/index.html","460f062040565e3d82ec789d38b085c9"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","d71d9be24c58a921e9de24fdaa1cab94"],["E:/qinhao/hexo/public/OFDMA/index.html","4e94cc74ecfc469ba23715dc9f41d1b2"],["E:/qinhao/hexo/public/OLT_command/index.html","ec2387609601a2b7598cbb8947d340fc"],["E:/qinhao/hexo/public/OverLoad_1/index.html","22fa45f8d4bf0a45ca441971c512b70b"],["E:/qinhao/hexo/public/Python-3/index.html","820d4e675da3cac5d559a5c8b5b8d149"],["E:/qinhao/hexo/public/Python-4/index.html","ebe25da05616a9973bc439827c98d996"],["E:/qinhao/hexo/public/Python-5/index.html","fe98c0d63f990b911582ee397d6cd7a7"],["E:/qinhao/hexo/public/PythonUdp/index.html","cfe0cd4d0bb22d1ee2b221c38583673d"],["E:/qinhao/hexo/public/Python_basic/index.html","b2402cba1e936894b1cd99faa65c09f7"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","081de803306fa76a83130fb4b0208425"],["E:/qinhao/hexo/public/Python_variable/index.html","14aef2ef361c298fb245db7778c09261"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","2577aa34dcdaebe91eb43750364adab7"],["E:/qinhao/hexo/public/TCP/index.html","ca15245568b9cb14df6422ca00611db9"],["E:/qinhao/hexo/public/TCP_client/index.html","064f6ad50ec65cd883429472248364b9"],["E:/qinhao/hexo/public/TCP_server/index.html","358eb5c75358ae8a9ac331d2198dd43e"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","aedbcbd05e14a51736f07eb2454ec687"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","b01fdea39daf1874a02c0169062a6eae"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","f2cd5dc13dc4465a9429ceda49c9dc80"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","3a64107047926c9431f480298fa390ec"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","1e622b06bfbff9e8bda5cbdfa40502bd"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","32aa2adfa512e03598353c2d1cf1dad4"],["E:/qinhao/hexo/public/about/index.html","3cc41065ecccf2ec4c22f3ccd19c5014"],["E:/qinhao/hexo/public/acl/index.html","ad98588a86f8af6cf54382d59204b9a1"],["E:/qinhao/hexo/public/archives/2020/01/index.html","5812b3441c51f6ec3b59a8e0de64fa30"],["E:/qinhao/hexo/public/archives/2020/02/index.html","f78ebe6647d633f9ba78905482b20176"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9b4d0ff6f8002d16b1173e386e889db1"],["E:/qinhao/hexo/public/archives/2020/03/index.html","3098137a2b965c2107ef99f65f3d2f6b"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","e94014a95fdff6b5f1b847255dae3648"],["E:/qinhao/hexo/public/archives/2020/04/index.html","33af763f541a3d8773c27521ecc7961a"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b42b1a9106c24292acdd97afbc93be8d"],["E:/qinhao/hexo/public/archives/2020/06/index.html","0113df6271f9e34238b58a4824c82fa5"],["E:/qinhao/hexo/public/archives/2020/07/index.html","cd18ce08379a2737c75e97e1892c023b"],["E:/qinhao/hexo/public/archives/2020/08/index.html","74ed6de31e189424b89822ca5afa48e2"],["E:/qinhao/hexo/public/archives/2020/10/index.html","cf32e62105b5bb17fba2ce71c00f7cfd"],["E:/qinhao/hexo/public/archives/2020/11/index.html","4c53f14af42757b81f5fa25cc8bc842d"],["E:/qinhao/hexo/public/archives/2020/index.html","dadc17aea7b70e0bdf0f80bfd52941dc"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","48096399aecc434907ed2554942d73fc"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","73e1281f57ae2682ae22f531f6611923"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","871f2877309cd5bc0a74c7509b080bc9"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ac290382ec82132ebc7a20fb2eb6d16e"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","878b5ce11f6bd81e70dcaa986d926791"],["E:/qinhao/hexo/public/archives/2021/03/index.html","0a35600125d6f5fbedd6a5be97956820"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","460fc42dac45f75ebd07cb37a9c0521b"],["E:/qinhao/hexo/public/archives/2021/04/index.html","c978d565efe2e0998c41c09a1a7e2b58"],["E:/qinhao/hexo/public/archives/2021/05/index.html","1437bd599ef8997308d5c3c6e638cd67"],["E:/qinhao/hexo/public/archives/2021/06/index.html","40cb396ae00db5c92c76680c82e5784d"],["E:/qinhao/hexo/public/archives/2021/07/index.html","e65d7ff6263917bb2ebe896b1cc46776"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","d8e7c935ca776bbc0c5da1bdf2c7d292"],["E:/qinhao/hexo/public/archives/2021/08/index.html","d9e24f4dca965fd96491eda12e3f9b4a"],["E:/qinhao/hexo/public/archives/2021/09/index.html","bc0e374fa29e532895a24e4e03f35c4f"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","4c6e87bf3359aac2432c6dc5fbdfb5a9"],["E:/qinhao/hexo/public/archives/2021/10/index.html","c346cbbcf9120c60f5de87feca8fa7c5"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","386b4eeca3eaf69d2e330db904ca8e76"],["E:/qinhao/hexo/public/archives/2021/index.html","7e5d8052138481575fbf40b5e56f444a"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","6e94020f734e2298f81f47cbdebd16b3"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","0616700d7e0b3201de9ba4fb3c7f0b0c"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","c124eb66edd2a32d31746cd412941679"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","d59af32f0297068364ca0bb142438a18"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","67b58be74209ddf5c2a66ba08313b836"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","cd64764a3c860ff8635cc8fdc3094637"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","a621fa6ef0966b52c4f52190fb6aaa99"],["E:/qinhao/hexo/public/archives/index.html","03a07037758852413076a96649f51950"],["E:/qinhao/hexo/public/archives/page/10/index.html","597e164b6a4e29f296fe5cdadc4a88eb"],["E:/qinhao/hexo/public/archives/page/11/index.html","597e164b6a4e29f296fe5cdadc4a88eb"],["E:/qinhao/hexo/public/archives/page/12/index.html","597e164b6a4e29f296fe5cdadc4a88eb"],["E:/qinhao/hexo/public/archives/page/13/index.html","f19b0b7a10460059802aa0279f61d52d"],["E:/qinhao/hexo/public/archives/page/2/index.html","03a07037758852413076a96649f51950"],["E:/qinhao/hexo/public/archives/page/3/index.html","03a07037758852413076a96649f51950"],["E:/qinhao/hexo/public/archives/page/4/index.html","4d83d483fb80c4cf5ee1ef01b09a5522"],["E:/qinhao/hexo/public/archives/page/5/index.html","4d83d483fb80c4cf5ee1ef01b09a5522"],["E:/qinhao/hexo/public/archives/page/6/index.html","4d83d483fb80c4cf5ee1ef01b09a5522"],["E:/qinhao/hexo/public/archives/page/7/index.html","4d83d483fb80c4cf5ee1ef01b09a5522"],["E:/qinhao/hexo/public/archives/page/8/index.html","4d83d483fb80c4cf5ee1ef01b09a5522"],["E:/qinhao/hexo/public/archives/page/9/index.html","597e164b6a4e29f296fe5cdadc4a88eb"],["E:/qinhao/hexo/public/artitalk/index.html","2f6adfa108e2444ff2777977371591eb"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","2d9cc08f1c7185ad989115084e6ee9be"],["E:/qinhao/hexo/public/bitwarden/index.html","6ee831588658c55c3505d6940531a584"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","5c935e5ed98037a2079d7480806cadf4"],["E:/qinhao/hexo/public/c-11/index.html","cfb2d7b055cc7f04926cae85ce05f1d3"],["E:/qinhao/hexo/public/c_1/index.html","0a2abe6b1222585784c37d7f04e0a64b"],["E:/qinhao/hexo/public/c_10/index.html","1e4ebcd44b2cb4b170b4e06e4fe8684b"],["E:/qinhao/hexo/public/c_2/index.html","367982a9a59943f5614e2ebb86ffdf88"],["E:/qinhao/hexo/public/c_3/index.html","5f502fb4935ce0832dd333f007919235"],["E:/qinhao/hexo/public/c_4/index.html","aaa6b2a46c6a1160ca2c80e8e7e09786"],["E:/qinhao/hexo/public/c_5/index.html","a0902ab1052916238efb3abddbc160b6"],["E:/qinhao/hexo/public/c_6/index.html","15ef4ce8b4f1ace28ef03de8854a2529"],["E:/qinhao/hexo/public/c_7/index.html","457b009d0276881be89b69cad2003f23"],["E:/qinhao/hexo/public/c_8/index.html","f369a192df144e04fdd7a581d0f6d469"],["E:/qinhao/hexo/public/c_9/index.html","7cb11da647e73197077ff2e8de1ee1cb"],["E:/qinhao/hexo/public/categories/C语言/index.html","df3f7ccca1270c8c230c7505995d6294"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","bd183609c4b9da05238943706cb2c4a3"],["E:/qinhao/hexo/public/categories/Java/index.html","50400fac6117abdf5dee995d3b952f8a"],["E:/qinhao/hexo/public/categories/Linux/index.html","bfc7c14c0548447523f3f26ec08288de"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","9dd94eab84a5001b2f4a8b9dccf594e4"],["E:/qinhao/hexo/public/categories/Python/index.html","fa486a856c78885721a7ac2485385c3c"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","2dbad9728c7790c2b45852e236a2ef03"],["E:/qinhao/hexo/public/categories/交换机/index.html","e7a2ae7d0c23118b2142fa6090cb315b"],["E:/qinhao/hexo/public/categories/前端学习/index.html","243bf71b5546ac7e8f2444f711e4aa0c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","73f2f58ac385e6ee3b04dec574060483"],["E:/qinhao/hexo/public/categories/小技巧/index.html","7da0766b8d653d1b7866226791b25457"],["E:/qinhao/hexo/public/categories/操作系统/index.html","54d935503c9d5617bc06d7e5a4e12be4"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","c79def9fec37d56ec72c206a8ca2e56e"],["E:/qinhao/hexo/public/categories/数据库/index.html","13da2187582ff4deae5344ab1c2cba88"],["E:/qinhao/hexo/public/categories/数据结构/index.html","74b143ad4def4974ddf63dfcb50aa3a0"],["E:/qinhao/hexo/public/categories/服务器/index.html","729af03f2d246b94d2be174c4a56001f"],["E:/qinhao/hexo/public/categories/算法基础/index.html","5eb828dcae32eb27a836021d173e9741"],["E:/qinhao/hexo/public/categories/网络安全/index.html","a4b0f8a87f408594eb021aa70561bdd4"],["E:/qinhao/hexo/public/categories/股票知识/index.html","c84b9a98c0809347a44b328c3feaa1d2"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","064b3c41c637a303b025d07fd632bfc6"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","610a84c526e2bcf7e821743b18ff1921"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","2aabfb9d29f1cb2ccd4667f107da48ab"],["E:/qinhao/hexo/public/categories/软件破解/index.html","d3fe845e90eb7ab91a02e48a6f7fc84c"],["E:/qinhao/hexo/public/categories/通信技术/index.html","cdf602e40980a793aa42edcb502f2ba1"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","c81d55d081e0fd002951dae4233f7bff"],["E:/qinhao/hexo/public/category/index.html","c243b75c7eb3e026a5a1762845dae94a"],["E:/qinhao/hexo/public/cinemas/index.html","5ec71ad310bd2212773452d5813db6ab"],["E:/qinhao/hexo/public/color/index.html","c209de06a513ade2740020d38c613b31"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","b2dfa9fd6b1fcc0c9d3392353155d961"],["E:/qinhao/hexo/public/computer_network_basics/index.html","9f87490944ea1a681b672a24cbda1fcf"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","e9fb0c3bcb4b52156b14720a7e83a939"],["E:/qinhao/hexo/public/dataStructure-1/index.html","9384b269107a5eee8d043b893d8544eb"],["E:/qinhao/hexo/public/dataStructure-2/index.html","45f50fa5f87381487456b09a252ac354"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","a3531be67da90cf7248893d5be2d6da9"],["E:/qinhao/hexo/public/friends/index.html","d8497e3c8deabcf06f6bbfb0357b9914"],["E:/qinhao/hexo/public/gallery/index.html","7d63f24ae62a4a574487c1e4a58e3508"],["E:/qinhao/hexo/public/gallery/reset/index.html","23b31d3214585f6d4015fea6cea15239"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","eccf5091dd562882d841849f28c176f5"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","a4cf2b31409e0bbe2534076b1faa5d6b"],["E:/qinhao/hexo/public/gcc/index.html","614a48223d8278b0e73078ee2b9214d5"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","ecdc4341bccf6e29fb5962f93f8d7c30"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","420eb3dcb4a74dc0d4fdc40f3842b4c3"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","fc0fc2407ce822fc3359f94e37dc67da"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","d5cdbddec41f93742af9f6beaeccf3d3"],["E:/qinhao/hexo/public/linux/index.html","050ecb8ecc6d174fe2d8c11da7ac15f4"],["E:/qinhao/hexo/public/login_demo/index.html","4977509158068ac536c62ec195262ca2"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","3127878e95102e1b72c9c04f85a6c4e7"],["E:/qinhao/hexo/public/memory_save_number/index.html","e39b753a0bc65e5ab61d8f7e4a96af86"],["E:/qinhao/hexo/public/mobile_communication/index.html","8fe109377024d6643f3927973f40bdc8"],["E:/qinhao/hexo/public/movies/index.html","30c4f87e967426ad0bf14ce6bce740cd"],["E:/qinhao/hexo/public/mylist/index.html","fbf9d048ad0bac0d502254c13984b4f9"],["E:/qinhao/hexo/public/myphotos/index.html","bbc44f316616f483cc346b0e367c9bad"],["E:/qinhao/hexo/public/mysql-install/index.html","741c5bc6872770a27af88e19283d5573"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","bec31308ff3002a45f19f02bcbf5dc17"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","a64772cb55446161f27af4b3b1da5088"],["E:/qinhao/hexo/public/mysql_question_1/index.html","4fa3868ea823e1a1c05f3e5688e7e28e"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","5abbeb9fa2d7c7ad6aa6e94fea8a63d3"],["E:/qinhao/hexo/public/not-allow-F12/index.html","e06af900257761c22745d1d00ad5a2b4"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","9e49f151e0f193e3e0707c448c4849c6"],["E:/qinhao/hexo/public/page/10/index.html","7ee27285df1050fdad218432f625aaac"],["E:/qinhao/hexo/public/page/11/index.html","1a4d3f92bb1a2fa245ef4556782f6135"],["E:/qinhao/hexo/public/page/12/index.html","37b7400475dc5b462781b65b10e03886"],["E:/qinhao/hexo/public/page/13/index.html","49c8099748d8773eda363585af256ec3"],["E:/qinhao/hexo/public/page/2/index.html","4117cb0dd79893afe8ace7e4497d0531"],["E:/qinhao/hexo/public/page/3/index.html","f3cab23027fa08422c1c9b1dee4c29d7"],["E:/qinhao/hexo/public/page/4/index.html","cd4a17c4cea1a81cb8eba08501165482"],["E:/qinhao/hexo/public/page/5/index.html","b31bb0d24088eff520a88331b66e80f9"],["E:/qinhao/hexo/public/page/6/index.html","52a10f93768f4465df1b098c1ac1ef67"],["E:/qinhao/hexo/public/page/7/index.html","fca0da92b0a526539096d485d8410e1d"],["E:/qinhao/hexo/public/page/8/index.html","529111e5d9218930d2faf9613e6f88b0"],["E:/qinhao/hexo/public/page/9/index.html","8c72a2079621e672def3e188fb4da629"],["E:/qinhao/hexo/public/python-2/index.html","60ff3815b4551d5e38fc9cc5a6a534b4"],["E:/qinhao/hexo/public/ssh/index.html","04a11e6066cc53a847fd0c7626f11be8"],["E:/qinhao/hexo/public/stock_1/index.html","c5bbedffcfb9eb498d8dc98bdc9224a0"],["E:/qinhao/hexo/public/stock_10/index.html","f39331d63eb5c7087ae4f546f53ccfef"],["E:/qinhao/hexo/public/stock_11/index.html","065ebcdfcad6abca0c8d70cece285f68"],["E:/qinhao/hexo/public/stock_12/index.html","e8efc971969a027e3f77fe29d9989898"],["E:/qinhao/hexo/public/stock_13/index.html","05c8ccc7b8c2a950ff8d49e10cbcd300"],["E:/qinhao/hexo/public/stock_14/index.html","927ad93722aa170a539a615a15ee40ad"],["E:/qinhao/hexo/public/stock_15/index.html","4907f2e04b75d584cb09646cdac7e3ff"],["E:/qinhao/hexo/public/stock_2/index.html","4fbd464ac813e712efb63fbcaf2fafad"],["E:/qinhao/hexo/public/stock_3/index.html","255829c73597a3ce7c139ac620a329a8"],["E:/qinhao/hexo/public/stock_4/index.html","ee80cd854ee31c5c28acdff0155bb813"],["E:/qinhao/hexo/public/stock_5/index.html","f37fa836ec2ebbe0a9f9156a2657377d"],["E:/qinhao/hexo/public/stock_6/index.html","64981e446953f773c0895d6e9fbdae66"],["E:/qinhao/hexo/public/stock_7/index.html","892ba968925be5bad9ef62697a7a6a1b"],["E:/qinhao/hexo/public/stock_8/index.html","30a2185c646b1d66b4e4f6e1496352b6"],["E:/qinhao/hexo/public/stock_9/index.html","45b171d919bb9d90f535a2f1d7de1b8f"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","a68edc72bf9b9877d3c0099651ffc3c3"],["E:/qinhao/hexo/public/sw-register.js","6bdd1101cbe92dc7e5582a0262efab4d"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","180cc35db4627ab188172b31b00a9cb3"],["E:/qinhao/hexo/public/system1/index.html","1b21ed1ce1fa34ea3aaa9a0777e04d9e"],["E:/qinhao/hexo/public/system10/index.html","e603bc230b7d29675cf3199251488f42"],["E:/qinhao/hexo/public/system11/index.html","aead382c346b5aa3d8f781a796c15a2c"],["E:/qinhao/hexo/public/system12/index.html","ba88789f0705fc508455ac617815c0b3"],["E:/qinhao/hexo/public/system2/index.html","7a588784293bd9c2259c256bfd5311af"],["E:/qinhao/hexo/public/system3/index.html","0bc362d434669fce6cccbc24fc658f05"],["E:/qinhao/hexo/public/system4/index.html","41977f503dc7680ec57b5ba4e64f54cf"],["E:/qinhao/hexo/public/system5/index.html","8377381789e0bdb7505aa86de17a2291"],["E:/qinhao/hexo/public/system6/index.html","155c91eb5f98c75cad8d8e7105c103e4"],["E:/qinhao/hexo/public/system7/index.html","96e462607ee604652ffe7ed88dde0fec"],["E:/qinhao/hexo/public/system8/index.html","268bd43df034c68588c808e97fd4c016"],["E:/qinhao/hexo/public/system9/index.html","c22dd4011ea121908dde62a975cde94a"],["E:/qinhao/hexo/public/system_info/index.html","7867a54c42e511325016e461c3a91bd9"],["E:/qinhao/hexo/public/tags/index.html","b5011d495274c6120e51be26db8faf69"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","553ad02b1413fec07ed34bdac6ba39f5"],["E:/qinhao/hexo/public/wireless_radio/index.html","8591c51d89857640553c4e49c12edd60"],["E:/qinhao/hexo/public/wireless_word/index.html","a96bd09493737c087bb459a8b5595e3a"],["E:/qinhao/hexo/public/xml/index.html","1fb6a207833ff15923f5c51e057c4576"]];
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







