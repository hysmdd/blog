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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","9416c7cf9d0ba459b3435e6f82c57f94"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","7eae8c28f0d65df6e7790fbf25e4c43d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","c1991505097fa7051ef2d446f9e3314a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","26c58bd02c57fcb82d31294dc7e08cb8"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","70c70c073341740a99fa5333cc8cf7f2"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","411d1dcab5c5447387f1729d34eb34fe"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","5e2c12e0cf80ef10600d997406ad858b"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","c8806f4d9974d500dce76e1ce78ac13e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","2e1f9e1592d42436de0f3c280e762b94"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","57480fc6bebdba7d3e8d722609bb61ee"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","accaf32d4d0380e5b5a8ae7bd1e674c8"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","9ebb6c4f943c88473c8db987f5367bd6"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","3e329886099eea049038e3d0fec7015e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","3054d48f6753a52fe076ed7b7863dc31"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","91ed17872d4211d5ad0cf071507edac8"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","f69fed78c6712e994e0426199c4e7668"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","d07618763a87a4271ee09017bfa2df8a"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","ea50974aa76f0e98d8bb1f64900f92a6"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","48dceb4e1324827b8cc612808bb388c5"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","b0f31c9b3e2047eb723da622cafa1308"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","61d6dc05f767a75e3b326ddde5b6808c"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","6bf66616f0784bdba5ce5fe44ff36e06"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","7459d046f8be22080b3db04645dcdd37"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","29a2edfb3a0f0cb0e28384f55f786b29"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","17c692eb08fc8523795655a1631c34a6"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","c9fbeba91c3ffccf6215f26f21dc2546"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","e9a3e88de4961068eb5dbe052469efab"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","9583c667f45f3d922a06636b8ed90b66"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","c54cf7ce15e127054fffd1034823c4b3"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","4a6de837503412d41ccb79cb3ad60bac"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","13c0b1a166ff00607b6f8bbcf09fd9a4"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","4e603476765b979cc5a738fdfa498a2a"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","c5d50c637a60a401101dea2d11cde53b"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","6fea32e445fc579dd65f3769ceaf1116"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","b4b099e1f8bcab80570e4b6e2be78408"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","98acee7cf0b082259829581c94f2aad6"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","9f6fc0b3965f4c3836485de488511da8"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","771f3600be66a9f44e5dc233da106236"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","c470411d0aab59a5331635cbd201ca6c"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","23719fd80b4f91ef01da04c4fbc680a6"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","93c73bcccb4b4d12755b595a5ab2abc3"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","af6b49253d310079cbfed9eee9b3afdd"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","b05cd61927ad61196464aca1ef5643b5"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a728ea0a2df7f91a49d77a8210427108"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","b3c60294a7733fe9be9c6622c4f79b12"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","15b363ac31e24f14b05552254ce5b7e7"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","c10dd32b8a866455a9c0c101f452b4a3"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","7dc73c43d3cf442b9b83cbdbd0fabba2"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","fc645de053a2d3f32218091aa89a99a4"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","d8b83cf537170a6ad0c16d8306a24be3"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","dcfb920f32fa1257c78f5f371a9a84c4"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","4542fc39973c4cefd68d85dbadf73a08"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","bcf2dd862129e3c871bbd050386c1d2a"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","1fed8ade1218fcea4bcb010d8e1ff9f7"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","51c17fef5e98b4076ec789fd18a82645"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","41f1ecee5ad4f0d4d0946a5197f92c11"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","0df17da3277e99937212414d82b4b493"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","11a74aa3c02a2f859a4d6a28cf606ac5"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","eb02865c273288eb21920e17aa09d5f0"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","88ead4a6988eba8c04d81e9f46fe8e12"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","e8b2df55888c47c3ebbc85403a3c68d0"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","b42b583723af670bb5574d07e5f4d8a1"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","e9e5d75f31fd8cef4568c55c406f3bed"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","9660ea44ff0d0763a3b6e61525e406f0"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","b99a26d4858fe1cb099e85f28323b0ea"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","d70cd79748c3ba17d8193b97f4dbdeb4"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","a06b4b31effa4d9d4f4ae9df31a84a19"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","a0574843b1d2e10462d7659dbd29d1a8"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","c108f75efbd11f714e07ff67f2f21a94"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","704dc9c0fe6889e01a973774ad3906ed"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","4dede1df6b0f6e6719fc21ae2bb0e934"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","71e76e5dd8f3d9fffbadca6b494027dc"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","902bf8065360b8766b1a23c98b9f6e42"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","2ff71802765404a40236dac4a2024b22"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","c6f9423f1f3e2a9f66593203df1b7659"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","4315f0c8ac2fc5de13153082552ac8a5"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","2476a72fb2f90e42f79b8e51be6bc41f"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","b4883b86b60241c3a971b84261554f3a"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","b395a8f4de2d7fd7eb856de6a85d5b5c"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","1910ac52cc266d1d058a4a0fddbd4669"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","6379d50305251138b09f90bf57680258"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","41c79a6e107ad15f6c538c2718145bb3"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","e34f0432c1c776d8372cddf24a1f2dcc"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","72f928e145e2dd15d6395015ecc7675e"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","e38f3601f59ec15ac4edb08546dc2828"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","322f1430902eb57853bbb14acf9a3d9a"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","4c7809737acd43613698864db7139d12"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","cbd35de9cb56cd2be556585175b829fa"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","d82e4919626c6df628fb637e1a58f64c"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","089d4336c037d23620d79c18a58b5395"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","4c68069cb2ec0d9703bae4fcac35cf78"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","b159d1de0da75b647576bb0df20b3d2c"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","06115f03d33ab1a0207d407248ca772c"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","d546a5ca0341d7a6afdf67187fe6424f"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","cd066b3362dc62ac5f074d4dc6ed1362"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","766b6529ca611c522c35e04c4e1d2641"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","c07a0437d0f3f98093d28c7af41b7890"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","2acdc84ef8960894f716784ffe9126e1"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","f6ad771fb4e702d0f0e15ba79710db06"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","b0022f8ebc66c572bc7883aa610f427c"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","810a62b64e55e3d4fcc4096e716195d9"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","c85e037868f8041f2c5dc5dcf78a57f3"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","922ad36c18675f3ea3878fb74bfe7269"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","efdaac02b4899971f6111b05c0fdb149"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","c9a52913e3e1ea50df417417bacf9be6"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","e07ee976bfdde97d2cdd28ae33c880c7"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","1c3a1c6ca822c336cc7ce99506f00429"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","7eae226749e4dab737fc3aff49a137b8"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","edee8423c3bb3e4524303e8900889b1a"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","585df40185b80c4e8489a7f9b3919e03"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","59241aa9947f0676bc8eb7dbd4bdca7d"],["E:/qinhao/hexo/public/ByteDanceVerify.html","bae6a014a65d423634fda400ce3728cf"],["E:/qinhao/hexo/public/about/index.html","516834a0f7b89dbbde80d8de2aa488fb"],["E:/qinhao/hexo/public/archives/2020/01/index.html","cde80362b6ff95fafa7911ca5c92f1a1"],["E:/qinhao/hexo/public/archives/2020/02/index.html","993557a3ea7b81614c7de13fabf7ece5"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","438ece26926bb8161f5861cc38cd6383"],["E:/qinhao/hexo/public/archives/2020/03/index.html","484a4dd180fe5cb33cc9d0b14b33fa0c"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","086f5894e2529901f2ca45e81c5398b9"],["E:/qinhao/hexo/public/archives/2020/04/index.html","5aacdb45adc51c41b71c2fc2fcdd6c87"],["E:/qinhao/hexo/public/archives/2020/05/index.html","f942a55717cdfed8f04d3a15688d23a5"],["E:/qinhao/hexo/public/archives/2020/06/index.html","fddb5eecde95ecfe348d0d8d2961a20f"],["E:/qinhao/hexo/public/archives/2020/07/index.html","da52f9f5cc8384b24be2599497478f9b"],["E:/qinhao/hexo/public/archives/2020/08/index.html","9fd7c5ec88f59a7c850cf495de57d9d2"],["E:/qinhao/hexo/public/archives/2020/10/index.html","aed24d77bd3a9ac2f124388d0a4c5927"],["E:/qinhao/hexo/public/archives/2020/11/index.html","efc52944e91d9c909106542c26edff92"],["E:/qinhao/hexo/public/archives/2020/index.html","0b9261c24b9eee8a4d55e64fb9f15d9f"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","62e3a504f90e6b849159648c63c85316"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","d378daa83f0c7c712c6a0076ae086f63"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ecdbc5ca94045bfe29678a41cb65ef34"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","008086f392c5a5b3a1f509e1f8068ce1"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","4a18cbc2541d801f42f8325fa406d9b6"],["E:/qinhao/hexo/public/archives/2021/03/index.html","249ae24debc9c89d8e8fefd5e723d367"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","006befbccfe07f92215f39661a7f2c9d"],["E:/qinhao/hexo/public/archives/2021/04/index.html","c049f4c85f6c944ebe916a06ee2c9c85"],["E:/qinhao/hexo/public/archives/2021/05/index.html","ede712ebe29554db7f72cd6b2276da6a"],["E:/qinhao/hexo/public/archives/2021/06/index.html","9e43bf71f1cd05861bc468506136b86c"],["E:/qinhao/hexo/public/archives/2021/07/index.html","ca3c3287fb4230d309af5127310d7601"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","d6528241d3ce43e91f04906b2d99148f"],["E:/qinhao/hexo/public/archives/2021/08/index.html","bdf7f3495c32cd8fb57c76a5faf74522"],["E:/qinhao/hexo/public/archives/2021/09/index.html","7cb978d5a300d069d93f1b7cdc86ebaf"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","0c55e5261c7da2a1058d1310d77866af"],["E:/qinhao/hexo/public/archives/2021/index.html","a6f742c18647bd49bf74ae66cfab7958"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","272fc712198b705ee144badfdc8aa729"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","1ea55e0b4a7fbfd8bcc1f2a2d93642c0"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","b5a1fbeb6faef76a76002f94b1140ac3"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","08b98d41066375a5a85cb83655c880b2"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","3104f094463b5c40abdd991883c0cb45"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","84b72c744a2ee4907700dc90602f964f"],["E:/qinhao/hexo/public/archives/index.html","653b892a12056cb7307537b7d7db0668"],["E:/qinhao/hexo/public/archives/page/10/index.html","e0069152fe11ad879a3f94bc0d1c3745"],["E:/qinhao/hexo/public/archives/page/11/index.html","3ba8444e3967d788785b1f6fd60847a7"],["E:/qinhao/hexo/public/archives/page/12/index.html","3ba8444e3967d788785b1f6fd60847a7"],["E:/qinhao/hexo/public/archives/page/2/index.html","653b892a12056cb7307537b7d7db0668"],["E:/qinhao/hexo/public/archives/page/3/index.html","653b892a12056cb7307537b7d7db0668"],["E:/qinhao/hexo/public/archives/page/4/index.html","653b892a12056cb7307537b7d7db0668"],["E:/qinhao/hexo/public/archives/page/5/index.html","653b892a12056cb7307537b7d7db0668"],["E:/qinhao/hexo/public/archives/page/6/index.html","e0069152fe11ad879a3f94bc0d1c3745"],["E:/qinhao/hexo/public/archives/page/7/index.html","e0069152fe11ad879a3f94bc0d1c3745"],["E:/qinhao/hexo/public/archives/page/8/index.html","e0069152fe11ad879a3f94bc0d1c3745"],["E:/qinhao/hexo/public/archives/page/9/index.html","e0069152fe11ad879a3f94bc0d1c3745"],["E:/qinhao/hexo/public/artitalk/index.html","17289176d1aa2905cf6b399e38f2781b"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","899d1f4fb0c5425e5592e1fd7344907f"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","732335441c9d7738456c08f535b9bfed"],["E:/qinhao/hexo/public/categories/Java/index.html","5007723f73e5cc858694d633e6e1879c"],["E:/qinhao/hexo/public/categories/Linux/index.html","e75847f8f97223366548c2297ffaf076"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","0ccc9c1865f6b466f30a138636c47452"],["E:/qinhao/hexo/public/categories/Python/index.html","db34dc331e94ba02f3a6de95a4a81b82"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","f5a8b2e4a3f025e8eadc44daf5602236"],["E:/qinhao/hexo/public/categories/交换机/index.html","c75d81697ccb7e1f71f6130cee3fb39a"],["E:/qinhao/hexo/public/categories/前端学习/index.html","449f20eaf00c70afb489e34f004be88b"],["E:/qinhao/hexo/public/categories/华为认证/index.html","c3d3abd581f366ba95b85ab94b81c4ad"],["E:/qinhao/hexo/public/categories/小技巧/index.html","2b1faf1111b87103383caf4202fba75a"],["E:/qinhao/hexo/public/categories/数据库/index.html","68ff0bcd730d88df8a38c05614488793"],["E:/qinhao/hexo/public/categories/数据结构/index.html","114fd69a300eb02d0df7ab06224a5b17"],["E:/qinhao/hexo/public/categories/服务器/index.html","64a06298e875250df4089f54bc871e5f"],["E:/qinhao/hexo/public/categories/算法基础/index.html","0b06e960667d32e919d9a8b5955bf9be"],["E:/qinhao/hexo/public/categories/网络安全/index.html","78bebaaf494118e9826c1cfd328ac61d"],["E:/qinhao/hexo/public/categories/股票知识/index.html","8217e822a32008a41bb2d76f0aa57ac6"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","2665f237b2af21afa723f4ad552efa01"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","ddc6e3b01cb1399f61de729c504b369f"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","5feca36d9afc61ff2f482cf2fce77b44"],["E:/qinhao/hexo/public/categories/软件破解/index.html","19c2cb98301ffd86da382b42751a6534"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d157ad4b9e0cbeef88f840efff118d74"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","817638f26aac2ad6be79da3da563c55a"],["E:/qinhao/hexo/public/category/index.html","990e98f0e70b35e9115267f140588319"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","95d1e00f8a06a3711ba4ebfe1af2de32"],["E:/qinhao/hexo/public/index.html","4af6e0e1a00d752cd5e7cd386268723e"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","757294202d18005323c7b6076a01f994"],["E:/qinhao/hexo/public/page/10/index.html","07368ac9d0ecb8234fd09ab4bbe44903"],["E:/qinhao/hexo/public/page/11/index.html","cd437273497ba94aeafb474d5084fdd7"],["E:/qinhao/hexo/public/page/12/index.html","3d504d78576a87047c7b84d402ecde08"],["E:/qinhao/hexo/public/page/2/index.html","e3b87ea3d0fb2fb98f74f7470d7251bb"],["E:/qinhao/hexo/public/page/3/index.html","d1c2ed985dc64b0aafdf982014008256"],["E:/qinhao/hexo/public/page/4/index.html","58fbe60754c951291550404a0f7ba086"],["E:/qinhao/hexo/public/page/5/index.html","fc8f6c8cf8731fff1a64b25526d23f78"],["E:/qinhao/hexo/public/page/6/index.html","ba5c49a1efe1ee362e1224b89317f737"],["E:/qinhao/hexo/public/page/7/index.html","b7314cd07aa07d0ae74a9ae9da45c4b9"],["E:/qinhao/hexo/public/page/8/index.html","969fc7568ac6c54679a302a86e867fa8"],["E:/qinhao/hexo/public/page/9/index.html","72ac41677387f1847565ddef629249ab"],["E:/qinhao/hexo/public/sw-register.js","1e683cfde5c2b40f3ee18ca4ff1c72a0"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","f44fccb6607452859fcbcda14ffc704c"]];
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







