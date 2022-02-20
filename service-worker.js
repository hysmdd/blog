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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","6c753c260f849903549f8f659541a5cc"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","e99d92390ba0fef90ee230e028dec6cf"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","74db895e7404bf7a205ea6d06ec397db"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","26520e131d04f5423ecd1f6129bae70e"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","51f910b01ff70324b16b8496c787002d"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","def1edc2927ab546670ac9e90473fb94"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","f72e10315f12c547e13c4393243a6b2f"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a6948463c839cc063988c9b55c89c7c1"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e625345dad313a02d677a5051fd27842"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","9ce841bd73b4fe72edef9ab49e38b4cd"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","32114d898a0bc068575750f82f161273"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","cab3f6bd593c7831bf6a8bb7d0e1da3e"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","860b0b7bdfa66fc4b5a1d7f4928659ec"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","854b10025480f099c7f0aae471619aa6"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","6da8e5f1ccf202a3045f7d60dd94d4ae"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","9d7023cf02372a62d198535fda86cdcb"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","0d9ab6edea8d122d20ff921286787d9a"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","7a255c6adfe474405f34b8c05aa08ef0"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","2933e26117eba84e33184eddae48691d"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","875f82aa7af011059e70046686fe6e9b"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","212ffa9e0de3ef4e9f5da568bccf6cfd"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d2ab0e00458d20f53d9fa5fcdd05e0f2"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","82699a20616aba50adbf83bd271c98c6"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","54d79b9b8f6d3f3a5f5d2901a6c6f650"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","ff0e2f1f557ecf73540bae2355a76239"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","c2120974b2b00c530523b196609bec95"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","8420baa24e2277db7413c64ae921d8e4"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","cfcf5c9ce7d04c86aa8cf726af30c6c3"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","019ce2ca1d32e411cda26e17ab311a83"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","cad7e3d4619c03a68d6e4f6cf71957ee"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","da14a47552556a0c49a5f85e5b0bc2b3"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","14c0fd53dc1970a46a9a82d28e1f569d"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","00c4379700c0f7359bb46533db660eef"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","5628458f4718261829bc9015890cc688"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","0235d8389b3633946970d28af17ed57d"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","fe1f9e8d6afacec0f7edeb9ae4db5735"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","59e8544340c50b463e2d3f6c4ea15ce0"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","895fd270069d5f8df35d2c4a5d2d0721"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","47aa9b2166e5d8b509c6f3beaa70c6a0"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","7c6378276159269e50d29ae7d70e02d0"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","6e69d0830eef84bdb6421a2c30105685"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","5c7340be46ea2da7157a30825cdb255c"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","4b2a8ec893d2024e8bc3b26546594ca9"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","4814661706c1becdcace68819d4d9a9e"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","eb84d3ae1eb4bf09ed59a8eb2f65b68e"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","68b8733dd28f479f7dbad24c2b0002e8"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","856fef75e9cfcb8a74f5f19e5210b206"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","00478152257d00af9840e220f582e789"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","dc2fcdbf119b5367d85414884ad7df02"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","b70fb299c6ed54c5326f8b3628a00cdb"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","44d952d24b84927a002e8eb98e7c4b8f"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","1b234e2dcbc35ae09fec3137522523d9"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a1f2f2c1cf620793ad520b92b95deb6c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","c15f84f3aa034499b3dcfbadc25cb790"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","79b525d028321d30754329617db06ba1"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","6b94d56107eeb2c8f6624854ca694f95"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","0fd9f42817bd7ffff2237ed6f84dee1e"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","79cab5aa22b99eb898fdb7e0bb96af03"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","935372bdfadd0a19acaaf58a38fcf31f"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","10d3e831038693fdff078ea98e89805e"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","a67a50fc1c8143b70022b273ef138513"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","e4641f523e9968db3504fd9dc844ef38"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","8171058f39933298febfcee3e8b7d34e"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","4ee4c43ce222b010af072f0f79e9a996"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","ce107d49042960720028ad8adbce938a"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","0908ec513cd942d31f885a1f3b8a914b"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","8e20db33879f78d955ddac94aceb42a6"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","0350eb22da54a6a7321718a8549da8a1"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","82d5a82686cfc1dc14bf4e9887f0498e"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","237b9de1f5094aff5efeef9903ff338c"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","434c2aeec78a85ec288861e70c979b6e"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","3b832a3f551c8d2031c3dc000bc3bea0"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","84a03d37b5b525bb3768dcdc15be701a"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","acb977b33e95835597a2a57818e01b78"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","50ac7fc55f66c075c1d4c2afb43375cd"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","16997c78292f3fe6b3f7e5259cbdd2cb"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","e626f2dfe5c724a1d0355f8c254e1640"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","4c495a3a90387268cab36b6c645697d5"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","600b8e0c2c46a71f3f07e8111874256f"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","3a7272a5c29df36e1c9c09c7dc1e173e"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","452c7139f1f14edb32930d76d7d938c7"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","9dd44af7e0ed56e78d866c643c772153"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","411ed75e3e5ce33c69fc35f92049bb79"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","220af712e28b38b272b8cdf927540939"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","2d25111549829dd24490beaa445851af"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","ff54606adec0954d81779a11dba3507f"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","aaea0f6f6beccc2f7ec26f9fb3ff0113"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","c2ec49c936d7bd25a091d6c195f25f3b"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","842c62b16cf77293c3173cdd7eb6815a"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","cad4f81af7ceea78f2a5ce3d42246aff"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","8b61e609d2e0c2e981844d2821d6bac4"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","b9237006cba866e82315138d909b772b"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","38a3014ef1bb309ae596fd9f672dd923"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","2dbfe14193f9f2b311e1f478c3c56ccf"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","5c4f3363940ee5c25f0f14f4652974be"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","6d2ec4a915ba547d00bcecbd3bb945ed"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","2a0e027250363e69fb4a21b974103225"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","503df98196cbba2dd9af4932ca7e1d2d"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","e82ec85dbedc9117fb15552b635f80d6"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","175c0917d09593b9d85ae916d532c8bf"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","8c530f30df6af152b1bfc271af7033bd"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","037b893c11798f885b96e9cd356249d8"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","bf8e83b7a5fb824a21bfe6f25b445638"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","5eca78eb75bc044294af100e115a9e5c"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","3f5ef1d8909001d04e5c57e904f3919e"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","339cd11a915fa85db3b913ffa1306217"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","84185bd38bace16905e83c00c4ba7b2a"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","a3800c38f7b4716de06a9a6211f16402"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","68592253232412d0875cd8d08f088b1a"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","2e40d3f074e28c7354e82d6db200174f"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","472c7c26c5e575eaf361393eac70a4f0"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","269a037289be3e22395c840f8b5460ab"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","86639fb0c38a7e58ec4a3c7df4f11325"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","d355e0e2809c1f8a227f912a8fe83223"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","3d0e499bd19e7062146fbd0b19d568e0"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","695ad1afbd214587a28f7ac4961d5c24"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","3aaddbc84d8367b68a4ee94292372a81"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","81d701010b48e0221cc3ba8459b89246"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","4e523060c5c5a840551afe8f1f589949"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","603efd87ef72553eb46815f4391a236e"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","d8e926d2108d1747b0dbf81724cf3289"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","e44b05dd94dee089f708515942ad7b57"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","b2b1db873181e2c0f951db9a93e03c0b"],["E:/qinhao/hexo/public/ByteDanceVerify.html","f3194a4b85320cceab596e80aa738a6d"],["E:/qinhao/hexo/public/about/index.html","87208e6c0c5deaf64c8a24faaef1090c"],["E:/qinhao/hexo/public/archives/2020/01/index.html","4fb92cb6adb7ea220621ad6ec005f82f"],["E:/qinhao/hexo/public/archives/2020/02/index.html","910d1cb6b7524f71af03a132c11cb3e0"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","947a9e2e5e89b140d12a55677c708841"],["E:/qinhao/hexo/public/archives/2020/03/index.html","02572c675166fce8f2adfdc61f5e64d1"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","37146cebe693786e9218b952764471f5"],["E:/qinhao/hexo/public/archives/2020/04/index.html","8764938f564f80731a3fd84b7e46e36d"],["E:/qinhao/hexo/public/archives/2020/05/index.html","48fa159cba604a9b85538772e4dc298d"],["E:/qinhao/hexo/public/archives/2020/06/index.html","05fd9ebc49d0aaa9568d9841f7d35f7a"],["E:/qinhao/hexo/public/archives/2020/07/index.html","95e140e20c9c497060f163c9dca55d22"],["E:/qinhao/hexo/public/archives/2020/08/index.html","5afc61196192e8531ea86945c6178100"],["E:/qinhao/hexo/public/archives/2020/10/index.html","96940a6116eeeaefb6b9e9991e2c2a3d"],["E:/qinhao/hexo/public/archives/2020/11/index.html","d9588009f552d2cf48083e632abef2ae"],["E:/qinhao/hexo/public/archives/2020/index.html","dce02e99c91b31b8c08e8b7af82a764d"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","3292d011be0a5bb8606ce5699a31b942"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","06a8f66bf23a60c033e238e54ee661bd"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","2e2453f914fd1efd416853119810c876"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","fbda585b87e254e6205e362cae2f1de5"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","e1c49ff60eb528579cedff526d79c9e1"],["E:/qinhao/hexo/public/archives/2021/03/index.html","ac810b9a844a719a1364ad931c9f26e6"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","6832b12145245e5f4a3b0794835615c0"],["E:/qinhao/hexo/public/archives/2021/04/index.html","d1b4e891f05e7e0d117f3926b4ededfa"],["E:/qinhao/hexo/public/archives/2021/05/index.html","75eab08a14a039e57e2307c946477823"],["E:/qinhao/hexo/public/archives/2021/06/index.html","c71afc673336a3e95b8e6fd36f26f95f"],["E:/qinhao/hexo/public/archives/2021/07/index.html","bfad6350080de8d0773b7d2838b97932"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","9433d82eed5ad2ca96238118b3ba4a53"],["E:/qinhao/hexo/public/archives/2021/08/index.html","6bed290ffc78d644f0bfd119f754d492"],["E:/qinhao/hexo/public/archives/2021/09/index.html","737a7272cda715c63bdfad30485c9441"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","60f0305fc5ea8021bbc70fb1ebe9ac01"],["E:/qinhao/hexo/public/archives/2021/10/index.html","cfc2ef73cb16b09239e1cc5ed2ab6058"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","e0685884825a4349b8cbbbd39bd99fa4"],["E:/qinhao/hexo/public/archives/2021/index.html","c9ec0b5d62f3178870c6fcef5ae9dc7a"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","a80fb6f26acaeb49d63386326201c97e"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","854c81425ab577eabcfdf28d6a44a55a"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","ca2337857857207a293178de29e1ac7d"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","b27549983e69f6bc37c846d28ea38319"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","beaf4e124635a9ecda38ca3b6f801ed5"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","3b1754ff191a6de1a80435a85a345a98"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","ac788541f8cc36ccc05d490502e64d89"],["E:/qinhao/hexo/public/archives/index.html","8bdcd107f033b893524236304b46df1d"],["E:/qinhao/hexo/public/archives/page/10/index.html","d29f0a4c8ed792e26a10fc9130a80ebe"],["E:/qinhao/hexo/public/archives/page/11/index.html","d29f0a4c8ed792e26a10fc9130a80ebe"],["E:/qinhao/hexo/public/archives/page/12/index.html","06b7d30704ce88a11655a52e34453d41"],["E:/qinhao/hexo/public/archives/page/13/index.html","06b7d30704ce88a11655a52e34453d41"],["E:/qinhao/hexo/public/archives/page/2/index.html","8bdcd107f033b893524236304b46df1d"],["E:/qinhao/hexo/public/archives/page/3/index.html","82c2fcbbe66b59202c7c8a2bc933ec43"],["E:/qinhao/hexo/public/archives/page/4/index.html","82c2fcbbe66b59202c7c8a2bc933ec43"],["E:/qinhao/hexo/public/archives/page/5/index.html","82c2fcbbe66b59202c7c8a2bc933ec43"],["E:/qinhao/hexo/public/archives/page/6/index.html","82c2fcbbe66b59202c7c8a2bc933ec43"],["E:/qinhao/hexo/public/archives/page/7/index.html","82c2fcbbe66b59202c7c8a2bc933ec43"],["E:/qinhao/hexo/public/archives/page/8/index.html","d29f0a4c8ed792e26a10fc9130a80ebe"],["E:/qinhao/hexo/public/archives/page/9/index.html","d29f0a4c8ed792e26a10fc9130a80ebe"],["E:/qinhao/hexo/public/artitalk/index.html","95ead26dd0db6cb05f0c0f079ffa3da2"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","0b03bf8fcbb05018e3ab8a3eef0261fd"],["E:/qinhao/hexo/public/categories/C语言/index.html","6a5ca2875bc86c1320b56d4f3da9acfb"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","22b279bcb0b389992f61b4bcfa4cbf80"],["E:/qinhao/hexo/public/categories/Java/index.html","1bb629e035541bdde92e5dc2a42cda24"],["E:/qinhao/hexo/public/categories/Linux/index.html","9cbc196cceb6977fadd9b2b3f2813cf6"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","5e67824bd73430897a5aefcda35492c6"],["E:/qinhao/hexo/public/categories/Python/index.html","b6a929876018e7a2770c88b4ead86976"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","56deabfc60f60f3dd581a217de859d39"],["E:/qinhao/hexo/public/categories/交换机/index.html","c1078645e23435355ad15d79c13f2c61"],["E:/qinhao/hexo/public/categories/前端学习/index.html","49476bd285d38ed5d62784ab5a1740aa"],["E:/qinhao/hexo/public/categories/华为认证/index.html","3676f2d3d89fc4ddbb25cd414eba3411"],["E:/qinhao/hexo/public/categories/小技巧/index.html","44c12b180c3c2fdf66deba51e32051bc"],["E:/qinhao/hexo/public/categories/操作系统/index.html","304ca8a935f1cf8aef6c074e8cf262e2"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","30b4207aaccc2070fe7b48c5fa750e7a"],["E:/qinhao/hexo/public/categories/数据库/index.html","5d8ab9c573432632d334e0d9ec7482c0"],["E:/qinhao/hexo/public/categories/数据结构/index.html","df6b53450136e129afb6b2570c8fbc49"],["E:/qinhao/hexo/public/categories/服务器/index.html","61fc0607ab56ea73493f02d7d2daf626"],["E:/qinhao/hexo/public/categories/算法基础/index.html","be1954789237151d74ae4e45327b33f7"],["E:/qinhao/hexo/public/categories/网络安全/index.html","3551e811df1a8c17ae5eeeae2a4eb023"],["E:/qinhao/hexo/public/categories/股票知识/index.html","857b7eeb69604710527ccaa10b124a51"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","b5a428adf673774abd9ffebdf1fb560b"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","f6b1ac5a5c6f27be8a28166c0da2ebc8"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","36c41f9f285e53a3c11870cef73f4cf6"],["E:/qinhao/hexo/public/categories/软件破解/index.html","7982fafb32fb0deaddacee1042b36a43"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d0e22cb5fd5a7058953a312b3642369b"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","7b7ddb8925c9fa639cb4e5b33966220b"],["E:/qinhao/hexo/public/category/index.html","484f3a1ec62153a24d910c2f10b85276"],["E:/qinhao/hexo/public/cinemas/index.html","89cf4c3804a39527bc1365306b694560"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","cbd698d046bc27e0586696bfcc6d258a"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/friends/index.html","c0f089e3dc93e336a004252ba81d4059"],["E:/qinhao/hexo/public/gallery/index.html","369511a1e04ce6e9d4fb90887c0ee601"],["E:/qinhao/hexo/public/gallery/reset/index.html","32de585558c74e0b2ce42f400fff404e"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","0c0a402c860236b8c4b4da6ddf8b864f"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","f33b7e3aceb9333ba262c01a6802d435"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","63961678ccc4d6eb2a35dd102b2e0404"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/movies/index.html","b2e9bc3a07793d948518b91a43f3a0ad"],["E:/qinhao/hexo/public/mylist/index.html","88029f9199ec24195f937ed130a6c3bd"],["E:/qinhao/hexo/public/myphotos/index.html","37b538c68afc8dc68563e43935db824b"],["E:/qinhao/hexo/public/page/10/index.html","88813266f3a65659223bbd6fd85fb725"],["E:/qinhao/hexo/public/page/11/index.html","2c14895e8a33e4283cb96d12fa1315e2"],["E:/qinhao/hexo/public/page/12/index.html","68a294a21bb37344b9322f9093f1e810"],["E:/qinhao/hexo/public/page/13/index.html","f5db7c2718503b492d7a157368727d2d"],["E:/qinhao/hexo/public/page/2/index.html","97beae279e495526dada292d96a1bc88"],["E:/qinhao/hexo/public/page/3/index.html","000684b4802a85c97e5e0b2e7859f506"],["E:/qinhao/hexo/public/page/4/index.html","c30e44991fa0d0eccc6e195d9a7ee63d"],["E:/qinhao/hexo/public/page/5/index.html","31576450290594535420f3856dbc8f40"],["E:/qinhao/hexo/public/page/6/index.html","5232e9be316727d11f8db569b02af7fe"],["E:/qinhao/hexo/public/page/7/index.html","3b06e13b4f3e6e0361067c925f226c97"],["E:/qinhao/hexo/public/page/8/index.html","d96d6989f2acf2a41d5b68644abbf6c9"],["E:/qinhao/hexo/public/page/9/index.html","817b396eee731ed9e75226076ad3b1fa"],["E:/qinhao/hexo/public/sw-register.js","2d7893a5b52a80f75aa3ebadaf34814f"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","45e0950673c87dc171c0c22109194ddc"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







