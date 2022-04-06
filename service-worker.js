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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","8fa0e15a8c26f27de0e3c72d642a6973"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","3aae77f65c618b7c7e8c95126f2fc460"],["E:/qinhao/hexo/public/AOP_1/index.html","12b936516668fd83a162ace48fb087ef"],["E:/qinhao/hexo/public/AOP_2/index.html","d80239e8aa7dea2f72df8683ee2d6c63"],["E:/qinhao/hexo/public/AOP_3/index.html","f7c5df45218b5c56adee412a144f5316"],["E:/qinhao/hexo/public/Algorithm_1/index.html","be7d3ea5b9ed248f68ec5c68496df1fc"],["E:/qinhao/hexo/public/Base/index.html","9fb1c3466096334e5daf84b5dbae3f5b"],["E:/qinhao/hexo/public/ByteDanceVerify.html","dfbc1969c233e9db2e3a9468d596e3a1"],["E:/qinhao/hexo/public/CPU_Register/index.html","ffc61a6c9747c6ec7a412d7a1a2bb288"],["E:/qinhao/hexo/public/C_Programming_1/index.html","9843627aa3893742546a0c27cc3daf5d"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","c1e7d53dd82b8ee5bf809b3c56277d89"],["E:/qinhao/hexo/public/FileDownload/index.html","09b7dd1fd9e55f755c0a40201785a81a"],["E:/qinhao/hexo/public/Files_and_directories/index.html","ffc90e51608a4ed4c040d601bf87401b"],["E:/qinhao/hexo/public/FixedTools/index.html","04eea9c52756c0c8849d25c47b71ad82"],["E:/qinhao/hexo/public/GRE-VPN/index.html","a3ed6b9077096075f671fcbac844de98"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","685a7337bc6dc8343e3bb6791457413e"],["E:/qinhao/hexo/public/GSM/index.html","7c21e5efbbbff4d765069647df4083f0"],["E:/qinhao/hexo/public/ICIC/index.html","303ef4594f8226b287e839575a368bed"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","ee046aeb58f123030a2ff3920abf94f6"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","f4bfd00babd531c55b258e740789ae3c"],["E:/qinhao/hexo/public/JDBC/index.html","55758fb46540415856ae6f9e047d20eb"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","8bddf3c45580be22cc642d76c14dd829"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","b9f710aaba316a8e688d7eb8c8df1825"],["E:/qinhao/hexo/public/LTE/index.html","fa8e002551b8460e33e7cfc7f5777e23"],["E:/qinhao/hexo/public/Layer/index.html","a9897d95aba6a0c15cbc07c517fa2d60"],["E:/qinhao/hexo/public/Linux_often_use/index.html","9d3330835dc4c6d8ff8dd629879735bc"],["E:/qinhao/hexo/public/MIMO/index.html","c16ea1b6ae5239d77f32faaf47be569f"],["E:/qinhao/hexo/public/MySQL/index.html","8293d6f956f5bf92698f4da09d69e1df"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","2714fac9cd298866b586ad057e018c57"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","bd8070097d8847dde7e791bc5fab43a0"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","75df7ff08b398609cdd38f5d55526d26"],["E:/qinhao/hexo/public/NB-IoT/index.html","19e5f2cb819962973fa52baef9e4fed6"],["E:/qinhao/hexo/public/Network_Access/index.html","1162b5aba37e8e74847204bb79647bb6"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","ec765ad6dbf485c2ae3e3c233c6887e3"],["E:/qinhao/hexo/public/OFDMA/index.html","72833e08746f9bb3f309dff414c06cc5"],["E:/qinhao/hexo/public/OLT_command/index.html","59eaf0ea134ccb0e09b5f2b49a485ee2"],["E:/qinhao/hexo/public/OverLoad_1/index.html","19df2741e2c1d136a17eeef4bd2623ab"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","82f92e66c0a6e82d53921b2a20723ec3"],["E:/qinhao/hexo/public/Python-3/index.html","f674fff94e5e887993b259fb863ca503"],["E:/qinhao/hexo/public/Python-4/index.html","3fe64769c6c1804760439c38d6a707b7"],["E:/qinhao/hexo/public/Python-5/index.html","5e23f5dd95d4ccf3d4c68eb4169386ec"],["E:/qinhao/hexo/public/PythonUdp/index.html","cd245efd28d4aacfbd1d6fca636e095b"],["E:/qinhao/hexo/public/Python_basic/index.html","1bbe105d5ae5ef9e3dfa3d28ccf493c4"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","11e0f1a1a12659818e897fedd02f036a"],["E:/qinhao/hexo/public/Python_variable/index.html","b70c75d82f29192755cc81aebeba27d7"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","775b5e1072f682a50966fb49ed77caa6"],["E:/qinhao/hexo/public/TCP/index.html","29994fc6e837f71d6d6394c130d91622"],["E:/qinhao/hexo/public/TCP_client/index.html","8eb5a215c7164f074da700e5a6376d2b"],["E:/qinhao/hexo/public/TCP_server/index.html","333a177c131994a4f7711be4f40fc080"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","71917e803972e44096b04da6c04a3548"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","0a027dd23283efb8b6df5c246420c8f0"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","7ef2a7ceef58107fc02df52a1fe06f48"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","bb605991b1f14a92346bece786796238"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","07b60a7101aa53aac71cdef63997a05c"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","1e2af93f93315a46e33f86afd240b7ef"],["E:/qinhao/hexo/public/about/index.html","9b27e2633270b41e6db9864fe3bfbdb9"],["E:/qinhao/hexo/public/acl/index.html","ed805eeaf6dfb19d070618686332d229"],["E:/qinhao/hexo/public/archives/2020/01/index.html","ce52976fb8bbfffc351242ceaf5b8664"],["E:/qinhao/hexo/public/archives/2020/02/index.html","6944be7c7933a70aa3e878588ea64d6a"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","714659a5d766209d7d828490f54763de"],["E:/qinhao/hexo/public/archives/2020/03/index.html","e866dda16f08d71ecf8025724f83573c"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","8f133f37b293581582cce95fe292477c"],["E:/qinhao/hexo/public/archives/2020/04/index.html","0536ec8bb51ebe87215faf7c27546851"],["E:/qinhao/hexo/public/archives/2020/05/index.html","6198f808609b79859a310aa67657e9ec"],["E:/qinhao/hexo/public/archives/2020/06/index.html","94528651d91acba0ef01cebd2088f2b0"],["E:/qinhao/hexo/public/archives/2020/07/index.html","4d68869ee3efd486296b9608c0ba6aa1"],["E:/qinhao/hexo/public/archives/2020/08/index.html","f6c88dc99db2d28327ae19820e818633"],["E:/qinhao/hexo/public/archives/2020/10/index.html","fb8707a1e50460419655723ee641dea2"],["E:/qinhao/hexo/public/archives/2020/11/index.html","0572903794f431074d34ff7f12b0c26d"],["E:/qinhao/hexo/public/archives/2020/index.html","21a7e1ead1ec5dc1483924eda0e47c12"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","ce20e1e13857769da768c76047be7b40"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f6494a479e44a2b6b61b877c0523ed4c"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ffbca5eb3d303da6ae9b6912cf4adec7"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ebcca69f0efa27b5c5b91241030e5080"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","b7036044b5a019f2f0d2bc9b52a062ed"],["E:/qinhao/hexo/public/archives/2021/03/index.html","cde4d6c4d1e7f386e9f4d3c962a463d3"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","96a9814ef02e0fb7fefa83c06caa114e"],["E:/qinhao/hexo/public/archives/2021/04/index.html","94181b39898a9c1b26e7e2a1b2326a3b"],["E:/qinhao/hexo/public/archives/2021/05/index.html","cbb287afb51067b4dc1b97ad8fb3ea29"],["E:/qinhao/hexo/public/archives/2021/06/index.html","929a10eebc22f1ddbd922d0a6d815a52"],["E:/qinhao/hexo/public/archives/2021/07/index.html","5357e8a2303c84dcf50fa425a0a0d7f8"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","c43bf1108e4ee77ffc999a14deb08154"],["E:/qinhao/hexo/public/archives/2021/08/index.html","cf3f5fa21ced9be31f52c204a02f9709"],["E:/qinhao/hexo/public/archives/2021/09/index.html","d8eb510df662ff2368e4d39e9ab36663"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","1e874fe0f23515e94f64d71347fa9265"],["E:/qinhao/hexo/public/archives/2021/10/index.html","6894fe6be27548d1101748086bdc505c"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","b5722d8d10b5f41f268019548792c43c"],["E:/qinhao/hexo/public/archives/2021/index.html","6c084e16bd520b94a39fd802d1f7c042"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","83b942111d29f03a894eb78383e954c7"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","6bf35de92b7fa0af614b0b30940ad428"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","730956a17525b5e5aa9ac894d1e5af4b"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","bcd16fbe7f72ba13066aea8cc0df0926"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","144006b1dc5bb4bc614296b291977439"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","c5fd40222867f7c6d2b7bc51a9a58037"],["E:/qinhao/hexo/public/archives/2022/01/index.html","5161f33018b3f7841853b0c9ca2199e9"],["E:/qinhao/hexo/public/archives/2022/index.html","bcb1fc96cc5bea8d59b91a1567ac9662"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","c148920ba048e4aa68042e8a6e0b33f6"],["E:/qinhao/hexo/public/archives/index.html","39cb3d41b4e2ae802ce26256e80f7170"],["E:/qinhao/hexo/public/archives/page/10/index.html","4964956991357181ba69c3cda9af3d6b"],["E:/qinhao/hexo/public/archives/page/11/index.html","c38ecd669ad133ce1436457e80661bf5"],["E:/qinhao/hexo/public/archives/page/12/index.html","c38ecd669ad133ce1436457e80661bf5"],["E:/qinhao/hexo/public/archives/page/13/index.html","c38ecd669ad133ce1436457e80661bf5"],["E:/qinhao/hexo/public/archives/page/2/index.html","43b8594e00d54d8235b447f12fd7bba7"],["E:/qinhao/hexo/public/archives/page/3/index.html","43b8594e00d54d8235b447f12fd7bba7"],["E:/qinhao/hexo/public/archives/page/4/index.html","43b8594e00d54d8235b447f12fd7bba7"],["E:/qinhao/hexo/public/archives/page/5/index.html","43b8594e00d54d8235b447f12fd7bba7"],["E:/qinhao/hexo/public/archives/page/6/index.html","43b8594e00d54d8235b447f12fd7bba7"],["E:/qinhao/hexo/public/archives/page/7/index.html","4964956991357181ba69c3cda9af3d6b"],["E:/qinhao/hexo/public/archives/page/8/index.html","4964956991357181ba69c3cda9af3d6b"],["E:/qinhao/hexo/public/archives/page/9/index.html","4964956991357181ba69c3cda9af3d6b"],["E:/qinhao/hexo/public/artitalk/index.html","b78c7df845473021bb7371940f3e6860"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","81f34a8c1fc1ae7b2c642aa7b5733624"],["E:/qinhao/hexo/public/bitwarden/index.html","6594e740870fd9900687756f9301c7d2"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","633d66137a8dd1fc2a0e0f6bb2048492"],["E:/qinhao/hexo/public/c-11/index.html","d9f4a86cf00340235eaefd292534dd1b"],["E:/qinhao/hexo/public/c_1/index.html","e35044ee6d57175a64200703eb2c86d6"],["E:/qinhao/hexo/public/c_10/index.html","b1d5765b5ad35456cb69c47234b148e5"],["E:/qinhao/hexo/public/c_2/index.html","08332517663036973a11dec7c2c20eb3"],["E:/qinhao/hexo/public/c_3/index.html","512925255e0bdf1e27c40fa48cfdf933"],["E:/qinhao/hexo/public/c_4/index.html","2db0470770f474371caa3cfebb62dcfc"],["E:/qinhao/hexo/public/c_5/index.html","28784741ee3ee623d45765d277eeed67"],["E:/qinhao/hexo/public/c_6/index.html","539106d8194b56e635facf30dfd6b4be"],["E:/qinhao/hexo/public/c_7/index.html","d32de9abc400c5a0fb3d0979ff986d5b"],["E:/qinhao/hexo/public/c_8/index.html","a2aabbf0d2b7fc581beeefe997da227d"],["E:/qinhao/hexo/public/c_9/index.html","4ef6c365e427b57b546cb11c0981e76b"],["E:/qinhao/hexo/public/categories/C语言/index.html","56abc7f76ed9691a89f5565ebb52e05e"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","ecb76b67f9893bf7c06d8716aeec0029"],["E:/qinhao/hexo/public/categories/Java/index.html","80426db02c660114c2dd11a605acac7c"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","2e04c9076382e4e5faf4d619be0fd908"],["E:/qinhao/hexo/public/categories/Linux/index.html","8ef60b9c7a28ad02f1a2c34809df6354"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","c71facd91fb796de6de624fdbc49122e"],["E:/qinhao/hexo/public/categories/Python/index.html","c4581d86b594808997b93d54a188cafe"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","e75307ac034cd3cbffd681c2ef941149"],["E:/qinhao/hexo/public/categories/交换机/index.html","aaccc137a0cf02a52f9b9df263ea75e9"],["E:/qinhao/hexo/public/categories/前端学习/index.html","8c835b264f086a6c5d2d2980663b162a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","4630f91ed6de81d101d0e614a608dec4"],["E:/qinhao/hexo/public/categories/小技巧/index.html","152d228abc2e7f52e8ab8751c35d7456"],["E:/qinhao/hexo/public/categories/操作系统/index.html","739926c542b207a6f1fb252ad4743541"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","bade30bba722aeb15a09bac0800d6e35"],["E:/qinhao/hexo/public/categories/数据库/index.html","b4cdccc39489381a959a50ea22fb6312"],["E:/qinhao/hexo/public/categories/数据结构/index.html","6a41b4bec42aeab16b2fd6259275826f"],["E:/qinhao/hexo/public/categories/服务器/index.html","c30529edab5e9b14bca8ec5d7fa14017"],["E:/qinhao/hexo/public/categories/算法基础/index.html","f94bb6e2467bf4df5d8ce0fe536a1579"],["E:/qinhao/hexo/public/categories/网络安全/index.html","3f95458950043af99a6fe1f96de06e0f"],["E:/qinhao/hexo/public/categories/股票知识/index.html","0e52e76ad5de657aae808f5eb2ee824d"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","9278b1730f8f56c5e6aae9007b1a86b5"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","5a8a8eedb82bdbd554e1a04ee45cda7b"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","791fb07c047765f7a6a395a6fa3154bd"],["E:/qinhao/hexo/public/categories/软件破解/index.html","61d7d02005110e6c74d6af876c5ee574"],["E:/qinhao/hexo/public/categories/通信技术/index.html","25110c319643aaf9fc9937f2e98ad354"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","09b99cc7166b3ce432a4c8e914132cea"],["E:/qinhao/hexo/public/category/index.html","a450280804d324aca88e777ff2b2550d"],["E:/qinhao/hexo/public/cinemas/index.html","ae930610b9a0dcb3e655962d6de3c2f6"],["E:/qinhao/hexo/public/color/index.html","2cc1ba52dc8271976fd96eb605ee6428"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","55e32315c1f4b30d21f725967ff59cc9"],["E:/qinhao/hexo/public/computer_network_basics/index.html","5c70343c13406c0b4077acd31c46711c"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","77b91ccdfc7571246b658390c4fe50cd"],["E:/qinhao/hexo/public/dataStructure-1/index.html","c943d75cbb2972ee0d1028b29ae1d81f"],["E:/qinhao/hexo/public/dataStructure-2/index.html","55ee30b27a6fa2e6a6d3ff5688282e68"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","4535c5d6347264816d368c985ac40292"],["E:/qinhao/hexo/public/friends/index.html","fc7f1799bad35be5c3075e33d339f292"],["E:/qinhao/hexo/public/gallery/index.html","57c91789e6719e293c4df02d29ff7997"],["E:/qinhao/hexo/public/gallery/myphotos/index.html","9655ca458069d48f2bc5fe09fd8425c3"],["E:/qinhao/hexo/public/gallery/reset/index.html","2d79c744851470b5f90c31b2b5640fc7"],["E:/qinhao/hexo/public/gcc/index.html","2639020ea405a7c02c4d1cdd728688ea"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","f5843472d69e899881496a8d23e0ee83"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","45550e26652b6f1f29ba86d516f71d27"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","fb83bd6f63eee5edc07d5c480a3806f6"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","38e3950cf38960830f74b9adac9ae097"],["E:/qinhao/hexo/public/linux/index.html","7eaa8091f3b5fcc34c019e7ad4c81024"],["E:/qinhao/hexo/public/login_demo/index.html","29b3b08ff906ba91846461c23d787d61"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","25986ef4c8ac7d53c2528bb4379f05be"],["E:/qinhao/hexo/public/memory_save_number/index.html","195a82ffec5a6f7da51e803a35f40b75"],["E:/qinhao/hexo/public/mobile_communication/index.html","dad625eef67d2bcf5626afa5efd7c1b8"],["E:/qinhao/hexo/public/movies/index.html","3532043aeebe1f71b4d9a155c5e06c92"],["E:/qinhao/hexo/public/mylist/index.html","7cab6e821fb0a77777276eac5e540141"],["E:/qinhao/hexo/public/myphotos/index.html","0fee5f11bbb9ec2a54035be0a1932ab1"],["E:/qinhao/hexo/public/mysql-install/index.html","6d9d0c26fce78f486654186fd76c0a4d"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","cd5e348205a796a4750f1b0d89e7a4b5"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","814037ed25d885f2735238af99e8bd68"],["E:/qinhao/hexo/public/mysql_question_1/index.html","5919fccd50d19a4af1fbceddbba40fc7"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","0c6aac559b3ddb0ba650af61d114fe6e"],["E:/qinhao/hexo/public/not-allow-F12/index.html","3981eaa0d9e918bb4f162afaf675760d"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","b0facbd0ae1ebaccafa50b6a88215e71"],["E:/qinhao/hexo/public/page/10/index.html","8562c31dc17e7804594755c0967e72a4"],["E:/qinhao/hexo/public/page/11/index.html","7b38f75cbca1fb81e39c7525f6ea82ec"],["E:/qinhao/hexo/public/page/12/index.html","ec9d7e1db52fc0d36d4f053304911971"],["E:/qinhao/hexo/public/page/13/index.html","5722f9021bb020c5fb2bbdbefa27f7ae"],["E:/qinhao/hexo/public/page/2/index.html","f11ac2c365422092e915de3dec7739e2"],["E:/qinhao/hexo/public/page/3/index.html","94ec3dbdf0ede398e7096f6ad5164c3a"],["E:/qinhao/hexo/public/page/4/index.html","422cc3bfd3d0c5d7322328a19af8a140"],["E:/qinhao/hexo/public/page/5/index.html","be2b8e93a4c5858de9dc9e63a59c4d9d"],["E:/qinhao/hexo/public/page/6/index.html","0dbac34c3933fb84f19a31ce7e3cb078"],["E:/qinhao/hexo/public/page/7/index.html","2f2bcb7cb657eed939903d4255158902"],["E:/qinhao/hexo/public/page/8/index.html","6cfb8891a728ae33fdd68853d90f0588"],["E:/qinhao/hexo/public/page/9/index.html","9fca10c998800936dfe8eb90d0636aec"],["E:/qinhao/hexo/public/python-2/index.html","687882da2c49d47f337bc98160a5a15a"],["E:/qinhao/hexo/public/ssh/index.html","f6e8f4e7901f069b3877d9adb92f8ec3"],["E:/qinhao/hexo/public/stock_1/index.html","c6b8804ef2674631cf0768ad25af8fa9"],["E:/qinhao/hexo/public/stock_10/index.html","66f6f76a8406c248c5e21568e6c21a23"],["E:/qinhao/hexo/public/stock_11/index.html","e5a3eb690b8dff723e1ca6061617f4f5"],["E:/qinhao/hexo/public/stock_12/index.html","0e0bca860acb55d37354d1f238047dc0"],["E:/qinhao/hexo/public/stock_13/index.html","6a830905bdb2380efc8d4e2f7211ae59"],["E:/qinhao/hexo/public/stock_14/index.html","4ec2efcdd104137405948d882b56faf1"],["E:/qinhao/hexo/public/stock_15/index.html","46135f4c9fcd19997e05a3fc37222aa4"],["E:/qinhao/hexo/public/stock_2/index.html","f6ace5dd22fb71d806e4ee28394a0f09"],["E:/qinhao/hexo/public/stock_3/index.html","214428227992e643daa09cb08b2de22a"],["E:/qinhao/hexo/public/stock_4/index.html","34636dffe2de6fbb6231aa0bd1254fcf"],["E:/qinhao/hexo/public/stock_5/index.html","8028f032da981bda0930d78f52ada896"],["E:/qinhao/hexo/public/stock_6/index.html","b3ccc33c419b5bd3e5ab439d0b365b13"],["E:/qinhao/hexo/public/stock_7/index.html","7a961f4cd45f5b80071cf1610ea191c4"],["E:/qinhao/hexo/public/stock_8/index.html","2ff9cb3c1152d35866299bcc72fbc09d"],["E:/qinhao/hexo/public/stock_9/index.html","24166f026e6834ed37f549309d4eab7b"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","c8eb515656c4f6175e6da6c8953a8be0"],["E:/qinhao/hexo/public/sw-register.js","3993be7828e15ac42758350885519465"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","db43b39d5ee4ff6cdd3078c88afd1c0f"],["E:/qinhao/hexo/public/system1/index.html","a542c9e3707a9886130c95f53f5c260e"],["E:/qinhao/hexo/public/system10/index.html","c50b62e4888c2435ba7a3abb01c757b0"],["E:/qinhao/hexo/public/system11/index.html","8ed0508c85159d304ef29bc4037d7b34"],["E:/qinhao/hexo/public/system12/index.html","a42a43852ff928d6d3a88e11a5019b84"],["E:/qinhao/hexo/public/system2/index.html","ffd0c8ce2281eeeb823dbebcefc95726"],["E:/qinhao/hexo/public/system3/index.html","9635e55808f521a0e8bef062f207e6f2"],["E:/qinhao/hexo/public/system4/index.html","5349e2617bee4262a7d638fa46f92446"],["E:/qinhao/hexo/public/system5/index.html","408b225bd8730926df83c8aa579028cd"],["E:/qinhao/hexo/public/system6/index.html","888d004b2cbbc5423608f0e2f84ad9a7"],["E:/qinhao/hexo/public/system7/index.html","8cf45610eb02123110b6967e03ec32d2"],["E:/qinhao/hexo/public/system8/index.html","87fef19f8f8e9538833b266466bf3be9"],["E:/qinhao/hexo/public/system9/index.html","fba9846938e903fa5544cee2106e8978"],["E:/qinhao/hexo/public/system_info/index.html","20c6d37251fd577bc87798421c999fe6"],["E:/qinhao/hexo/public/tags/index.html","df2a4951d42fb947135d04f092392e45"],["E:/qinhao/hexo/public/transactionManager/index.html","ba7fa5a73ff6ebdc9258b387d2f797ac"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","b2859d88472499b4c5608e4a3ec96ad9"],["E:/qinhao/hexo/public/wireless_radio/index.html","e6d655a62e75d917a2fbcd2f9911608e"],["E:/qinhao/hexo/public/wireless_word/index.html","3b68ba4bc93923253c34f00510a5d92c"],["E:/qinhao/hexo/public/xml/index.html","3ff28e9abec094f065d34c34316577d7"]];
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







