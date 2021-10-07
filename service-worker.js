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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","521cdd81ac0c94b20fea221ba616b501"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","01c23e5269f2a470197127097fefc04b"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","431da2ceba7e4ada966314534f9b31a9"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","e306a07393e5ffba1da00231061be205"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","dbc6b436e69c73c6039bdfc1f8997bf6"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","5c075ca0b48467a9128cd1fa18132998"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","ca1f79e62d39072acfb222fc503c39c1"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","64a7be6ffda6b76f050254e9abc3fcc0"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","5d4f544f0788c6279c0fc6729f6f593e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","63721e3e66c1278395d1655a57d76ab9"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","5a41cbc7a39c971a35b124daef026b08"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","0156a8373b25efca959b64b23e156130"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","2a4eee22abdbb7244f6b24c7d957e280"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","3a704479ee8a76e1b322147db2f8d1d2"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","94d34f147e8af913259be09b9fe75beb"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","d8f66b4aaa6bd19f45c265fd927ee419"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","d1cfbd2035f0f76b0dde3ce6b64905d3"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","f8db7efba0445eb61963b3e9e03e2b64"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","ce8b069f9836deaadb357ef34f53ada6"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","5a747e2ee2571ee7e0bf652ec02c820f"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","124ecf59514e7efc59746253186d9909"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","328d0c1d09019b7e8fa20a48f2442475"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","6ecd2813f92ffad090b908c56e953fb1"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f3061865c6c20a15f0fc801e774294b1"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","a3d26a57485258c4a0503428523a9ee8"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","d0ce91ba0484699a56aec777481a1fd1"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","e33baeb6ed2cb09fffedee9ec3002b47"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","77ebd691681776dbd72138c39a439940"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","00f4dad50fa72998fbc458f20fd5551c"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","0074ddfb90f88141febb65a1648a4195"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","d4fdf9d524a7072f91c6a215c92c1a37"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","b5e041afd9b40c5219065cd3809511bd"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","4429e1cac1202f9bf65c9f150eb40bca"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","05901101c5203be374a8dadd515b359b"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","66dc3b0d18df6b81d2de71981ef03521"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","96851f3eb0114833de005fe11eb6add6"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","b99d3a202cc9fb785cda1e871e5a1180"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","23f7ff55538d354b496c38d55f6f7dc2"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","9465675616b884b77255df77b61a6e89"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","be641a5d74776c7d19f66d3002ff697b"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","e274cbc5e15ef5f7c31a78be6e2f8136"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","3413f3d0127712d44a08d4138dd649cc"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","0a2b5b848aafcb91d87e3c4889886360"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","e68f6e86675fb82d3dc9f9287aadcddb"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","8b6ff050d30279d9d36e6b1851ba0b84"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","cbb656b70dc6fd0f82135bd33e56052d"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","126ec9152c32d225746679826ef753ac"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","83c7870ecc8e9f7787174051f9e9293a"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","66414a9184506bffc998db37d2c17462"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","573d09634865679c4ca2a4a0a9bcb729"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","32895e6d7fee3b3dfaf141eba5b2626c"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","b7c93f1181d646453af82ee9bcffbd1a"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9b80351dd3bd069522935e7a2111ba33"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","953fe0a4d0dfadfb92c0ef63a3c49f66"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","6301d3d7d8d25093e1efd3796a15246e"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","a7a0e6f8e250a90895ae87ac1a90e59a"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","a533f18af0a1b3f9c27f050e539c15dd"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","68c6e0f40a0ccb17d96bfc9e614e3530"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","0830597a91503fc1ab0f900b57e758ef"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","e9b0c001ce8657892c7bdd0b722d9b5b"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","c9586ca3d19d0f3349f6f5efe0b8498c"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","05e773426bb9006548648a089c5e6b27"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","4d22e1a15246e7a0cedc80ae8b591a1a"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","26df22beaebcbf837cdb4db6301c86cc"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","23a9d672ad12ba1e6e82c4a5e6aab4c2"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","80cc572592980be296f1b23d4911d7d5"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","ebbdebee4cff05bf3c1a1ceef99cb2ab"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","8bc3310c4ae68865ff053b68df1e488d"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","c2f5f0811ffe463091f3127ef6877ab6"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","a05bd5a3bf36d42f4eeb09a66e07f631"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","e50087ebf81163633d0a3d51d6596792"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","51a20552530018b6f3865352b7abef29"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","81ba2d32c619e30ccff127f134970c09"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","a051448406159e1012dc3e8f3cc57e06"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","564ee578d8acc1c9d047fe95cec1a514"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","05f4daa883b1e70cd55744d8ed697987"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","fb0b3090458490192eaf22e011f2bd9b"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","288761e93f9f76bb2e6b3372bf3c6bb3"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","569316c5c6bd9031ef0a24cd4c6c7fa8"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","f6dd34c93b0c60f5449cabb5ebef45d5"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","06273c53a293363c670e9543fbef1c57"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","bcdf00ad7da069bf9e46517d0c13fdad"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","5336f4ebfc20e23a67fa2d7f788f92d7"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","16ca2ad9004755dfd9ae01f6c5b05886"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","6aa27ae541de4afa635f687246db975b"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","fcd1a317edfdf0b4eaa3a7b898aaf539"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","80561ce60389a3517e72dda438e65eb3"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","8a93a1ec855763ba238e536db44bfc5c"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","a2a6fcbc3c6de4704a96b4e4a7494c41"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","d1f63435cef324d0568e2866f2aadc6f"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","f340acb277189ff1bd78efa128b0ecb3"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","490720f2421997d397d7dda73b08c190"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","1fb64e429d72f1cf83503419e5732b5c"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","f617053d331de12ec6b1b2d284366eaf"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","4b5f45bd63bdd5a64d83bdd5f1de4c03"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","770c6070933d225b5b45e09bb350fb71"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","7fdfa669247f4b3d75f6e4f6e0c2d148"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","7b83d4bd90fc0bae993403d5d72c86c6"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","8c690be9d37c433c1269d0e6276832b4"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","5d3b6bd9f6467ab8912537f43c08de6b"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","543cf28ee9e60e630b1413c97a56f45c"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","94b2e30e240c6283d47b553709920f4b"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","f005e4565393e3df9eb36393cb6ce48d"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","d765cf5aaab2c9cf60439e1b96ac4c90"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","96d545b491366be1c163dd719e4baca1"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","d87236bbf2a9d67919ac830339c545f0"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","31427a8984dbb05cb5883ce951c4e317"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","8f20fe36be74b9aa432718730ab210dc"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","a68873d1297e2593e8615cadd931ef03"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","419e9994f63c9cedbb9e740605243d64"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","bf7a74c2f1c1af5ad0ba831a5f67bcc1"],["E:/qinhao/hexo/public/ByteDanceVerify.html","d1fcf6c59ac4c660c0c1c216e613ef67"],["E:/qinhao/hexo/public/about/index.html","c475359b79dc1a4ec29f4b291972fba5"],["E:/qinhao/hexo/public/archives/2020/01/index.html","f8ee0939b993f2717c8813470acb4289"],["E:/qinhao/hexo/public/archives/2020/02/index.html","7ac11b78e420bfce80cfba85ec0545cc"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","732b224151fa9cf25876de0af6a23008"],["E:/qinhao/hexo/public/archives/2020/03/index.html","7d50dd9cb27c7a63f543640a014a5395"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","3b4e633e9e4d6d8122837a122e4da5fb"],["E:/qinhao/hexo/public/archives/2020/04/index.html","32a10376600ec9efa41e07487e50ded5"],["E:/qinhao/hexo/public/archives/2020/05/index.html","c72b03fe3304e583501583fcff67976f"],["E:/qinhao/hexo/public/archives/2020/06/index.html","0dcce3c3db8ea22c10287315d1f3c0d4"],["E:/qinhao/hexo/public/archives/2020/07/index.html","cd9944bc67be5f2c9de7f4b2c0baa051"],["E:/qinhao/hexo/public/archives/2020/08/index.html","2272fb958cbffe8a08fc14a2720add17"],["E:/qinhao/hexo/public/archives/2020/10/index.html","021de969814f775213279d1605c232ea"],["E:/qinhao/hexo/public/archives/2020/11/index.html","3df031f8580e57677a3aab97516755df"],["E:/qinhao/hexo/public/archives/2020/index.html","4ab2abe7efa7ad7c7196b9d408e035a9"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","895df5994ddc3fa3ced8c0a6f18e42fc"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","6bae6682a774af7732b77adef4f8f8ca"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","0698cbda216dbd1c9a3f6e6962922d94"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","4b015dcf7540223c1cd682202c993e8b"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","9aa500bc5ae20800b1ede97acb94990d"],["E:/qinhao/hexo/public/archives/2021/03/index.html","04ffac5a1be36bbb783a0280a91bf151"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","20aaaa47caa2cd0a70d4ab22f851303d"],["E:/qinhao/hexo/public/archives/2021/04/index.html","23ede05369f84f8d25a3e8690f3e93a2"],["E:/qinhao/hexo/public/archives/2021/05/index.html","d5a07c5f2dea85e6d87657563da219c0"],["E:/qinhao/hexo/public/archives/2021/06/index.html","b9a4bb54b5e819254e5285161e3013ec"],["E:/qinhao/hexo/public/archives/2021/07/index.html","ea3dbf00a1fac84f23dc59d15e272ae4"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","5c3a14f7499f2d875d701b0b2927b764"],["E:/qinhao/hexo/public/archives/2021/08/index.html","7a3e9cb6e46ffd5b4a8209455225654d"],["E:/qinhao/hexo/public/archives/2021/09/index.html","4c19cc7e86fe86316e2c676c94c30810"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","95f3b4056009afcc3909e1812cbde6c0"],["E:/qinhao/hexo/public/archives/2021/index.html","db30cc7a905fe688adcbd6e8e437da59"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","7f4492c2bdf3e3ea0b2cb19318667177"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","e6fa37041e41e88cfab876aa1e33346c"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","2b68cc588dda85f7bd34bc5de02f5eef"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","9302074eb8dd8c6e40888a75a78b9457"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","95151e2b34245850d96fed2aacfb6dfb"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","6d13e2f47b4a767ea38a1f3355c38436"],["E:/qinhao/hexo/public/archives/index.html","63328241f36d896e613d620497bf1e5f"],["E:/qinhao/hexo/public/archives/page/10/index.html","2097d5299b98ff669be455140b1c4b9b"],["E:/qinhao/hexo/public/archives/page/11/index.html","99ee09ffd89eca5383e4a6141814cc42"],["E:/qinhao/hexo/public/archives/page/12/index.html","99ee09ffd89eca5383e4a6141814cc42"],["E:/qinhao/hexo/public/archives/page/2/index.html","63328241f36d896e613d620497bf1e5f"],["E:/qinhao/hexo/public/archives/page/3/index.html","63328241f36d896e613d620497bf1e5f"],["E:/qinhao/hexo/public/archives/page/4/index.html","63328241f36d896e613d620497bf1e5f"],["E:/qinhao/hexo/public/archives/page/5/index.html","2097d5299b98ff669be455140b1c4b9b"],["E:/qinhao/hexo/public/archives/page/6/index.html","2097d5299b98ff669be455140b1c4b9b"],["E:/qinhao/hexo/public/archives/page/7/index.html","2097d5299b98ff669be455140b1c4b9b"],["E:/qinhao/hexo/public/archives/page/8/index.html","2097d5299b98ff669be455140b1c4b9b"],["E:/qinhao/hexo/public/archives/page/9/index.html","2097d5299b98ff669be455140b1c4b9b"],["E:/qinhao/hexo/public/artitalk/index.html","a14caac391191e103e1554dec222fa6c"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","e44c046161608244b5e049ecfe78281b"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","b55f9efa04eaff188bdcbf9bec6f7e9c"],["E:/qinhao/hexo/public/categories/Java/index.html","25bc1a50bdb8dd4720bb18c773c7e6b0"],["E:/qinhao/hexo/public/categories/Linux/index.html","5a89c4a9b7263afe2e013eb2462984a4"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","9107c02750d77ec27f95ea3cbb0437b0"],["E:/qinhao/hexo/public/categories/Python/index.html","c044d096444dae21041d24d58ea90d77"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","c822cd88d411c1e32771673889e04f16"],["E:/qinhao/hexo/public/categories/交换机/index.html","7283ba219cbb7d61449d1c6588733023"],["E:/qinhao/hexo/public/categories/前端学习/index.html","add3e8c3124789fb24081cfe99b54337"],["E:/qinhao/hexo/public/categories/华为认证/index.html","da8126df1633d1a7d18e223f88f7e4b2"],["E:/qinhao/hexo/public/categories/小技巧/index.html","0ef3f768f55bf6b53286a246fd87797f"],["E:/qinhao/hexo/public/categories/数据库/index.html","d11bf7f7ea402c3e4b430d1ba3ae31cb"],["E:/qinhao/hexo/public/categories/数据结构/index.html","90a6c0adb66456b0b037f1dc85c993fa"],["E:/qinhao/hexo/public/categories/服务器/index.html","66fb4799f0a88b5bf8f391368160edb9"],["E:/qinhao/hexo/public/categories/算法基础/index.html","df1e0783d2cca63b82b0f63f704a04e7"],["E:/qinhao/hexo/public/categories/网络安全/index.html","00db8d03eb4c0acff7fbf0010bbc1578"],["E:/qinhao/hexo/public/categories/股票知识/index.html","0d2753bcd04bd15c07e2eed132d1fe2a"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","0263370e569d923086a2c193b63be1ad"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","2d4dcd09fe34167512d81f44d78aa7bf"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","0a34c05143acab5cde1d1ec83ab7bd9e"],["E:/qinhao/hexo/public/categories/软件破解/index.html","4b0d23469283d706fbe0bee0fbb031c9"],["E:/qinhao/hexo/public/categories/通信技术/index.html","a3179481ec342a640312a94194d337b7"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","d80e020bdc045769332fac65db8877d4"],["E:/qinhao/hexo/public/category/index.html","990e98f0e70b35e9115267f140588319"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","95d1e00f8a06a3711ba4ebfe1af2de32"],["E:/qinhao/hexo/public/index.html","676ad53a63b6656d8ad27c07ccfeb93c"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","86ac34668110e3b00d3c252e5ec47d93"],["E:/qinhao/hexo/public/page/10/index.html","1c6d892d2b4efa9e06c21f9585303725"],["E:/qinhao/hexo/public/page/11/index.html","417ef2f28d89f897f0ec81fb0910067d"],["E:/qinhao/hexo/public/page/12/index.html","1c4f7fcf271ef574b104aa298b94e47f"],["E:/qinhao/hexo/public/page/2/index.html","617f669621d08c696e7568eccf635cac"],["E:/qinhao/hexo/public/page/3/index.html","04e94f6e0e1c314d7099548d0ae9dbea"],["E:/qinhao/hexo/public/page/4/index.html","764fbe2844f249f8c66f1410e44c9a55"],["E:/qinhao/hexo/public/page/5/index.html","7bab531d916a6083273322242868f90a"],["E:/qinhao/hexo/public/page/6/index.html","139aaa9bf05a5e70325b9bac86855d64"],["E:/qinhao/hexo/public/page/7/index.html","1e23c72f6fd9e6775544b6bdb2f7624e"],["E:/qinhao/hexo/public/page/8/index.html","8ee4f9e4ef467beedd68e1a88f0063ca"],["E:/qinhao/hexo/public/page/9/index.html","ae19ab3ce123c758ced700c5dcb38290"],["E:/qinhao/hexo/public/sw-register.js","12070114ec13690c15f87860e6929085"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","f44fccb6607452859fcbcda14ffc704c"]];
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







