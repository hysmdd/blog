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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","04136dff53ed45c41db1b4dacbf7f9dd"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","490e0fd6b406e763c345c5425a12ef24"],["E:/qinhao/hexo/public/AOP_1/index.html","5f60b63279b82e744d7b128c26aaf5b2"],["E:/qinhao/hexo/public/AOP_2/index.html","5117bb1104ae5610560ea11e634df84c"],["E:/qinhao/hexo/public/AOP_3/index.html","96ccdc30c74f5d63dcfd0948f16fdc8a"],["E:/qinhao/hexo/public/Algorithm_1/index.html","c7408e2431019b793df64e2d2f65b63a"],["E:/qinhao/hexo/public/Base/index.html","266ef026acaed8007f354d6baa9ee6fd"],["E:/qinhao/hexo/public/ByteDanceVerify.html","1fe434df9050a95b08877680be5c2af2"],["E:/qinhao/hexo/public/CPU_Register/index.html","7e34cf96a3bfceb367a07f8168e150a0"],["E:/qinhao/hexo/public/C_Programming_1/index.html","138ff9a37feb6c265cf742bd9e5302a4"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","4d40f285c34ea93e1004043848869277"],["E:/qinhao/hexo/public/FileDownload/index.html","d7032f121503058b36c8d853d7a9d8f3"],["E:/qinhao/hexo/public/Files_and_directories/index.html","4ad5cedee68d25ba875b06657c4e8210"],["E:/qinhao/hexo/public/FixedTools/index.html","fb19fbd15c17f15624556d70887a37fb"],["E:/qinhao/hexo/public/GRE-VPN/index.html","e8b7c76cd5081227a538797e283c704b"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","f572bfb37255375210b3150a8b6bd662"],["E:/qinhao/hexo/public/GSM/index.html","3cf79050bc9ccdb4e59cb30771160cef"],["E:/qinhao/hexo/public/ICIC/index.html","1e9f927bdb94e6114191d957ce7f63e9"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","1f69ff195ec23c4f91fe07c553e081d6"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","9c619e833aaae47399e6046f4870eefa"],["E:/qinhao/hexo/public/JDBC/index.html","18c014b67dd0224fb395a180da9ec4c1"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","4f5f5ed8f8fb351f3d18ecbfb38b50d1"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","544434e48178a4328935cc4eaef7b5b8"],["E:/qinhao/hexo/public/LTE/index.html","cb48b01d8ed48369a69cdfd02560e2d5"],["E:/qinhao/hexo/public/Layer/index.html","865fa3a6218fd8e621722042573e0ef4"],["E:/qinhao/hexo/public/Linux_often_use/index.html","85f35470d97133a1e95c5c4dfa08152c"],["E:/qinhao/hexo/public/MIMO/index.html","127b95d4622566528692c2c9f0737b83"],["E:/qinhao/hexo/public/MySQL/index.html","c03daf5b5943cd9ac69ef03a45223d16"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","ad273f5060f4c552230171d03135a7cf"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","308e307aba6d07b2fcd771c9c4ac6e2a"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","f55f3d063f0b54689a4ab7d71bcc350c"],["E:/qinhao/hexo/public/NB-IoT/index.html","6d420e0ac8cf9ce2e0de4d9acaa5984e"],["E:/qinhao/hexo/public/Network_Access/index.html","8a8525b9839f15f12b8e5c9c183fb392"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","4efdf513421316bb27433471606bf0b2"],["E:/qinhao/hexo/public/OFDMA/index.html","b2af6330f9c7abff4092f7ddc3fb1276"],["E:/qinhao/hexo/public/OLT_command/index.html","c0a0f963bf076d7e73e81e649283fbb5"],["E:/qinhao/hexo/public/OverLoad_1/index.html","6c5274e1416ee926d159663c23c4ee31"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","3648bda5182e0e3f154acf977e1334f7"],["E:/qinhao/hexo/public/Python-3/index.html","e8e7dd5215014b65c50a4dc647b7c0a5"],["E:/qinhao/hexo/public/Python-4/index.html","f640240cee4b70c2498f75a24508ca13"],["E:/qinhao/hexo/public/Python-5/index.html","2a596e05772c67082561c1f75e6d765e"],["E:/qinhao/hexo/public/PythonUdp/index.html","e809ea9d5f0c338436ab1f58845ccc69"],["E:/qinhao/hexo/public/Python_basic/index.html","5d84e67d6e3ac143cf65e3cac376b332"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","a9f4ac802433f4c46383875bdc958d61"],["E:/qinhao/hexo/public/Python_variable/index.html","299d4a7ce2b8d96e161a72c958d71bc4"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","20a6698c1d4ca6049101ab3e82481a8e"],["E:/qinhao/hexo/public/TCP/index.html","abf46ce8d2317e2a4b3d6c1ddff69232"],["E:/qinhao/hexo/public/TCP_client/index.html","88b08d5c5dc03529aae99603f2102370"],["E:/qinhao/hexo/public/TCP_server/index.html","4c759ba59de1451a566ed47153a56c9d"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","d7a6209e4a822883e50f1ff99afecbae"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","977bcb0b47a4765e7cbe2adf1aa68f16"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","ab4038f1010abf2e6fb91c2893cfc480"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","78123358dc927c7fdb36a926959794fe"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","45c1c459c197eab98fffd3167c1abe16"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","a9f34129e5be64c4a697fb9f7d47c6e0"],["E:/qinhao/hexo/public/about/index.html","595d8079b2b0b8f2480eb4465bee132a"],["E:/qinhao/hexo/public/acl/index.html","efa25df2a5ac80002878b1344afbdc61"],["E:/qinhao/hexo/public/archives/2020/01/index.html","677e895f38afeff2f8d773e0142c11df"],["E:/qinhao/hexo/public/archives/2020/02/index.html","018c5e8835f06e6937cfd8e0b39e2a13"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","21b03f95001af2af32b5cce3867480c8"],["E:/qinhao/hexo/public/archives/2020/03/index.html","e2a8259c56b2fc13d29780381fa16206"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","0999ed452067d2d3e8bc1131b13e48c2"],["E:/qinhao/hexo/public/archives/2020/04/index.html","89233d326af20bca8b543be5907d2c03"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d5434a25f50be2a4a19cea2f35e0732e"],["E:/qinhao/hexo/public/archives/2020/06/index.html","72392b1593a84c191b431d4105a8fa30"],["E:/qinhao/hexo/public/archives/2020/07/index.html","6fb3f015bf28d7f6b2f26459f411e74e"],["E:/qinhao/hexo/public/archives/2020/08/index.html","ddcef87903e726f12f9536369d6f83e5"],["E:/qinhao/hexo/public/archives/2020/10/index.html","111c4c97b53d7305d0c2ea03dc07d5be"],["E:/qinhao/hexo/public/archives/2020/11/index.html","054904fe2e87570950a31bcd793257e6"],["E:/qinhao/hexo/public/archives/2020/index.html","37b30a6b11e839179da32ce16e7a3507"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","603d26f223538144533b95e641c8d8c9"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","94e9a400834bc677f4672c1ee1c12a87"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","bf201ae8b0ebb0945d4ce3f6f81854cc"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ef9c235e61f153fb20f593b504601c08"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","27e3d405bed7bbb7d3ca1c53855bfeea"],["E:/qinhao/hexo/public/archives/2021/03/index.html","faaadfc6fbc31c149f61e24e83e92bd6"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","af02ae15b8914dc666dd6674dd960c63"],["E:/qinhao/hexo/public/archives/2021/04/index.html","d5c4a627b3c627f640f9169057618136"],["E:/qinhao/hexo/public/archives/2021/05/index.html","8b9f85226db354a660cbd95377bebd1f"],["E:/qinhao/hexo/public/archives/2021/06/index.html","f27ef16cc05caf4e5e31d682c5aa6190"],["E:/qinhao/hexo/public/archives/2021/07/index.html","6c081418fcc51b1d771268937394ab27"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","2b6ff04820859633174b73c976fd4cb5"],["E:/qinhao/hexo/public/archives/2021/08/index.html","bb4c2fc931bf8ce45463c4af825bb17d"],["E:/qinhao/hexo/public/archives/2021/09/index.html","d78ae2b48ffd2e5567412bb02060c057"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","0ab0eb00ad3f569383180ce77b2a4cbd"],["E:/qinhao/hexo/public/archives/2021/10/index.html","e8ea29ff3377f8b5f60d0b430ff4f485"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","9bf8198b4ccffce179b352b398fe706a"],["E:/qinhao/hexo/public/archives/2021/index.html","33a6bcff2150bd5dfd72dfb167f5a1d6"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","ee9e43a2050868a047efdf0e04b53117"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","2c6e0e5277d124d634940a3e0175ac03"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","afc7028365fdabb605be145f66a83ff6"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","9cb9e588461f6d5692fd13a5d3495024"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","366909b665c288982c5b7bdeadf09b61"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","e7721d844295335ee7ccd5b30e855410"],["E:/qinhao/hexo/public/archives/2022/01/index.html","a0123bd0ab50008d4f784fb8ab30a44d"],["E:/qinhao/hexo/public/archives/2022/index.html","f9a55162a1fe52959ea32ebe0d2c5a11"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","799c82be8eede84223a64f4e104eed94"],["E:/qinhao/hexo/public/archives/index.html","b0557a2b0d04debfcdb21be686273f5b"],["E:/qinhao/hexo/public/archives/page/10/index.html","4307e99efc504fa0ce8de13c610e4b31"],["E:/qinhao/hexo/public/archives/page/11/index.html","4307e99efc504fa0ce8de13c610e4b31"],["E:/qinhao/hexo/public/archives/page/12/index.html","4307e99efc504fa0ce8de13c610e4b31"],["E:/qinhao/hexo/public/archives/page/13/index.html","4307e99efc504fa0ce8de13c610e4b31"],["E:/qinhao/hexo/public/archives/page/2/index.html","b0557a2b0d04debfcdb21be686273f5b"],["E:/qinhao/hexo/public/archives/page/3/index.html","b0557a2b0d04debfcdb21be686273f5b"],["E:/qinhao/hexo/public/archives/page/4/index.html","b0557a2b0d04debfcdb21be686273f5b"],["E:/qinhao/hexo/public/archives/page/5/index.html","7d137ee5bb6211dc1fd8b54db6baf481"],["E:/qinhao/hexo/public/archives/page/6/index.html","7d137ee5bb6211dc1fd8b54db6baf481"],["E:/qinhao/hexo/public/archives/page/7/index.html","7d137ee5bb6211dc1fd8b54db6baf481"],["E:/qinhao/hexo/public/archives/page/8/index.html","7d137ee5bb6211dc1fd8b54db6baf481"],["E:/qinhao/hexo/public/archives/page/9/index.html","4307e99efc504fa0ce8de13c610e4b31"],["E:/qinhao/hexo/public/artitalk/index.html","9ca826c3e9be6dc2c36df0dbff7c546a"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","4927a5d9c1d4d10c2c613cc78188f11c"],["E:/qinhao/hexo/public/bitwarden/index.html","7ce9e8bcc9e08c4b8db2b1d0e688ffb0"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","8581eb970fd67264d0574eff99f1f11a"],["E:/qinhao/hexo/public/c-11/index.html","2ea9ae641e8374f53bad724e483171f6"],["E:/qinhao/hexo/public/c_1/index.html","6811a21b879fa60d9ab05b7b1a266db6"],["E:/qinhao/hexo/public/c_10/index.html","dfea729784fdaf698dfc883ab1020eee"],["E:/qinhao/hexo/public/c_2/index.html","21a9d80341c7c31ff82c3e55fc836d7a"],["E:/qinhao/hexo/public/c_3/index.html","93e8b178c642cd02b522875cf54486ff"],["E:/qinhao/hexo/public/c_4/index.html","fe54129cfce8f3eb10fd55866c4d7e21"],["E:/qinhao/hexo/public/c_5/index.html","d0e7790e6e27db3fa2bdf41fb393db06"],["E:/qinhao/hexo/public/c_6/index.html","aab1f127da7be67945c3b965b64fa9b8"],["E:/qinhao/hexo/public/c_7/index.html","879ecd6b9b06bcb7bc91d57715b20f40"],["E:/qinhao/hexo/public/c_8/index.html","3b19cdde1c20d646b2caddcf7ac6f097"],["E:/qinhao/hexo/public/c_9/index.html","af3eeed9cf76618878c77a8dbd18e98d"],["E:/qinhao/hexo/public/categories/C语言/index.html","2acae1e968f958006db97d4717ff6ddf"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","50321d4ab0eb7be95aee3af6e0dc7ae1"],["E:/qinhao/hexo/public/categories/Java/index.html","ba2a025c556c531738f9782ea1181fa6"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","99ad9056b720bf90c5b8e5f1950a8485"],["E:/qinhao/hexo/public/categories/Linux/index.html","d4aec31fcceabf2616ab15c279ad3aa4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","c85074cf3b1b06efe23b79897cd3f4cf"],["E:/qinhao/hexo/public/categories/Python/index.html","cb3bf540c69e24813e9c0df127cf1751"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","1782dd25f0eef7c53e836893c2430574"],["E:/qinhao/hexo/public/categories/交换机/index.html","0be239f35250fe71ee87ea3ebe7d3e3e"],["E:/qinhao/hexo/public/categories/前端学习/index.html","ed972093e71e195ab224655aadba192f"],["E:/qinhao/hexo/public/categories/华为认证/index.html","e96570e191ee0b15faad8ec5ffcd3349"],["E:/qinhao/hexo/public/categories/小技巧/index.html","62df8a8834020820589607c5261a70cb"],["E:/qinhao/hexo/public/categories/操作系统/index.html","3180c7f5b9deddad828bcb9035af171f"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","77637372b13ee21f47d3e120a0127848"],["E:/qinhao/hexo/public/categories/数据库/index.html","cff6f0461c8c9ccf6e21fbe626ce1d99"],["E:/qinhao/hexo/public/categories/数据结构/index.html","22a30d240a58857fef8b69a7bf558679"],["E:/qinhao/hexo/public/categories/服务器/index.html","40cae742412f199396673ba099cb474c"],["E:/qinhao/hexo/public/categories/算法基础/index.html","ba8e98102e44072d82f4b0d5fcc13a8f"],["E:/qinhao/hexo/public/categories/网络安全/index.html","0424dd34b7904084cdbce2903578f05a"],["E:/qinhao/hexo/public/categories/股票知识/index.html","ea64e797d142a95b80ac29c3a8290350"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","90c183194551c937e398a702bc1a38f8"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","74c285471abda651a82bc53f1a64b7e8"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","098fa0fa094c209be70198b85c153131"],["E:/qinhao/hexo/public/categories/软件破解/index.html","fc0f84e2df3fd129dfd1f3238974595f"],["E:/qinhao/hexo/public/categories/通信技术/index.html","24b4c3976c4d2552922de8aced678e88"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","706c005c252d985c9708c1e9f39ba32a"],["E:/qinhao/hexo/public/category/index.html","d262ca5751cf4e2a12d21358379a0c4a"],["E:/qinhao/hexo/public/cinemas/index.html","820f3d67bba5d5fd4141ae67c3c62be4"],["E:/qinhao/hexo/public/color/index.html","4076a000cc8b4dc731c3be27aca4604d"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","5e52b321630d0208d8606beebf812cbb"],["E:/qinhao/hexo/public/computer_network_basics/index.html","fd3070ef37bbbe9e62756e30beead07c"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","042c7dd902e9530da3109ddf9c8ad295"],["E:/qinhao/hexo/public/dataStructure-1/index.html","4ca1fd0350a0a2a19d0554b2b51bc258"],["E:/qinhao/hexo/public/dataStructure-2/index.html","2faac2973b9335034bbfa9177dc840ab"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","e13a960cda6c57f3e89f0b27d90ae7d0"],["E:/qinhao/hexo/public/friends/index.html","c2a333fe626b3976573325d4a23f7c87"],["E:/qinhao/hexo/public/gallery/index.html","8348308368cf5ada45b095d54f58ca9b"],["E:/qinhao/hexo/public/gallery/myphotos/index.html","dfb6daf64d90b618c4c739c6536e6900"],["E:/qinhao/hexo/public/gallery/reset/index.html","72a161dbdd5479969232ed5f705824d0"],["E:/qinhao/hexo/public/gcc/index.html","54a829d9a9bff66733556b165b8c24e6"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","b411d51273566a05a5748d43604c8fb4"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","2156fb91a261b579ebf5786d2d462c3b"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","2cc90d0f8b39d01cc4d9eb5767512b7e"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","ced6f5e918870f6159aa66584e927490"],["E:/qinhao/hexo/public/linux/index.html","38cb0334389efe6e50256fcf9f8c047a"],["E:/qinhao/hexo/public/login_demo/index.html","fc1ca21223d5dd32bf0eb9cc33dda02c"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","923591ceb4b70d0c8cdb8b909b87cfa2"],["E:/qinhao/hexo/public/memory_save_number/index.html","353aa869f945c03cef7cb448538531b6"],["E:/qinhao/hexo/public/mobile_communication/index.html","ffadece98d2efc7c8b78a742c72ad5c6"],["E:/qinhao/hexo/public/movies/index.html","5c1c08dc83aef43f662df088da1de15d"],["E:/qinhao/hexo/public/mylist/index.html","d32e95f14995c1901ebbc1ab06c012e4"],["E:/qinhao/hexo/public/myphotos/index.html","b822deaac075232aa5a3f55e80ef4cec"],["E:/qinhao/hexo/public/mysql-install/index.html","ac5ef0571df01edcf022e3647fca856e"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","b52039b7f24a76f8502ecfb4e675bc07"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","e2d7f27af0aa6c7a220c8f67fe65a2af"],["E:/qinhao/hexo/public/mysql_question_1/index.html","499ca809c3580a48895501ff267145de"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","ef73f045da406c4a1a07ee2ceb3a2c22"],["E:/qinhao/hexo/public/not-allow-F12/index.html","d43121b0b9fa71d0c01174a135358cdf"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","a7de8a205a508f980a4c3c3034c06f78"],["E:/qinhao/hexo/public/page/10/index.html","342fe1747ca9119a3f2f3cff465edda1"],["E:/qinhao/hexo/public/page/11/index.html","1d3afc12828626f5273e6e5d6e45c1b2"],["E:/qinhao/hexo/public/page/12/index.html","297dec2bb24ff9ee5dd9027d44af2510"],["E:/qinhao/hexo/public/page/13/index.html","d151927b18bf69ac4b2cf9412ee17612"],["E:/qinhao/hexo/public/page/2/index.html","3ca28e44b9163362216dffeeb8310043"],["E:/qinhao/hexo/public/page/3/index.html","a71afbe5879f8acf582e32924d614f27"],["E:/qinhao/hexo/public/page/4/index.html","b1969aadb65d9d2a3eca1201b61a1a50"],["E:/qinhao/hexo/public/page/5/index.html","d1c4454f8e7e308269a3eece7dfde013"],["E:/qinhao/hexo/public/page/6/index.html","b5e3fcd789f5b9475ba83ace74a4f345"],["E:/qinhao/hexo/public/page/7/index.html","fe5c0e0fba303e6aa722d9bbb7b8c4b6"],["E:/qinhao/hexo/public/page/8/index.html","7e54409145cd5db641b074fe4a8c7cd9"],["E:/qinhao/hexo/public/page/9/index.html","4ee14a7516b19a8ce0da1c58ccdf786f"],["E:/qinhao/hexo/public/python-2/index.html","6416c330a649472037149d67e853f311"],["E:/qinhao/hexo/public/ssh/index.html","19b5c862445ca3b3fcf520be470c7fcf"],["E:/qinhao/hexo/public/stock_1/index.html","e27246d93e04de52cabd062da3883acc"],["E:/qinhao/hexo/public/stock_10/index.html","3716324b9fd5f2ac7a93b39c9993fd10"],["E:/qinhao/hexo/public/stock_11/index.html","e01c3d1bd0819daf0b8ea60c3f07f176"],["E:/qinhao/hexo/public/stock_12/index.html","7e8b3733c92338b22611cae522d972aa"],["E:/qinhao/hexo/public/stock_13/index.html","7056cba90607150e6c0841fa5f5b5bed"],["E:/qinhao/hexo/public/stock_14/index.html","4353763ec766b15d00dbda6b20c3ba50"],["E:/qinhao/hexo/public/stock_15/index.html","f2cf22905b7f4b6b8ebed649d0aa3200"],["E:/qinhao/hexo/public/stock_2/index.html","b237463c3ed0eca7656679aa7ebd0b6e"],["E:/qinhao/hexo/public/stock_3/index.html","a958ee7c895071f36e0fbfb0d09ccd21"],["E:/qinhao/hexo/public/stock_4/index.html","86bfdc92a8f78f51bbd36dcac894303f"],["E:/qinhao/hexo/public/stock_5/index.html","5ed1a6a57420805da0bd1bb879f56ecb"],["E:/qinhao/hexo/public/stock_6/index.html","2686fed5d8f9fd5cf8ab7eff188f54d7"],["E:/qinhao/hexo/public/stock_7/index.html","e0c2b10d48eb410d028e7d4cce724c34"],["E:/qinhao/hexo/public/stock_8/index.html","acfe2e2aee2c6170d67c3a58931d2bec"],["E:/qinhao/hexo/public/stock_9/index.html","158be70d55c513d99b2cdc1355ad9e13"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","fb41cafe12d813895e9792bf032a83f5"],["E:/qinhao/hexo/public/sw-register.js","535aa996f552c48ff1be9ef51954dcad"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","5f4e746908a0f0799813b99815761e4d"],["E:/qinhao/hexo/public/system1/index.html","3b220a9f41d6296c291f4f19b23ea074"],["E:/qinhao/hexo/public/system10/index.html","d55ed70ce30b79d82587c135db3d9abb"],["E:/qinhao/hexo/public/system11/index.html","5b5172919df4eba8cd3d238c89fb826a"],["E:/qinhao/hexo/public/system12/index.html","ff035d0d04d45fc87475e3586b1c41a5"],["E:/qinhao/hexo/public/system2/index.html","e529ab8e72b21d7b4cf95fba38bd8e7a"],["E:/qinhao/hexo/public/system3/index.html","20b2b5d661458cb7e3a8325592275676"],["E:/qinhao/hexo/public/system4/index.html","9de4c2aef2b21ef234a181fb23798112"],["E:/qinhao/hexo/public/system5/index.html","0ba6606566eed753d73d0bf0593d69b3"],["E:/qinhao/hexo/public/system6/index.html","399364827203bde28fc99eb97d97a6d2"],["E:/qinhao/hexo/public/system7/index.html","485be44204d3e6250f81bb59246d6779"],["E:/qinhao/hexo/public/system8/index.html","91d509fd6da82e70a4a0aed8993cc170"],["E:/qinhao/hexo/public/system9/index.html","6d025e5cbcdcbe74d7749ec8f69a9d78"],["E:/qinhao/hexo/public/system_info/index.html","bea6e85c4006c01aa3f5c1c3f1e90855"],["E:/qinhao/hexo/public/tags/index.html","ae4ef2d4ed9342dbf43407e0d902dfcd"],["E:/qinhao/hexo/public/transactionManager/index.html","f7a5b121323c4fd9b0c599861f1433f1"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","636bb1f517151aa7ae1999338b828f58"],["E:/qinhao/hexo/public/wireless_radio/index.html","158bf611f8436b4c6ee79d5279d89528"],["E:/qinhao/hexo/public/wireless_word/index.html","25f2edd8c39c0034024a1650092a0b8c"],["E:/qinhao/hexo/public/xml/index.html","439814ec1a96f2f9242c0e621b34a2e3"]];
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







