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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","c36133278163afdfd9dae0b15388baa8"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","dc7f6f9114f515bc4dc6a2accb11c065"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","2f8fc08452e48525603e995f0e080ba7"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","c26367aeeb8b97976584277a5f59c8b6"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","ad27084e57352feb91da9d5cc2e4f6eb"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","a1b3d51f872466300b7fa2bca1c9e248"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","4f3f8a8b8e48be435e36dd9b399a9f43"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","688358f39df2e645c9bbc60d1282ea26"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","9d6e327341d25984628b32e4d3ff9df6"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","eaa1413739165bfc1420121766eafd2e"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","f2b599ae4601caf27b8af5331487915e"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","152a7e66e5bec79b9fe632caea060f73"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e8f25bb740a904be100630bbf1fa02f3"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d615a55000b2fbc65ca9238a4a3bd28e"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","9585b9abb25683b833b55c790edac19a"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","d9ddc85dfb7af46200a85d6b27f9bba2"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","1cc13d93136d1b755bffd496a3e6fe8b"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","6c2023327907cb09cc6c230a0b3e0f5b"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","5920d1f32d43286ade8b45da05fa7c5f"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","db42584e44ee5c011b02111e21a8c9ba"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","28c25b504f058cee6874349b5e346668"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","fca2258437194d10b301e1183eee3643"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","5dc3b6e16b0837cca43589a5ecab633a"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","8abc6ea0a0a010f60a38f04da8d1d732"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","3158011899c2e78c05a8a7e155c529d2"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","cc5d52e4de4b72926aca3b87b1f22e88"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","06f6853f846311e010eee150cf51cedb"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","db4a8f2bdf2475f1a6042bc1f477d31c"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","184b76ee64972cf728754662e55c915b"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","40b728270bbfe2a0b7297531842264c2"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","fa247cefb326beb64d1d6658e2825262"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","6d6a23497d5ae471a5761c3e3d36c0bf"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","a5cb7cdb22a48e1164666f343d3f1bc9"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","770ed40cebbf3996935ac9b1448e8538"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","3108d7e523441a5b0a00993dfe04f8ac"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","c2972ee9d446a4fae90f6eebc6282ee7"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","cee2aca82db048d8f0da62826cfafd2b"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","12463435f9d7f68bd546d12e798ff090"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","ef2afab4c2ee36b7288d0dda6b4c8ee9"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","e8714a9b1112be12013e002d079ff72e"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","db4787dd029915ea47b51437ad81575c"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","86caacb234915d99881187ffb45d420e"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","ddd8ba9b6b47c723e78982f58b0726da"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","aca89666ca34efc5a6e8e93f7f48d891"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","a82612016817aa68eaf956d19efe5df4"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","0128a6f8fdc4a1c738e1960fda46667c"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","e72e3f54c437bcfbdf0533528fd12534"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","ca68ad1a0d84483b3880c41e787a161a"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","84f9e55590b7c16b7f1c398e02ec4b27"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","513d876cc0fed038f1767309f826a815"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","7b37f18d0e33a02433c7fe2f7a4a6166"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","71c62ac8a686ebb19b4032c916dda2e8"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","09e146fa75a68383fcd063780cc20f60"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","c65874b30cc18ec72c31ae2850c8f0c0"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","f637df1869eb0815744771f140fdea3d"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","97875290715e25a8fc0b87521df3528f"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","11ac379b152708bb3b8e6de39dc0a912"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","c14d4842ec69cc7c2b1147c5823a668d"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","9af3b9fadb71f68b335a0995b6949eae"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","dc87c23d437fdeff55cddc5923662d62"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","b7cfa9a5dac3aae89b9e07323588e912"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","b85f5a39e201c92f78b5dfaf67ec95cf"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","ac97409c3c37613991a7d9033f2fa930"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","748b58f92069950aae79af395e60e96e"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","e83ad5da7d1348f357efa9b68cacce39"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","bcaf19d3025d1440b4f4a5aa5b2827e4"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","a1c018ececcefa38e6c3f6d796eae4bf"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","d7858a93eb813fbd5ad308f0ff6a2537"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","8eecc64ac8356900c476e6e14095b285"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","dacc56b4515a1e365d6b1e6682744160"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","b76701a6efeb656e824ebce3098da927"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","52a5e9786f917e75cff417911cfb8952"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","be39ba15de0b5ea46b97c43773f17d7b"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","4e4313e766ce44204b06d63f6261e7e9"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","3a3b033f911c195eb085b85f18af31b2"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","639b6d1daf6d60bbffb653167fe9c3a0"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","fc1ea6ab556cafb345bdb0987e21fe29"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","0806cb84df52a5d46839c82d344cc6a2"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","49cbc76bd28b94563f271e788c33edd3"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","34ce0c9bad65bf3d662ac88a4ec56ce3"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","c87d5aae93daa80be6a79f382f534a56"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","8cb56ce7ebebf030918fe00cdda58c61"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","74d4b9fac9350ffd06e42b920769936a"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","f9c97deccd4a1e7500da4445db4f5b24"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","35317774042de48559cf0d0847eb22b5"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","53ceb49f514731015111a882e7bb9168"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","843fff08aa9307f5c71d44d1b7c65fb5"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","b0cfac283aa58f065e6bdb0a71c60846"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","adf2dcde87023124737c682929d09c92"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","34e5b5e85b839c7ec5e85cd87cc66da7"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","3ef7eb1e50c56def7c50ffd89fa693d2"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","c2259fe5206d2faec504308560c75acf"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","0bd5646667192291391a092b8a863327"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","98bdb127563309892400791c6f681807"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","f1a1a997bf81731184c750032910e82b"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","289f565a1d675ce16219ee69c08faee1"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","d2d5c4e1808db3a2d135852fc4020ccd"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","df05c1724b9892e68832a9ff54a7a644"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","3794975f88fe36471eafa10dbf7b0cd4"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","841e8418ee051b8ce541dd6ae4795252"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","38caecb4bd0f8cf4da0c28cb2e2c3aac"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","e946891c99dac881ea35fbe5baef0d33"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","8a37cd478908762b0afe97d77c30de79"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","853b89eff23603e6ef681f9ce21a2dac"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","04c80efdffcf8da11973838a5eb94465"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","ddfb7bfc95522ffbc1cf321c5c213532"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","09e6ae7cf25f04169bf11f16f70109b8"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","a212ae87be3ca88ab8c835c3a0355d49"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","7db35a1306a39ba4eae66fe8e05e5eaf"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","733e135fb899155012e1aa92504c7b04"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","93f6f87681d9f8d8d99f65866779fa91"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","cd3847f60c9233c3b3ea4d82b468dfc5"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","b5a130fc2b1258747a3df30987afcb47"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","fcb995c46d367c6f7eb13768c9ee9f9c"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","bf0ed3c2cde4e40df5cf3331b8f45790"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","f395b5dde255f174c101b5da2a102cbe"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","0482dbd93fe69603d66db34c6942c150"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","a2b4bffc6be5d2805bfdfdd3eee22083"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","f5a75526d44b2f54e07549d5083b3bed"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","5fa04eddda576164d6262cf092514e14"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","d62f9aa436da8364b747bbd7bf48b9aa"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","d703792e10caafba44da081cbe2020fc"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","8be930215ce83207f18032720e602465"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e21a2eec29ce2b2c6e87ef3068f4b590"],["E:/qinhao/hexo/public/about/index.html","1ff42ccc2ab679598236900f410da3f7"],["E:/qinhao/hexo/public/archives/2020/01/index.html","e8f6bef53d0c029267041417a942c89c"],["E:/qinhao/hexo/public/archives/2020/02/index.html","3e9ef3c9666ac4bd42902a24f1bdd26f"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","06df8ea37e99530a0992418f66bcbd4e"],["E:/qinhao/hexo/public/archives/2020/03/index.html","181541aa15d7307c19b50eff40969938"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","9dc005deeca53e4911d6f8c0929dcabc"],["E:/qinhao/hexo/public/archives/2020/04/index.html","2bee66079712c2e1fbaba8a58a260238"],["E:/qinhao/hexo/public/archives/2020/05/index.html","5a194fcf64cf8cbcb45d05e8d31826a0"],["E:/qinhao/hexo/public/archives/2020/06/index.html","eb54d7e6f69446d73588a4c771fd540d"],["E:/qinhao/hexo/public/archives/2020/07/index.html","5f0cef26f89a5cbf38bee7d368e31c97"],["E:/qinhao/hexo/public/archives/2020/08/index.html","f9bc535954bd9e02b500c63985bb5631"],["E:/qinhao/hexo/public/archives/2020/10/index.html","3d4c4f9c2149de3e8b5e9a6dec5f6803"],["E:/qinhao/hexo/public/archives/2020/11/index.html","453060a3df47a4ddbba93aa3f849955e"],["E:/qinhao/hexo/public/archives/2020/index.html","2412e8855c6b05cf039560dc28877d0e"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","a9e17de1365e10651b54597daa4a7cf1"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","2fc65e99fe8fb238aa76c043c9b3551e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","0652d1006a2d296a2b8d92a6e3f0ecb0"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","8065dd2f0825f2978424103aa132c2aa"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","cfb0dde609d652dbf334c88cb09fa241"],["E:/qinhao/hexo/public/archives/2021/03/index.html","1f00668648181cfc6a5e44a3d827df80"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","4e8d96edfef6bbfd81de165d102c2e0a"],["E:/qinhao/hexo/public/archives/2021/04/index.html","233aac7cf36bfc0a34370132d13830ff"],["E:/qinhao/hexo/public/archives/2021/05/index.html","cccce2f99ff299b0ecb2b1524d0f0df5"],["E:/qinhao/hexo/public/archives/2021/06/index.html","7f10d4e7ad2996ca93d03ce7ed920fe8"],["E:/qinhao/hexo/public/archives/2021/07/index.html","c4e4d75e6f9528ca5e5bd5d3acfbef40"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","5af11abc6ab4a4606aec25cdb7e14599"],["E:/qinhao/hexo/public/archives/2021/08/index.html","004688874d397f28e538a6870057c472"],["E:/qinhao/hexo/public/archives/2021/09/index.html","14033fd74bc7b293ebbbb04ad2b7439f"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","2e4aa30b9d5e3e27c3539c422b447752"],["E:/qinhao/hexo/public/archives/2021/10/index.html","23a12b769e43f47232105dbad6c9e9c2"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","fb515807e95cd897dd711c1122db8a0e"],["E:/qinhao/hexo/public/archives/2021/index.html","57620f3d987557820dbd1603b990d3de"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","45386029a927f82ab1426b0c964195c1"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","137528ec50cf50e03b45279c4730d038"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","a40997c22a7df93b7e3d350a0736f809"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","ce1794acc3b17c53ef1b6de31fa2bf44"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","782efdffa71613aa412d61ecb7d82256"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","6fff1f0eb344d4fd70d1a4f60519ed7e"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","8a083517a877360ae1e48a70445cb3fd"],["E:/qinhao/hexo/public/archives/index.html","c8c28f2dd4daabffda6311b550591ad6"],["E:/qinhao/hexo/public/archives/page/10/index.html","4760ad02b2470c2e856a9b0222309282"],["E:/qinhao/hexo/public/archives/page/11/index.html","4760ad02b2470c2e856a9b0222309282"],["E:/qinhao/hexo/public/archives/page/12/index.html","71035c5985803429e4364abbb05c72e6"],["E:/qinhao/hexo/public/archives/page/13/index.html","71035c5985803429e4364abbb05c72e6"],["E:/qinhao/hexo/public/archives/page/2/index.html","ec7f9e95c8e592284cbb1dfd462aef3f"],["E:/qinhao/hexo/public/archives/page/3/index.html","ec7f9e95c8e592284cbb1dfd462aef3f"],["E:/qinhao/hexo/public/archives/page/4/index.html","c8c28f2dd4daabffda6311b550591ad6"],["E:/qinhao/hexo/public/archives/page/5/index.html","c8c28f2dd4daabffda6311b550591ad6"],["E:/qinhao/hexo/public/archives/page/6/index.html","c8c28f2dd4daabffda6311b550591ad6"],["E:/qinhao/hexo/public/archives/page/7/index.html","4760ad02b2470c2e856a9b0222309282"],["E:/qinhao/hexo/public/archives/page/8/index.html","4760ad02b2470c2e856a9b0222309282"],["E:/qinhao/hexo/public/archives/page/9/index.html","4760ad02b2470c2e856a9b0222309282"],["E:/qinhao/hexo/public/artitalk/index.html","c08ab56e1cbcdbf81461b95175bc43b4"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","40e6449889f43f9edaeb6b7f24598ecc"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","8348aac114d97c7c7db5266e41141c29"],["E:/qinhao/hexo/public/categories/Java/index.html","ea5025ba24c261350352355c8511ee7a"],["E:/qinhao/hexo/public/categories/Linux/index.html","0259ab0fb32c78054174a3e2cba12f43"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","d18b365599868bdebbee7993716714c0"],["E:/qinhao/hexo/public/categories/Python/index.html","72b35aa2fd680a75a0c0a249e9a8a8c2"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","a97b3e4b8ef832f7bd0f8dcb107939a1"],["E:/qinhao/hexo/public/categories/交换机/index.html","f4dc233db68783fec39321c63957ce6a"],["E:/qinhao/hexo/public/categories/前端学习/index.html","67fd311fb1b488390efaad4adb5a5b8a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","ec7a7a73e7ba92e7e2c10a7084b1a1d9"],["E:/qinhao/hexo/public/categories/小技巧/index.html","a1c8905e7f98482d972947513f464f5b"],["E:/qinhao/hexo/public/categories/操作系统/index.html","f167fc8a32f8ef50bed8b6392b2ac626"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","32de598c83ef67a52575e4011001acee"],["E:/qinhao/hexo/public/categories/数据库/index.html","0f29525ec28aa99228c3628dc4ed0b29"],["E:/qinhao/hexo/public/categories/数据结构/index.html","5972678558392f65a03ddefcc21484a6"],["E:/qinhao/hexo/public/categories/服务器/index.html","e598d38d4d4f7a84ff78022ae1116d5b"],["E:/qinhao/hexo/public/categories/算法基础/index.html","9a7cc459539fa066b79b8b9ffb83ffb7"],["E:/qinhao/hexo/public/categories/网络安全/index.html","c1a200d33959d6eb3d7f6c47787315b7"],["E:/qinhao/hexo/public/categories/股票知识/index.html","3c20508b39937d0cfdd9d7607fea375c"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","0dc01d028ff1c6cbc8268cf453c0a74c"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","1737c05d4dec71fd3375b585d0c26491"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","aea8e0df670308329505eacfbef0192a"],["E:/qinhao/hexo/public/categories/软件破解/index.html","fc37b46923f871c072c312e339125e22"],["E:/qinhao/hexo/public/categories/通信技术/index.html","78db7fe95bac22f492e0a346d9d9a497"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","d1cae742884a10f0c6a1f6c5598783cb"],["E:/qinhao/hexo/public/category/index.html","889914c9296a90f6b29b0dbe34aa1173"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","b59f4e93109415fb8682faecb849a49e"],["E:/qinhao/hexo/public/friends/index.html","8a405e5c999065c1fc31a77243c14de1"],["E:/qinhao/hexo/public/gallery/index.html","3e81784ab73a738a464bac47416330a3"],["E:/qinhao/hexo/public/gallery/reset/index.html","e106adc187ba11cb0e51c09e9a1c6e94"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","2c5b8c2c164351b7fc3952a17cee364e"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","e98d1faa26c932c4d8c316ac414392ef"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","ed933b2f93038f750dc6d658ca777c8f"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/movies/index.html","a59f2ddb79b4fb249eb34a58cacc8f2d"],["E:/qinhao/hexo/public/mylist/index.html","324faaea7dce8fcfcb28ac130178abdf"],["E:/qinhao/hexo/public/myphotos/index.html","0277fc433fc6645013c9f60587e08587"],["E:/qinhao/hexo/public/page/10/index.html","887b2f21f7568ca3e75b172e3505976d"],["E:/qinhao/hexo/public/page/11/index.html","a33e7cb9b6b974539753bd4438669f19"],["E:/qinhao/hexo/public/page/12/index.html","8758d453e16ffbfe43a306b5c7fe807c"],["E:/qinhao/hexo/public/page/13/index.html","37809854218da576e4b2420dc32d4ea0"],["E:/qinhao/hexo/public/page/2/index.html","f71783155db5a7be75803ad67d04a85b"],["E:/qinhao/hexo/public/page/3/index.html","ea43d9dea18745341c2a51b66dee61eb"],["E:/qinhao/hexo/public/page/4/index.html","7001fb7ca898f904c647b1bb4a73364e"],["E:/qinhao/hexo/public/page/5/index.html","91435976412aab1c268d0a79ca665f8e"],["E:/qinhao/hexo/public/page/6/index.html","f821e5fffb2cf92c6582aa38ec67520b"],["E:/qinhao/hexo/public/page/7/index.html","8a122c4d2bf2755b959c8514bcd9fb44"],["E:/qinhao/hexo/public/page/8/index.html","ec69a822070a92a24daacd183ba5bcc7"],["E:/qinhao/hexo/public/page/9/index.html","043753656e5a3440a8315a3707ac1783"],["E:/qinhao/hexo/public/sw-register.js","80cbfd4a34483dbf82c86a4224eb12cf"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","a5f5aba7d7040957bff90887678c2d9a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







