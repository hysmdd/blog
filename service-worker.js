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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","f357f03b2471505d51a0fb38973f19bc"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","5227c0029d14d0bbf93bf17463c49b06"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","b3c715fcd74950a8751175aaaed81f19"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","3980b2bd2ceddc57284b9261d30f9891"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","0280b25944235fde08b3562ffe2aace4"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","e73830ae77092d198f913c133b514a41"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","bb9dc8eafbc6cae96a6931a01d822a49"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","fe3719b16571c5d29663f3867b5012df"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e28f3bd36c0f973f973f2cc699b1804f"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","55cec47e5dfbab5a0654e8e7d714ad1d"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","a943ddfb324c41e2d9a43587178746af"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","ce8c8e2d8f8374970f632b60819a7530"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","a126a09f830b80aea683106169fab3d6"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9559f5b280800ef344b12ec33e5f293b"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","507537ff6ab0c110c7ad059d011cfa2e"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","ae636ff050dfc5f3f7485ca3f08c6a42"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","864b8e1b130420619223e2c513018963"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","c955f657bff71158c24d85100d6634a8"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","35a92267c164226a5f8e75ad6d8fb3aa"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","979e5e4da23a14238c580a7ee259453e"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","0ecb828a27504f93e881db37bf4dd571"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e39533f6095039ae157eb5b7ef078817"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","b2effe82272fd4bb9f867344575ec267"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","7fe753c3fccffa8c72af54d44e9e0e7b"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","0f9dc827cc5ec421bb0e296b81d29542"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","6a0c92011f14bf085ce81dec0df17835"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","bf1f3afb4de3418d32ce98db933c88d1"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","ae7ddeafcc4d0280ed7c91a7a4d6062e"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","e04333404101391a4acee4e996648885"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","28084c548bfe7fb80fe24abc22d36704"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ad49bf5274dad327ee0a6cc7faffdfb9"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","0292c2ac0407ff67485d21315125ede0"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","16d84e1ee0f6ea00902355fe57c29804"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","329af4967f8ce053ac52b27a5128441c"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","5b8058d13f256542a9d3653eedef7018"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","f99cd21253056c77605e448c17945981"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","4ccf4acb6460508bf257161f40acfe5b"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","b69498af0e796696ee75b50f5d175568"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","0bf218e9a1fc66a2941d0acf3475758f"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","b55566eb82533a0439a019572b8bb456"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a39332fa447e3f19a15a3eec04642a9e"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","5b15c0b6ad291dc0e5770038d899d693"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","37cd6dfb0d5babb50407a93c1b255f3c"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","1b3fafe8501c35e5c43ae8a0aefda9e9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","562149638d6dfb95679adc29d0e83d7e"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","3f3906bbe0386fec2093025fee552c38"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","0172d3d00ab5f7561834a93f3b0c43a1"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","82317e8c4bb2c23a336eb19cac8f4c93"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","fcd30f6c7153f12a558ddc47722105db"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","ac3c48040bef84e84499b9d0df8bbf71"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","881e8c8cd1d6fd1c02de20288ef8b833"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","6c4c727bfd40dbe5a1ac9d0cceed07f9"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","fce1c7b183da380a76ce9e410f2932be"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","8a025e4490d2300c1b220c53ffc78a4a"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","ff7d204abff1c7fb8f815b4cf8f0f1c2"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","721debe450cf89e1aa62d3bc609e3567"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","2d2f02a10a07c628db1872f4779ff144"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","437dcd3a7b2bea2a4161a6aea7d33d88"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","129572dbcf23141b852448dc10e98752"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","13581cac6fbc3401df83d03a2a5b5059"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","5dfbae66ff24466ed832ab88254e0697"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","7c009aa512e1742ba6058072a0947bcb"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","641cfc7e81c641d372e7e10864624a47"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","34bdf5009f4cc63349c6e200bc7730c6"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","44806e9520d45e509f2037358c63c243"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","edbbb1badbf1a55a635c225e8b1d2e2d"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","93284a5e6ae4dacdd5ec58daf467e9f2"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","b9306ed729417358fdf2ca6c8ca5d19c"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","9bf1703b22dcd6f962804b09abb30555"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","c7ac8fb2a1fc69d08962e6dfee16264f"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","c21c753c5684b0680093f372ddbd4dbc"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","8be059316b8d85205fa00f9d65a97322"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","ea0793bdc3ad8318632bbbd4f19cfd30"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","247b7e32b851c52aead253b48e2ffb84"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","f6cb6090af14392a4200631f8fb8f7da"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","cb94473cc4b79fd1dc9d4b84c20c08ab"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","b64ae53aea452a5fdf95023e0ad652f4"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","7a9abd26b66a0bb7b126132483115e36"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","e575fa7d75bfbc99eb2dcd74bb12141c"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","9eee5df84ed92592f78a57a3842ad2ce"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","63b7deca20eb625154a48e2317b9411c"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","2da28fccb69c76153052990c3c0709d9"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","17b4213667fc156bdf0a8ff1f02163fe"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","93404c9f31fee18fc3bd87004b85b6fa"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","670da57a909596287d9263aebd7f16bb"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","8efcf8d9d0578a5503476a6c163e6dd4"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","478003b6c81df1dfa7bbf381f28cdcf8"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","da3b7be10b5ba750991b92edf77126b2"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","a14029828e1c191c596b572911ed60e4"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","8d31a74d13c6c7c2f15efbe8a9fb8179"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","8093431c198f74a7da8eb4a29c225d64"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","c8f37104547b267ccffa80a6dd70cb36"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","70389072296ca89f41894f5db0fce838"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","0b6cb374e901e2fb3e0e73608571813b"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","c266207f2420170259192218fe39496d"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","9930e83f03715b37acfa5a1561cc38fd"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","1e3f07c0efe67842c998cb915f315bbe"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","fd4e0efc6912facc58453d912538a37f"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","ddf17363cc1b266d9aa6e0228a2a577e"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","47444f544a7cb7dc9e9ae1569482fd02"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","9526182581e517901621ebeb96e9447b"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","d92abd10a6e7c571c2aafa30b488fa1e"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","416073a8e2e907f823151ba0ac5cc25a"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","07ee74439d8f0339d70b3c81fa7db69c"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","942e1989f778f41e8bee485e84510b94"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","ccf2bd5f8ce5d3fa771841ff68c5674b"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","a2bd96f00dc82512b9e49bd4c4b910da"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","30470e955a0a12f0b4cdc97c3c348db9"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","777de93c2899e3699aebaf3c65cec676"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","effe26b0f9c030106a054db225120d26"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","706e51320d5cac2c809c10c5fc5ee980"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","49f5820446c81a6da4efe5b4991159e7"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","b55599cffbac8bf7b10dd3d2367e14c4"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","9063782dc6d84a9ab6d90d0d6abec42e"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","b72e895d6a1f3f94b29d095ca34882ef"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","4bda659679872ecdfcf3c89d7ca093a9"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","b606bba638d03842f7c79f947f237d4a"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","aa7deadaf5fe71da3dc6b0089c1e41ba"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","746455da0881652c736ef1e90a5d166f"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","b97bbea71144f0c1967c6d3311258cc7"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","8d63419adddb64fb1835bb66afe66741"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","caf3d93c31969ccb8b50461534683276"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","c137da96d1203d035423797a791869a3"],["E:/qinhao/hexo/public/ByteDanceVerify.html","e681688149dde659d46214a34999147b"],["E:/qinhao/hexo/public/about/index.html","20aaa4c366e713012f9afc7335609d82"],["E:/qinhao/hexo/public/archives/2020/01/index.html","5137829b3a39e9bace60342d4ac0a1b5"],["E:/qinhao/hexo/public/archives/2020/02/index.html","b8385b6e9971cd97a4e0c863e8903d0b"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9890ffe4538d066e07aedf98a9eaeabc"],["E:/qinhao/hexo/public/archives/2020/03/index.html","ef3d40802a0097ee68477d333d48f894"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","7a51bab74bacc3d65eb6a23846fbf339"],["E:/qinhao/hexo/public/archives/2020/04/index.html","9fb29b4caee236a450452f267f6dae69"],["E:/qinhao/hexo/public/archives/2020/05/index.html","4caa0ad4a2b21c6a003a0a74d943df4f"],["E:/qinhao/hexo/public/archives/2020/06/index.html","b8c8f3a7ef2e9bc8338199d659168f5b"],["E:/qinhao/hexo/public/archives/2020/07/index.html","7c7b120882f0208ea57aec9d20aea9dd"],["E:/qinhao/hexo/public/archives/2020/08/index.html","d94793d3cdb3d947676f9e24600d7a26"],["E:/qinhao/hexo/public/archives/2020/10/index.html","eaa8c60e04dea8d1446e2ef0bc1f6af2"],["E:/qinhao/hexo/public/archives/2020/11/index.html","fdc90ab77cdf7706c8a6560250a778c4"],["E:/qinhao/hexo/public/archives/2020/index.html","184b5801a8882a69443ec0a38dc3dc9a"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","894bde809825da3e41e6c7c3adb2b93f"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f56656de6e245a3b299f95b1dcf7427e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","34a2e2a8c89ef2af366331c5668aa4a2"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","31955da62a7d5c9de37d4fc5ff94ada7"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","7b5809aa9173024daad67174513f354f"],["E:/qinhao/hexo/public/archives/2021/03/index.html","d6cd3882dea9be600617935fbc90adf7"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","9f4a5ff7bdd931fb53c1bd3df7c9a44f"],["E:/qinhao/hexo/public/archives/2021/04/index.html","533e0e34fdccaa288742bc0abdc102d3"],["E:/qinhao/hexo/public/archives/2021/05/index.html","0294a720d670672ab2fba360a59c4302"],["E:/qinhao/hexo/public/archives/2021/06/index.html","74fc50da990d502966a9795ebf0085a9"],["E:/qinhao/hexo/public/archives/2021/07/index.html","694cb8e7214b653e2ff595f9df61f98b"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","f37585eccd0eb2278c7d0ee22fec024c"],["E:/qinhao/hexo/public/archives/2021/08/index.html","4255e09145fbaf6423b1e145ddf722ec"],["E:/qinhao/hexo/public/archives/2021/09/index.html","6a6dd5c9466b4eb3bcc93e5bd0d2af85"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","e502e7b799255565e01837cfeb319551"],["E:/qinhao/hexo/public/archives/2021/10/index.html","c909764e62f06182819a6b542733aa28"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","763245e5d3ddd2698770f470cf52eabc"],["E:/qinhao/hexo/public/archives/2021/index.html","f57ca69f3eb03929ed596fbf93218a6c"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","1839a5a771ecbc9c98353d9234c72983"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","1d2bda6cdf9e57b80b72275971f9d6cc"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","ea35b30ee6a8be0b8090fb602ab6f742"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","e5ff404ab8d06d993fbd3d4db785684b"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","903e86c3b0bd340e2e3946fc70b1ea14"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","5f47fb1253e4b3f0e504c31ecf8c5260"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","4f3b57102d70ba5674eafc00e8b6383e"],["E:/qinhao/hexo/public/archives/index.html","ca53fa4d17635c070a14bbaf893261f0"],["E:/qinhao/hexo/public/archives/page/10/index.html","7b3024d70098a1952dfc776cda9f4f98"],["E:/qinhao/hexo/public/archives/page/11/index.html","7b3024d70098a1952dfc776cda9f4f98"],["E:/qinhao/hexo/public/archives/page/12/index.html","7b3024d70098a1952dfc776cda9f4f98"],["E:/qinhao/hexo/public/archives/page/13/index.html","7b3024d70098a1952dfc776cda9f4f98"],["E:/qinhao/hexo/public/archives/page/2/index.html","ca53fa4d17635c070a14bbaf893261f0"],["E:/qinhao/hexo/public/archives/page/3/index.html","ca53fa4d17635c070a14bbaf893261f0"],["E:/qinhao/hexo/public/archives/page/4/index.html","39bb7012803e6dbf4d8c0a6eb7eec671"],["E:/qinhao/hexo/public/archives/page/5/index.html","39bb7012803e6dbf4d8c0a6eb7eec671"],["E:/qinhao/hexo/public/archives/page/6/index.html","39bb7012803e6dbf4d8c0a6eb7eec671"],["E:/qinhao/hexo/public/archives/page/7/index.html","39bb7012803e6dbf4d8c0a6eb7eec671"],["E:/qinhao/hexo/public/archives/page/8/index.html","39bb7012803e6dbf4d8c0a6eb7eec671"],["E:/qinhao/hexo/public/archives/page/9/index.html","7b3024d70098a1952dfc776cda9f4f98"],["E:/qinhao/hexo/public/artitalk/index.html","07056a453f639d0bd4d51a902cec117e"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","0658a59b920908ae2877dab3821d0137"],["E:/qinhao/hexo/public/categories/C语言/index.html","66047aa3405f99408c66d3698b72d33c"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","f0e7a910135483d009942e4484f8150a"],["E:/qinhao/hexo/public/categories/Java/index.html","b49cf52c705f7a8a7c9ac9f854a16345"],["E:/qinhao/hexo/public/categories/Linux/index.html","faa729578163a109fac08d87ebb1f157"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","51c92f50efe98b9e3ecd8da1a6ad7ddd"],["E:/qinhao/hexo/public/categories/Python/index.html","433b459f3f18af36ca6d054e826690f5"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","c9a37db41712b80937b51c0e14c900a9"],["E:/qinhao/hexo/public/categories/交换机/index.html","f736fd5ca61bbf7906529b51458d78fc"],["E:/qinhao/hexo/public/categories/前端学习/index.html","186e6ddbd43ca6826f1f104ed18b99bf"],["E:/qinhao/hexo/public/categories/华为认证/index.html","96d8e22cf1c8603f3deac4883ef23287"],["E:/qinhao/hexo/public/categories/小技巧/index.html","2697c113e1c269a36d9bd329823877ae"],["E:/qinhao/hexo/public/categories/操作系统/index.html","448da2760ed302a5626ab2eac347546e"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","3c8bd68e7921f10a8f2c96ba573c2994"],["E:/qinhao/hexo/public/categories/数据库/index.html","619e7d9e58e1649c4f2526a7145e9904"],["E:/qinhao/hexo/public/categories/数据结构/index.html","069ba2d55d7eb46f4d1e3a7df14e0556"],["E:/qinhao/hexo/public/categories/服务器/index.html","7be2a6fce79e883c89d7b73bb96cc0b5"],["E:/qinhao/hexo/public/categories/算法基础/index.html","95b6e66ec30fcc2cfdd32fd30a3d0d65"],["E:/qinhao/hexo/public/categories/网络安全/index.html","bcfe7274315adead142ec95ac7460bd3"],["E:/qinhao/hexo/public/categories/股票知识/index.html","cb476fb84a91fc1b0986a1c65d3bb164"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","3fe1ef4f6b4ab50e1ee3359114bede97"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","4a0804b7830e3dfb704dc917011aa1e5"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","bb228c6d05937c4bf428b3c1c4b818f6"],["E:/qinhao/hexo/public/categories/软件破解/index.html","52bedb34894a2c5c5ff45306d182a7c2"],["E:/qinhao/hexo/public/categories/通信技术/index.html","8bf78abad9181d52eab06bfce7a5e8e8"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","437dfe73dc19f2b479bfa84a1f678156"],["E:/qinhao/hexo/public/category/index.html","e0ec645acf563c80182aed5556ca8fd4"],["E:/qinhao/hexo/public/cinemas/index.html","fa3c80a4ccbcd4099956844aae844ef9"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","cbd698d046bc27e0586696bfcc6d258a"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/friends/index.html","7e73fc6e6415c123072f0a09f83a756f"],["E:/qinhao/hexo/public/gallery/index.html","c88a03ba9698e5590c223805db6e81a1"],["E:/qinhao/hexo/public/gallery/reset/index.html","5995186294e23ba8e3443ced22d0c551"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","1fa453b327d82d3904e559ec637f86fb"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","3f01c2b5babdc42c6e5a4bcdc44ab821"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","98a0c0c8ef6e418c86cf2896f5ef357e"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/movies/index.html","7c8b8f6d16f631ca8ba8ff1749028a0e"],["E:/qinhao/hexo/public/mylist/index.html","f2d9d1b9ffc890e7839596f1afdbcbf7"],["E:/qinhao/hexo/public/myphotos/index.html","56358c400e787779e8a8efec6da6c1b3"],["E:/qinhao/hexo/public/page/10/index.html","265ef18586ee521a3025dc21265c58bf"],["E:/qinhao/hexo/public/page/11/index.html","4291fe122a9e593daf4e15d1204744cc"],["E:/qinhao/hexo/public/page/12/index.html","5949e1e721b33398f32d7740d10b5c9f"],["E:/qinhao/hexo/public/page/13/index.html","0a137b05ec2aa3ff50d0d2ccc73a5dd2"],["E:/qinhao/hexo/public/page/2/index.html","90ca608ae8aa5cef504e21dccf3c9c20"],["E:/qinhao/hexo/public/page/3/index.html","66ce3d08de97d3117fd5ef07d5716028"],["E:/qinhao/hexo/public/page/4/index.html","b4e78e614cf1b08bc2b094d0a9de1aeb"],["E:/qinhao/hexo/public/page/5/index.html","047512683d7869f4e4eac06b1abebb86"],["E:/qinhao/hexo/public/page/6/index.html","7c5b8058d5d27fbddd3ee5725b8afb7c"],["E:/qinhao/hexo/public/page/7/index.html","d4c8f9eb3947607a95bc091465653f9d"],["E:/qinhao/hexo/public/page/8/index.html","53d0f1cf82926c20a2b6661b8a3b1f70"],["E:/qinhao/hexo/public/page/9/index.html","4524b1a60a169dc2817df85b62235898"],["E:/qinhao/hexo/public/sw-register.js","25e0ed0dc53059bd4cd98660ceed9781"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","a44f1d530f960f064c7d6b514e547ab8"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







