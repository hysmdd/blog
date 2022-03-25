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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","3e14476bf89273c744eeb360e7e00569"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","8398e01352a22c6abdee556b19ef5a4d"],["E:/qinhao/hexo/public/AOP_1/index.html","35ac2d2d1864c77b8ab51217e9994028"],["E:/qinhao/hexo/public/AOP_2/index.html","06200f95a9f6190ca3e54feb85a10bc4"],["E:/qinhao/hexo/public/AOP_3/index.html","d49ceeb89ad9c07433000b1cf43aac59"],["E:/qinhao/hexo/public/Algorithm_1/index.html","aa7bc5bf72c2107b47ba288736922cfa"],["E:/qinhao/hexo/public/Base/index.html","921341344d378cb340604a55cafa4eb4"],["E:/qinhao/hexo/public/ByteDanceVerify.html","c57b045197a93d22f7a52de37a6f7f02"],["E:/qinhao/hexo/public/CPU_Register/index.html","e1ae315b53980695279c06e303234df2"],["E:/qinhao/hexo/public/C_Programming_1/index.html","ac0e43c8c0624f5841b66074b8894631"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","607ef2b1104fde125b3efd9609ca50b9"],["E:/qinhao/hexo/public/FileDownload/index.html","831b3e1051382f0da0fe70eafd2a5d52"],["E:/qinhao/hexo/public/Files_and_directories/index.html","a5ebad33f5300444a94194e55653fc33"],["E:/qinhao/hexo/public/FixedTools/index.html","d00a94e1891021f671eb6b30a4dd944f"],["E:/qinhao/hexo/public/GRE-VPN/index.html","96b1bbcd282bfba548176578d5f9a052"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","18d5e105865030b4b1bb2cbb7c979d97"],["E:/qinhao/hexo/public/GSM/index.html","bae021fab1fd4aa142765c199982c19a"],["E:/qinhao/hexo/public/ICIC/index.html","9c0b1a7e01c9905ef450218dd6afaece"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","4c4fd510c99fdb4df2f0c9d300c9b914"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","680025eb1ee832542b36765c5fbe3196"],["E:/qinhao/hexo/public/JDBC/index.html","779ccf6f5eccbc9ec485f28dda14dbf9"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","88e05c054ca6fd397c523a5809cf1f23"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","c65e7bce442eb4921e8a607f6ae93130"],["E:/qinhao/hexo/public/LTE/index.html","c966e6138e4bac2fb1d0f059ea0fe0c0"],["E:/qinhao/hexo/public/Layer/index.html","e2f130f3b0b3544768c11f68d8f180a9"],["E:/qinhao/hexo/public/Linux_often_use/index.html","622da4138f5ee2002ccc29c60d649582"],["E:/qinhao/hexo/public/MIMO/index.html","ae14c56616933e844da2509997ff66de"],["E:/qinhao/hexo/public/MySQL/index.html","62c81a43212dc2fe33c99fcc744c6225"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","36fef0e0ddc172514f8156b0b0707848"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","a17ebd3cf1a88b51eb57829d56ea215b"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","6a23188e23a14bc62640af167446a33b"],["E:/qinhao/hexo/public/NB-IoT/index.html","0eac0e31c9d7eadb093b2c5556bc8019"],["E:/qinhao/hexo/public/Network_Access/index.html","d780277f3aee3be8d5dfec8fa254da32"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","cab787c050f95239f9a75f970754692f"],["E:/qinhao/hexo/public/OFDMA/index.html","7598bbef8b306905c139f8bb0556d683"],["E:/qinhao/hexo/public/OLT_command/index.html","39b1408a5adf07f0f77aa8ac4498001d"],["E:/qinhao/hexo/public/OverLoad_1/index.html","1b4d251a70fc47cac676aebaacc46668"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","8c7c6b3f969ef1b49eab46c0b40cc10b"],["E:/qinhao/hexo/public/Python-3/index.html","6b01d081c15c44243cbc063c6134b8b5"],["E:/qinhao/hexo/public/Python-4/index.html","b93daae07f16c3be5aecba58e7f810bc"],["E:/qinhao/hexo/public/Python-5/index.html","433f1aa95a360ba68caf69722e21bafd"],["E:/qinhao/hexo/public/PythonUdp/index.html","1b2e700b790d030c8f5dc00fe5153d92"],["E:/qinhao/hexo/public/Python_basic/index.html","e56df5b3ad39ea3d8f9c1f975ede0854"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","ec57f693804607064857408e6f7f44d0"],["E:/qinhao/hexo/public/Python_variable/index.html","d1d5f07c93948902f8f09f55315c95a2"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","72810891e79cf466df92a79e81b3ba66"],["E:/qinhao/hexo/public/TCP/index.html","21918d41b563e286639b75419a2bc87d"],["E:/qinhao/hexo/public/TCP_client/index.html","2f7f6109032bcbf00412cbce23723beb"],["E:/qinhao/hexo/public/TCP_server/index.html","a4097365cf69a525ae113f4ec1a35528"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","3f4f63a3e23cb5fe736aae2c33620b70"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","8fcdca62adbea777b5647abf17a56e81"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","81a47a6bef5fa4dfeeccd265fbc0eb8f"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","1a64edf9cee63b878f4624a783928be5"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","343d08d42523b4aea1d57664448af339"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","a06a49425bf41b26001a0b4ba1715ffb"],["E:/qinhao/hexo/public/about/index.html","77a7c2de8a942f0a40fa3247e302cc03"],["E:/qinhao/hexo/public/acl/index.html","6b0c51f9780aef1d137d7d6cc1075d7f"],["E:/qinhao/hexo/public/archives/2020/01/index.html","bf5b07d429082d00db7be2f4ad0eaeb7"],["E:/qinhao/hexo/public/archives/2020/02/index.html","af38240a1f95f12d7968655ec95f1089"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","7a2fe4b8da2419ca51e00ec0d8844c1d"],["E:/qinhao/hexo/public/archives/2020/03/index.html","36af88ea52f48dd5ca9d7b0dcb733f54"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","00f657b1ffbc0fe7b3a14a81daacd12d"],["E:/qinhao/hexo/public/archives/2020/04/index.html","e9120c5c61e56b937f8e41c178d01d1b"],["E:/qinhao/hexo/public/archives/2020/05/index.html","f7a1f5c86bde64207f77b573c629b4af"],["E:/qinhao/hexo/public/archives/2020/06/index.html","3e189f5561071b76d8e9e6f395668047"],["E:/qinhao/hexo/public/archives/2020/07/index.html","d174e2af1c3c059fa9039dab75cbc05f"],["E:/qinhao/hexo/public/archives/2020/08/index.html","6962ff8b1fc91e2db75aa48033913e3a"],["E:/qinhao/hexo/public/archives/2020/10/index.html","7f4caa3cef8d0e9232f1272cd14abbce"],["E:/qinhao/hexo/public/archives/2020/11/index.html","cd25c117fcbb3c96667caece6e202b24"],["E:/qinhao/hexo/public/archives/2020/index.html","a44a3af7c27080a3b41b63bc03ed63c5"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","d1cb2daf882eacd0b097e718276874c0"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f6ee065e3c6fd0ecbe619123be43e900"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","63cce50a04aaf950f619863a305ee68d"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","9a3ad0cef10caa3fd934c1b0ca1c67df"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","e3a85028f55b82ef6bab908ce84cb3fd"],["E:/qinhao/hexo/public/archives/2021/03/index.html","1ed2b1bb0e24e3a479902509089e1aa4"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","a8aa298307610eccf28259987b7d0cdd"],["E:/qinhao/hexo/public/archives/2021/04/index.html","958ce3f9cbe8b8ebc55b6a7f818ae7cb"],["E:/qinhao/hexo/public/archives/2021/05/index.html","eb7d44d73326c5d875c3e134632c5b4e"],["E:/qinhao/hexo/public/archives/2021/06/index.html","b3522bcf21cf902d2c014d21ed670894"],["E:/qinhao/hexo/public/archives/2021/07/index.html","47571f941219f5bc38cd59839b217fda"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","d1b85d22ab6732d40f12d3d357c65b73"],["E:/qinhao/hexo/public/archives/2021/08/index.html","aac70c70781c21be320355690bfe4d5e"],["E:/qinhao/hexo/public/archives/2021/09/index.html","bfec01ef446cf9b50ad9371e9f4315b8"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","231aa4605a5cbdcadf548be6e952a3eb"],["E:/qinhao/hexo/public/archives/2021/10/index.html","4207c15a9d9a9a1e0bcf47567637f72d"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","c6c64d6c4de40cba144beccf1425266a"],["E:/qinhao/hexo/public/archives/2021/index.html","1c086b6d8032c8211aaea67aa5cb1fbf"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","604024cc119aea0b74b2fff5e779af83"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","55e4dc49708e14894c514b47ecc1c607"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","65a2adc507f5fe43db1c867635efb1fc"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","9c21280426a2d50e5914159a29cbc479"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","b92553bb9d99ce3663f363aa5736f49d"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","faacdd752a1c040fd7ac1d464f7f770e"],["E:/qinhao/hexo/public/archives/2022/01/index.html","dd41d13b8231f41b71068f8d28d82eb0"],["E:/qinhao/hexo/public/archives/2022/index.html","2a72397dbc9d9813f1e6679e7386f9de"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","7d95c2b67aa4f35934e139a6de119431"],["E:/qinhao/hexo/public/archives/index.html","ac05d1e26ab25334184a744816929947"],["E:/qinhao/hexo/public/archives/page/10/index.html","853bf4fafa22c542e1fcf2ed10623aad"],["E:/qinhao/hexo/public/archives/page/11/index.html","853bf4fafa22c542e1fcf2ed10623aad"],["E:/qinhao/hexo/public/archives/page/12/index.html","affb9cc2b95150dd0e94d8c6f11e20ed"],["E:/qinhao/hexo/public/archives/page/13/index.html","affb9cc2b95150dd0e94d8c6f11e20ed"],["E:/qinhao/hexo/public/archives/page/2/index.html","ac05d1e26ab25334184a744816929947"],["E:/qinhao/hexo/public/archives/page/3/index.html","ac05d1e26ab25334184a744816929947"],["E:/qinhao/hexo/public/archives/page/4/index.html","fac70f2418f9f1d2aa1785dd48d25196"],["E:/qinhao/hexo/public/archives/page/5/index.html","fac70f2418f9f1d2aa1785dd48d25196"],["E:/qinhao/hexo/public/archives/page/6/index.html","fac70f2418f9f1d2aa1785dd48d25196"],["E:/qinhao/hexo/public/archives/page/7/index.html","b09146dae33d46f22ff05b5f42b76993"],["E:/qinhao/hexo/public/archives/page/8/index.html","b09146dae33d46f22ff05b5f42b76993"],["E:/qinhao/hexo/public/archives/page/9/index.html","b09146dae33d46f22ff05b5f42b76993"],["E:/qinhao/hexo/public/artitalk/index.html","e6ee2e4204c94a512ed1e2516a0182a9"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","1d9f23213e8b190fcda245aa253c5801"],["E:/qinhao/hexo/public/bitwarden/index.html","0b5837bd5c6da89cfdf99eeae6dcd300"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","22c187a70e2baa1ac5b362d48a7d078b"],["E:/qinhao/hexo/public/c-11/index.html","1c7fb04740dbdda054ef882b2297968e"],["E:/qinhao/hexo/public/c_1/index.html","107c30cb7be802ed4257f31e5b0c7505"],["E:/qinhao/hexo/public/c_10/index.html","009c292696e6e4fb7b69ba960a2fd0be"],["E:/qinhao/hexo/public/c_2/index.html","2725e5936b112f7be3831a70f4767b35"],["E:/qinhao/hexo/public/c_3/index.html","7f5ae17e489f435263e7265b2ecac12a"],["E:/qinhao/hexo/public/c_4/index.html","1f020e5329ffeb52ee1f1128d8025860"],["E:/qinhao/hexo/public/c_5/index.html","6ac39c09179d5c0e221bfc2b812da420"],["E:/qinhao/hexo/public/c_6/index.html","e0c2d2901e4c16b35e93506bc9485f6a"],["E:/qinhao/hexo/public/c_7/index.html","d628acc8449d04430c009eaf41e362f0"],["E:/qinhao/hexo/public/c_8/index.html","ce55aa785312872d2f55a7ef254c7125"],["E:/qinhao/hexo/public/c_9/index.html","412a15d5f6611db7d9e2be334cd9020b"],["E:/qinhao/hexo/public/categories/C语言/index.html","3c1d5081ccd627bab7a1cc1daebe827b"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","df479a0674b8159cb3ff0e6b0db49fdb"],["E:/qinhao/hexo/public/categories/Java/index.html","4f6d9a24c801e4fd418e747d859a0974"],["E:/qinhao/hexo/public/categories/Linux/index.html","f4131f7d13e70f0116b718034d9324c4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","ab8bb0ab9b0530d2ad0e5f25cda424d7"],["E:/qinhao/hexo/public/categories/Python/index.html","fec457a4508e4d17dae3bfe53777e85a"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","999be7ef3c83a8cbda3a06cbee47f471"],["E:/qinhao/hexo/public/categories/交换机/index.html","16b822b03a21d58211a5b2d6ad97cf5b"],["E:/qinhao/hexo/public/categories/前端学习/index.html","a26f1819dc1e1594a543b3bced6bf9fa"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a60f5407bcfe37c07b1e7b94de353c24"],["E:/qinhao/hexo/public/categories/小技巧/index.html","d7c81b33e6deca9497caef23e2714431"],["E:/qinhao/hexo/public/categories/操作系统/index.html","189572bd7553500033934da243219050"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","c213307c8bcc6a1f978c163261e05ac8"],["E:/qinhao/hexo/public/categories/数据库/index.html","89be1010f829692efbea456a1fac9ff0"],["E:/qinhao/hexo/public/categories/数据结构/index.html","6a3f00735a6f0ed158c96afaba11fc54"],["E:/qinhao/hexo/public/categories/服务器/index.html","5b7567e71259ebc537112905d3a28bab"],["E:/qinhao/hexo/public/categories/算法基础/index.html","9e3f6831b39d7e3b93991d254a78fdd8"],["E:/qinhao/hexo/public/categories/网络安全/index.html","08f1c6912f90b352901e695d8e95da02"],["E:/qinhao/hexo/public/categories/股票知识/index.html","55993cd80b8bd6c1d7c6e37498d14859"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","5ba418dac9111124183839d2ea328766"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","43f65d05ea62b9a9392927f0af514dfa"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","7189ae1f398628d5fa92fb77e4e2d918"],["E:/qinhao/hexo/public/categories/软件破解/index.html","d9242ede7a17fc4848ff5ee236b09867"],["E:/qinhao/hexo/public/categories/通信技术/index.html","7cc076219dd5ce4797d8b542f66523dc"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","3f967752de41972fb27d6721a39aa134"],["E:/qinhao/hexo/public/category/index.html","53e6d4b49f083e75fb22c44e1c3b8a85"],["E:/qinhao/hexo/public/cinemas/index.html","5cbcae9bc08889341b6781f481f6616e"],["E:/qinhao/hexo/public/color/index.html","2e23c8cf33d5896c36326fc4e1ff222d"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","5a6ca04532ab984c4937c932c724fe68"],["E:/qinhao/hexo/public/computer_network_basics/index.html","b6c3af83a032db55d5694570cb8576e0"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","2e2921f0f5f86ccbb3e47821b93a13cf"],["E:/qinhao/hexo/public/dataStructure-1/index.html","f4fca633d2911e935c2ffcfaf1cee3b7"],["E:/qinhao/hexo/public/dataStructure-2/index.html","8cef710fa01d9447ab5d3207175c6573"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","e5a014068a27bd5d9458905a5999b54b"],["E:/qinhao/hexo/public/friends/index.html","b657d8cd0d8280c5d6c7afed4b1aed0f"],["E:/qinhao/hexo/public/gallery/index.html","b5ddaad5646ab22c76fe807beb995044"],["E:/qinhao/hexo/public/gallery/myphotos/index.html","0c17d28242962473f7159e3d125f2849"],["E:/qinhao/hexo/public/gallery/reset/index.html","3d89b2a648d3332aef4c700fee7faebb"],["E:/qinhao/hexo/public/gcc/index.html","613499822b36f2b3718840d8a412796f"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","0c662eb1470fd84cf0e6429a8b4518d8"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","124d3be504626a09da5432fc9b32b35e"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","86230ce4e40850d16258abe3532c50bb"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","b15bb1bd2c24167259035d577043ad50"],["E:/qinhao/hexo/public/linux/index.html","f348a6ff642469ae5edc3d4af1ea1f80"],["E:/qinhao/hexo/public/login_demo/index.html","0563f729434318015cc6a078bc210e33"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","0d9e6d60258840e940e7587527d8fe84"],["E:/qinhao/hexo/public/memory_save_number/index.html","984655a3ceb785d5d4e54074dfb25d99"],["E:/qinhao/hexo/public/mobile_communication/index.html","2f25ebf8100a148652cc7ace5722164c"],["E:/qinhao/hexo/public/movies/index.html","7f61fdbac8755958eb4c6aec2dd3048d"],["E:/qinhao/hexo/public/mylist/index.html","4fc5a65c4653de9a08ed7cc1f2d6ce28"],["E:/qinhao/hexo/public/myphotos/index.html","3ad566147f1cf612a366bb27e9adaa43"],["E:/qinhao/hexo/public/mysql-install/index.html","a8ed0dcfe03d9ce6dc82e73b7cffe1ea"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","548c575cd5151ccfe2ed287a66083afe"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","4430ce3583bf2c5834c59bce55543f6c"],["E:/qinhao/hexo/public/mysql_question_1/index.html","32352d9559ca7e742e74ba93d3dc6800"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","6533502cb2b4da06b383126a3a1261b8"],["E:/qinhao/hexo/public/not-allow-F12/index.html","dc7eb266e3c9d43bb8b83e2a6fc9ae78"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","7723d4df4efc533f176ced2347ed738f"],["E:/qinhao/hexo/public/page/10/index.html","e04b355b9b35a948d7714a8b286574cd"],["E:/qinhao/hexo/public/page/11/index.html","6315064018b60dcc35e5e6d827db59f4"],["E:/qinhao/hexo/public/page/12/index.html","fb1eb9f1d5c50d45d3c086a0cc68987b"],["E:/qinhao/hexo/public/page/13/index.html","a6740fe9ac47531618d41250f50c82e6"],["E:/qinhao/hexo/public/page/2/index.html","2201c6e2b45ebbff8239f76c5ea63e5d"],["E:/qinhao/hexo/public/page/3/index.html","a5337e9c2211a2aa6884ad1a656e45f2"],["E:/qinhao/hexo/public/page/4/index.html","6baecae9b87b919c23bc32070768c6f7"],["E:/qinhao/hexo/public/page/5/index.html","87f17f041c28a7f95c5f27df3d05ea0a"],["E:/qinhao/hexo/public/page/6/index.html","7381e3265d8ff28e40c74061d392b689"],["E:/qinhao/hexo/public/page/7/index.html","760930896fea45625d90595e0fc91cab"],["E:/qinhao/hexo/public/page/8/index.html","d83ed4bb95fda09aef0eb8de69ec0ca6"],["E:/qinhao/hexo/public/page/9/index.html","94d25b91edfdfc0cdc3774f1112c9593"],["E:/qinhao/hexo/public/python-2/index.html","238295e40dfca1bb824ad0b31f6b39e8"],["E:/qinhao/hexo/public/ssh/index.html","ab293d70fd847409a99eb0a549cb60ac"],["E:/qinhao/hexo/public/stock_1/index.html","0de93cbb4cbb630d7dde433995c93f05"],["E:/qinhao/hexo/public/stock_10/index.html","cec73a592c6d918a757057ee6a5b8761"],["E:/qinhao/hexo/public/stock_11/index.html","063b24f7ab81c5751201ed6b771fa25a"],["E:/qinhao/hexo/public/stock_12/index.html","fe84b7989a40847654da4228f06a5f77"],["E:/qinhao/hexo/public/stock_13/index.html","3934842f8e189fc1780e5042a6144473"],["E:/qinhao/hexo/public/stock_14/index.html","343ecc8b214974c748528caa7d32783d"],["E:/qinhao/hexo/public/stock_15/index.html","b98f441be2e49cec78940f682ecd9a8c"],["E:/qinhao/hexo/public/stock_2/index.html","133b4532a29b14e0aba922840c869530"],["E:/qinhao/hexo/public/stock_3/index.html","18eba7cb98d7ed4dd53b36d9e48e3ea0"],["E:/qinhao/hexo/public/stock_4/index.html","83fba0b8d5edefd9b2f8676f14c4e3d2"],["E:/qinhao/hexo/public/stock_5/index.html","f83ee282bdf6adc1673413af90e53578"],["E:/qinhao/hexo/public/stock_6/index.html","9b5c3012ada7ad8b34401cfece8311d1"],["E:/qinhao/hexo/public/stock_7/index.html","3e439147013afd2cbf69a6cf41a84679"],["E:/qinhao/hexo/public/stock_8/index.html","cd241741ae3d44614e6ad3c5b8aa35b0"],["E:/qinhao/hexo/public/stock_9/index.html","57d2df92796fced5ea9b2219c2171051"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","0096b91439224dd1b1dad53ffcb1a96f"],["E:/qinhao/hexo/public/sw-register.js","8d939a580977b9aa5fb180752ef2dffc"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","4afcf1b9cf7928ba2bc9900ac5a09193"],["E:/qinhao/hexo/public/system1/index.html","dbc8f1953ccb999fc2c6095df2e236d0"],["E:/qinhao/hexo/public/system10/index.html","66328b8adfe8274f222fb018cd80b41e"],["E:/qinhao/hexo/public/system11/index.html","2ad5fd7ea83585c02cd5484335ebe222"],["E:/qinhao/hexo/public/system12/index.html","0d95c0c8168b7350f48a6f11d1eb6b3c"],["E:/qinhao/hexo/public/system2/index.html","45fb0facd72216aa34c92cc0f639ed83"],["E:/qinhao/hexo/public/system3/index.html","345081eb71fbcdaf480fcdb1e101eeb2"],["E:/qinhao/hexo/public/system4/index.html","275ec028197e41d0027acf6f30c33c9e"],["E:/qinhao/hexo/public/system5/index.html","34bd66a2fd82a016429e33ab5b219898"],["E:/qinhao/hexo/public/system6/index.html","a5507b9ec0058a3b19a788b2b1562777"],["E:/qinhao/hexo/public/system7/index.html","0d861951cbd6170b0cbeb0af83efe5e9"],["E:/qinhao/hexo/public/system8/index.html","d5b531c7ebab620ec16fadc32aab5777"],["E:/qinhao/hexo/public/system9/index.html","32bd0562ad08329234b2925858f022e1"],["E:/qinhao/hexo/public/system_info/index.html","411acef584f7fdfb5213e5578ffba7f9"],["E:/qinhao/hexo/public/tags/index.html","760943e86af4df915b8b4f5a60f016ce"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","c284cc433884dc448e665cda0792ec1b"],["E:/qinhao/hexo/public/wireless_radio/index.html","df8abbe9dbb4acea67088023371434c3"],["E:/qinhao/hexo/public/wireless_word/index.html","927f40e33231748f09670b1c274a6e1e"],["E:/qinhao/hexo/public/xml/index.html","9abe327b63adca75b8599fd610009631"]];
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







