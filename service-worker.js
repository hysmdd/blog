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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","9ba1d56fc0dffe3a574b94ceb868aaae"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","533904a823c5818e1e3a057fa48d87ab"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","ec3c518de61ad8cd88f21e2694b92ce7"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","0fc31c6333a066e70e2853a380566a77"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","8017e9661a2d06ae2e2bd135bc72bb91"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","592096c0e649027a38bf63cb72b3a0a0"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","2392ffd95fa407880afd6d65f2373732"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","fe8c3e33f1f08939d6fd9a812f984504"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","8cb401a2d41062a39b0496a6b70292e1"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","b2506787dd250abfdda6e41afe7ff9fc"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","bbf37fbd67c06bccd3425677aee390ec"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","dda4f643ff30c1dfc685ed3acc0cc68e"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","f2ad968e9c93c9a6fe0cb47d00af441a"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","30c970475ace35730ea57a9c18168592"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","206484bc867f1b7c40ea354ffed43823"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","9414fa41f214e37d77127ca1b2139e9c"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","12b8cd1bb02598a30d64d45968a10092"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","13a531c31185ef9f57bce598fb9b4bae"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","e04a218ef9eeeb9f286c17bf0b992739"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","21ef25a3331ea71d12bffde6a284beef"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","b7de0544e60d5789676a582dd6343185"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e3afade8726a4011801d26770c68a837"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","0870966244ee2aa5a2bbf2918777713a"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","cb3d4ed645221f2359dff46f2b59ade9"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","7d6a71406a851e7e934b32946f9f6cf7"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","c64d2895c0e583c94f1e9bf92335eaf3"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","af25a31937c79fc0ad1c2280a4251b18"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","93a36b243b3646fdf4d519cfdc5f1837"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","6a3103cf64c82e354f53c55b5f9f8002"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","e5703bd8d20466885042e924fbf380d0"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","0b263212e0dc5037690d8840e4547ec3"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","996a48cf7f20309a31318501484ad7b6"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","8eef40b015ad5aa560b1b69baa871901"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","c3435c61cab66a64c998cbb00a3b5088"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","ff92546dfca98bf41a2d201f947c960c"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","bcab996e4180509137594880e5e11a31"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","865ff426ea532b5fde7ddec60c126013"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","1acbc6640d86399947ce67c82d9bb0ee"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","d5ae9cb424150536d5462888ec4a6330"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","a9b701d66e01ae137a24446e19944d5b"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","4f041634496d6a6eeaf9f3aebacffbb5"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","5ecec491afe7c7427d204cb245cd5077"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","bf4e54fec21404eeffe2a39275b18033"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","b6719ef2ad6776debadf20404b86c40e"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","c4dd33c43f966046ef66f95e0721a627"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","1fd20c7a036a02bdaed40d43b3d798d5"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","bb667ba7e6ad1687d4017f19026019d7"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","6ff93eb770beaa15b0277c6a2fa4e623"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","b8d7521fec3de40e98020b80cef8bba6"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","3c86d25d95ee5d3b4d0436e4426701f7"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","1e380e9acd45391507c89c9514572d54"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","fb87bc7dc4b588c9efe1a3394de0b12e"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","a5e9cbc620a54868ecb48ccdb01fcb8c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","99dd5210ff29306e70adf1b1d9f47845"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","9e0c7dc9c12297256289f2fa3c693c6c"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","2bd40abf173cd271070ba47304644050"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","3fc8599f6d12dbae84e094938cfdc138"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","badcbd660434bc3def3bae44576fa972"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","e558e099dffcb753403816363006abd3"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","f454dce54733322cd2485d112c6f811f"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","70e9dd36e113ece5f435a3f18fceccde"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","e71080064d00b89464a4c2a2d27246e6"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","bd2c9a2cc96f1fead66c2e8a653ff026"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","6beb5fc3c13bec9697ceebe3867695fb"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","24c53f4d08def11054450aae48681860"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","37afc00fe4a94f62017e67a3a3ebae72"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","12a370cad5788b07af56f52dbf80316f"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","d4edbc4a51c649a99d98644d791ecc3c"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","3fb4a6ad25cefb97bc0cf684b695ea94"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","950e0f6a4622d55ad9ab622c0e140ad7"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","a0d321720c35d373c0010399bcb2f899"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","c40804478b73e3cacea05feed113e84c"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","2d7b4623bd2eb63b73a7ccfa1c10c085"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","21114ab9929ff5cf8e254889e832184c"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","11a9335676197d94b6036e8039875304"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","2e099d3d4e738e8f2ebe4cd470772c2d"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","8d457dadb357141534e2f7b8c0603e74"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","046e6169a4b7da3c5c100145fd35fcf9"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","cb34ae0a9178b2153a897ab0bf9d0596"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","49ffb636210a87dac3682e339f4cc7f5"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","32659dd65f5228fd8c61e0b8af7b8e39"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","4ffade415938909e2b3f2ccc37ea9350"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","bbc18e8396650112e3594115c93a0898"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","bb0d4ea6b21caf6085a4f16bfca04f23"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","f499cd50591e08ae0a62280fee6f182b"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","63093b649dc147d843ba88820fb083a2"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","7c5c2decfcd8985fdbad147fc9c774e0"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","dafaf90fe1ea66c7b9120dd6d980d9ba"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","8e99373d09871eb2d77a85c962d90d9c"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","b25ab2a6b2ba477dae9888014aa13616"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","cd66a5fa0154815955721554b0309eb1"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","ca8fb4ef651d7a92a30589ccf5b3c1d0"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","85f2e293ef334dccd4113c4f63db9037"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","7b64fa6cfdddec7a67bbab5d832e1850"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","84a8ff1a9404bd8521b3ce9e9dbcad7b"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","fed86a883bfe912b6f4b593d10186b17"],["E:/qinhao/hexo/public/2021/08/03/dataStructure-3/index.html","2962cdfe2bc6d724cd7486514fb91e36"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","3b6afa90405c3d50bd8bff0384bd28e5"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","5e20e6efa652b8f1ce9f198ec4de2780"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","2de65df70487ed3d20b44ccd45b0c8d7"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","7db93c63bd41b80a7627c623870db06f"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","56cbd46febe7833c142156d51d32ff2a"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","b68fac1dca2ad04af33a285285a9b5e0"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","2eb176e6ee1f2937293c77483e6ebd82"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","12cae48db4092ecdf6011a92d96172a0"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","dc3a098211e02bb8cac0080b9dd15fdb"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","b355535dd1f1a292d45e5f6df721b9a5"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","c66e31ea2498363df9a285b516d60fda"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","c7d60be3382e25828c93bf0aa6efe31f"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","be2f5b2250f35cb6aa4dbf20b956749e"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","7d310467d0df02e1d0df3a13eff4b3bb"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","8c208064969509d1e5df0c1b7f642ff6"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","8874bbeef2dfe3f822c95c0480526136"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","b785810195b7aaf06d512cdfde0eff0d"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","c1868d4cdf579434280efef75db7e793"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","28398818b3fca0a1b1a0fc06b86f8b96"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","1dbf3282f2cd2540f43ec9b2419b3591"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","5d127d006a7b69863996dd6f8ff92ef5"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","fbcc3e52236ce0b3bc359519aff41054"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","49c9e1dbdfdb29b88792147d127c8621"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","e459717697d46c5d6a97f9dba845b5bb"],["E:/qinhao/hexo/public/ByteDanceVerify.html","35c926b5242676fc5e219e2867d949e6"],["E:/qinhao/hexo/public/Valine.js","46dbc7dfe465faa0f6086c7ddb4e9849"],["E:/qinhao/hexo/public/about/index.html","d1fc03941510013002276b08196eccdd"],["E:/qinhao/hexo/public/archives/2020/01/index.html","3a140d16c55c971eb9bde21ee98f1f8d"],["E:/qinhao/hexo/public/archives/2020/02/index.html","4106c700e6db0a34c5d63986144988dd"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","2200259ec1b43398daf7652ee559b95f"],["E:/qinhao/hexo/public/archives/2020/03/index.html","a463b32606929f154714ec7d89279cb8"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","00d6a25eddeba0ce1526959e631eded3"],["E:/qinhao/hexo/public/archives/2020/04/index.html","dda4ca77339ca00155f1b587e9f57459"],["E:/qinhao/hexo/public/archives/2020/05/index.html","3d4d50a4bdbe5bbc9b37dc8e010d61b1"],["E:/qinhao/hexo/public/archives/2020/06/index.html","0167b62ba40a114fb2aa060d9f5c58fd"],["E:/qinhao/hexo/public/archives/2020/07/index.html","e3773e311350e28b775fb1c1dd8f7238"],["E:/qinhao/hexo/public/archives/2020/08/index.html","80912caa5bb4183750fa4c87fae2febc"],["E:/qinhao/hexo/public/archives/2020/10/index.html","7d16c2a474adf5d05c0c340a9bc012b6"],["E:/qinhao/hexo/public/archives/2020/11/index.html","a213684095ef9b46af25bb662aaf2eda"],["E:/qinhao/hexo/public/archives/2020/index.html","2c3486d5355b2807dab5a64cdc615771"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","ead8e491bf5a3434d8a9e6276f2eff6e"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","07e5902f32586e5a5d692aa5357dd3ea"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","8a6f1d0780c80131f4cff8a0c1127dcb"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","06ba7646653f740656e951b5e501b945"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","24cac59d2a57687ecc582913b0d191dc"],["E:/qinhao/hexo/public/archives/2021/03/index.html","4a8b565b6a21dcd755b7fc117e469829"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","388c9865cf7b7954ccdd72932c26bfb9"],["E:/qinhao/hexo/public/archives/2021/04/index.html","fa0650f68989ecbb713e709b40d7bc55"],["E:/qinhao/hexo/public/archives/2021/05/index.html","1abc807653d9b35a5c7a771fe8b7b49e"],["E:/qinhao/hexo/public/archives/2021/06/index.html","13e89f81d8bd7637ae14e28eda3c4cb1"],["E:/qinhao/hexo/public/archives/2021/07/index.html","c4b6e1bfc4df6d2a3ab61acb02c99bf4"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","56439a7bdf3cc4f0d7812d0a2d3bc5f0"],["E:/qinhao/hexo/public/archives/2021/08/index.html","d15b55696738a6eec1013d9a12cf6389"],["E:/qinhao/hexo/public/archives/2021/09/index.html","1d989b6cc1df81ce30aa955ef3a7816c"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","4d14f8c0ec50f99de9fca097a9950aeb"],["E:/qinhao/hexo/public/archives/2021/10/index.html","0dffcb55d1309c6eca71fafad40f8be6"],["E:/qinhao/hexo/public/archives/2021/index.html","d6a10b2c924ef6cd3024bf25394b48c2"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","c873ca720e3954218ffdf61e109a56af"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","44bea07d510aaf838c1582a305e35e1c"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","a81d1a602fef3c640ed03e256d1a75a0"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","b60fe4446e7bad240b1eb20730591657"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","6b265b2a4c4daf6360e8c6904f0c88eb"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","f893a44ba1e29dd364b778f98e717d8f"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","5eaae62ad29f20224965d2ca974e3be7"],["E:/qinhao/hexo/public/archives/index.html","1e8e66761bc6eff081dc00827bc95788"],["E:/qinhao/hexo/public/archives/page/10/index.html","4884199b9a73b244e62475928085770f"],["E:/qinhao/hexo/public/archives/page/11/index.html","4884199b9a73b244e62475928085770f"],["E:/qinhao/hexo/public/archives/page/12/index.html","4884199b9a73b244e62475928085770f"],["E:/qinhao/hexo/public/archives/page/13/index.html","4a3bbc6c27ee447e70bcff62565be6ea"],["E:/qinhao/hexo/public/archives/page/2/index.html","1e8e66761bc6eff081dc00827bc95788"],["E:/qinhao/hexo/public/archives/page/3/index.html","1e8e66761bc6eff081dc00827bc95788"],["E:/qinhao/hexo/public/archives/page/4/index.html","1e8e66761bc6eff081dc00827bc95788"],["E:/qinhao/hexo/public/archives/page/5/index.html","d0ac483031445ac98533d6c0bc01d6ab"],["E:/qinhao/hexo/public/archives/page/6/index.html","d0ac483031445ac98533d6c0bc01d6ab"],["E:/qinhao/hexo/public/archives/page/7/index.html","d0ac483031445ac98533d6c0bc01d6ab"],["E:/qinhao/hexo/public/archives/page/8/index.html","d0ac483031445ac98533d6c0bc01d6ab"],["E:/qinhao/hexo/public/archives/page/9/index.html","4884199b9a73b244e62475928085770f"],["E:/qinhao/hexo/public/artitalk/index.html","4cc5eb1fa0a55099cbc65baa10249574"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","ac929524fff238411253d7865c402eda"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","e72b5d0de3beef73cf622f63584f6bef"],["E:/qinhao/hexo/public/categories/Java/index.html","9864c512d61f2e1f5cebaf9b80307226"],["E:/qinhao/hexo/public/categories/Linux/index.html","11ff99fcc1339718e645b9a78ff8f33d"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","462d7b904b417e25fe061d15ab6c1bbb"],["E:/qinhao/hexo/public/categories/Python/index.html","8c61e3f527c25fa2d0355ce10c8fe552"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","fbf9183e0e54d343041a9db6dc2cedb3"],["E:/qinhao/hexo/public/categories/交换机/index.html","5bc99fb98b3d60c3e224a91b34c77d22"],["E:/qinhao/hexo/public/categories/前端学习/index.html","5467e3ad5c311fb7e83d6509957f7b6c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","d03a7e47dfb3fac64e781c685eafbb45"],["E:/qinhao/hexo/public/categories/小技巧/index.html","85f6468f518b690e0ae8b2365faf0a8d"],["E:/qinhao/hexo/public/categories/操作系统/index.html","c515b500f640a87baa9e859c4a19f277"],["E:/qinhao/hexo/public/categories/数据库/index.html","d94a87981266a402d4d69862fdc33513"],["E:/qinhao/hexo/public/categories/数据结构/index.html","a517222aa3c6eb42e5435bd5e762540f"],["E:/qinhao/hexo/public/categories/服务器/index.html","36ffe6e6919a842670a7baebc5a34361"],["E:/qinhao/hexo/public/categories/算法基础/index.html","2146f1538729feb54701f7a6f63ce27b"],["E:/qinhao/hexo/public/categories/网络安全/index.html","d5e70f73c3e7abe962020d61c40e1802"],["E:/qinhao/hexo/public/categories/股票知识/index.html","473a22256917faac33f30452e0884edc"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","70723bfec998729fa7d89ddf5d72cc5d"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","6c79b7b6065c32f138f79a7e2860ad53"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","f2929ef479bf084bafb1021947437b33"],["E:/qinhao/hexo/public/categories/软件破解/index.html","0868607ba8ca9938b1fd26e6f1922b0b"],["E:/qinhao/hexo/public/categories/通信技术/index.html","0ee9cddc22841204e1951c031510f4eb"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","ef30e430b5a17f231fe2e25c8d8bfc7c"],["E:/qinhao/hexo/public/category/index.html","c0f7aeba2bc84d3babe94e7f9dd6c4fd"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","9a3517f4e180b2d175d1ef211b91de61"],["E:/qinhao/hexo/public/index.html","d83791c88b7e3c11a947128e05101daa"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","961a7959054724ff31ac3fe419aec1a8"],["E:/qinhao/hexo/public/page/10/index.html","16a64fd03af5634845030a1799d6e4eb"],["E:/qinhao/hexo/public/page/11/index.html","85a28f961c2c306fc2634f2a0dfffdca"],["E:/qinhao/hexo/public/page/12/index.html","225e9c95aa491d28ee25ba83edb2ada5"],["E:/qinhao/hexo/public/page/13/index.html","7ff769f927dfc3e91a60855c23c54fa6"],["E:/qinhao/hexo/public/page/2/index.html","8b276d8690410ce7c4f482bfc3926c07"],["E:/qinhao/hexo/public/page/3/index.html","ec2bb296c93c847cc20d65653bb0cf51"],["E:/qinhao/hexo/public/page/4/index.html","150c267f11283175bb65308b336804c5"],["E:/qinhao/hexo/public/page/5/index.html","62423b6160a852c8c77a66eed4733739"],["E:/qinhao/hexo/public/page/6/index.html","3ba94d0d7d8ae10e7e6ed1f8198e1afe"],["E:/qinhao/hexo/public/page/7/index.html","dbca5311d7ef2300b6d9587e0c93bd6a"],["E:/qinhao/hexo/public/page/8/index.html","ffa4acaa1b39a1a4b2295918b929f7cd"],["E:/qinhao/hexo/public/page/9/index.html","2e60acad9d08005e741a1a4f5408b255"],["E:/qinhao/hexo/public/sw-register.js","529657e5db071c44d363b05e767d1eaa"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","30f772b1eaf24dea1782924020eaac24"]];
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







