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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","c30db51ea0f5c3d5e5f0ce682ee22e9a"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","6fdbe3bcb6de35ce5fe14516c218dcc5"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","fd339fc88e170213df91933a5f0b43cd"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","dc190b2535174d1855597d96a5a3454f"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","b6ad3d3771c47ff70b461a5b3e12e41e"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","053fce079af84d76c3ccfabed165f6c5"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","71b2c56e2d903c1e303c96466a5af3dd"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","5113ccb0d147a0b428bcb0f6420a522d"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","d2559ddbc7a6b0f406cccdf23d9445f4"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","fcaaadfade326adc4acc67127dd8307e"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","376277e6528a3f3d4ef25e2033ccc2e8"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","f59196729812f7cbbd6ae962b520b1e9"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","2397bc2a8c306ed0a578b99991afe958"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","86b766bdecf2f7a468c569e6a6f6556d"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","96236f4656593b19ee314c811a713732"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","5dda432788a56606d82b72958121551c"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","3ca852f91b578648fe27b359c7d1ec23"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","abde8cc6e244aa694caf306a8bc0b1ce"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","6e2096eefb80c8d6aa6e208ae3138cc5"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","9d3c09697e5b3cc7d537a1bf344bb963"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","8d96ba995859ea330f9fc90a451487d1"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e14101532cae366bf72ec4a0bd611752"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","6bc02a8490b75f7a768bb3c0de40617d"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","3560cdc5685c468345304a30f59edaee"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","b264aceb01138d455dbb6e6e5deae3c7"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","67a949de54b9669688bedff903d7c8eb"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","18750fe0a726a544e35935c1585dd997"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","b21b90f8746371367406a4c1955c174b"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","2c9ff1a0be7c233ce60005877b649062"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","20ccb508601ff5ffc96344762c9b9b14"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","baa8c79ecac434f1829c1106fa35d3a3"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","d03f24680b85b548f5ca3ed4009c96c0"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","f12096796927a1a5a91ea8313d202dea"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","b739e8b3e45115fd06ba794697f0dc20"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","a584bfbc76ec254882413fae1576abf8"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","ef79f686fb4bb00b3191e0b0fa8dde6e"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","501a81014cf5d58694097ad6fa452379"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","67d57bc65b9ba9d67b163742c1e1d096"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","eb28b3e8052ba6e5cda18f492fd6a832"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","58a35789ca6f4f64db6c808acc3c2551"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","7ac5f43d495bb69f7741fc2f491602e6"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ac6c65dbf08869c2222dbe4ca43cd6bd"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","64f899c10509252b73878b85b7140525"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","0d848b0c2e5d6b1530c48c7d3e5097e7"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","4a75931a74758ae56bcbe07118e3f770"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","2d92591c81eaa17cf5d6208d305987ca"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","6a1158b00cbd47097b6500d6e25fad4b"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","eec84d5605af0051d6d87d5356c44c82"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","eb87b0ccf9c91ba6a32766b27fff9587"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","2b1b068eef2030352f7aa17f1d8c8776"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","558e14af31110f04c91cc481e2dae2cf"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","f3f863dc1435057733b58a3b0e695d4c"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","36910a28e671ebbf528a481a3c400d4c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","bb479b8dbed13001c64297348908f10b"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","2182a11e8bf909144d2edc13a4c66ad4"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","050cc2bf59f1b6c1a6cb28cb8c96e663"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","61fe3584da6dce9b61f835e64df0379c"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","4a5caabea8f89f2436da37b853bd3c55"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","baf0708b517854a690a3da3dce517e22"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","ccadbc381df7baaec63234a48bf4b9cf"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","2fbc90ea36035c2598d6ac011d5c4645"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","1a4ae3e956ef66027bc80f3a19e66c3f"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","b27a54407ef5382888b5cc7837a3c4ac"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","ab05fd89debfba6911b6192032758a42"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","2ea3dc9c9e67875291cf6b9647e0d6c4"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","693d97c0d82e80765a25806e7a8e0f1a"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","d6eae79ddf5d038b08050b176337d925"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","3cd843794cae7626f3e0b1673011b058"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","6d84a135c301d10098d4e9e02bf65b9f"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","3f715f9adc9f846df105964ae3b17486"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","5c67d99ba2ee50462cfe186a75781b07"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","23b7d96debbacc308f40ef3b25042895"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","28a1862e48662be1eef13119a64e63b5"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","c2a7eef0bd929e87b968841f2b972f71"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","6f5fa08ad86b2b5b6ee0962f2dbfa542"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","ed1c97dbd4137a7597c1db85496a9f08"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","d7d9f809b65f04a91ed665ddd2592d38"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","14a4e1568ad036e051d31336a0cf8ec0"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","e6ae4764f77abc0594f3c688861b55ae"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","f0d176ea6bc69c72700dace506a5bdbc"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","f49781c766accf8536b57106a54fe5e0"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","ca6919f85eb128896d8cb8f6e93ae22a"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","795a7c1dd137b1fc7c038f1c8898a6df"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","897bc00995ba163b016a721e54d99359"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","8e63f16f85afb2a263467ca3cfeaa109"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","24e5209313098ddfa3cd88c6f4e34275"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","50c7bb0832ec05bef2caa95bc10addc6"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","2920bc0045599929ca379d55827f6dad"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","f822540b9ea20191441ec806215cfd49"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","f840240ef057c46cda9b732be1193acd"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","2e31d8f015ad248fc09d4f6174cf96ec"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","9eb5e15bdae31ac802cd412224c331c3"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","497a216d3e1d5b2dec910c2b8f0d6c1e"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","11e5985ccee02334ad02d28b23a56258"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","bb1592052682c3261b1c4ac6b1c37634"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","038dd2adc035dd98ceabdd41318a4b5d"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","7f9b2860d9e1ce4a4ecc829592caca23"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","1e0fdebd1f5693c66d123ff4f079d1da"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","cf4c98e1e0a86827013dcc2b5f3ab6b5"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","9e4a279d91074f3f73f96ba7064f7d1d"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","2b03284750e986d3acd9e66809e1312f"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","3435e122069446674809da41069438ef"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","f2c5a157743109356535e4d678ac4844"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","b7e77db3585e781d49955123707f5881"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","b95e9b87473297bd519a40205d54f9f4"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","f4373686104ddffd2ddd032be24817af"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","6f6edce4b43cb84abe74ed7859c7f537"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","4861e3d80a27f7310b5f39099c89ba78"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","1945ffcf599c6d56ac7f2b5d7521858c"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","99132458a7920676172b588391c461b1"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","28891d233e931d20051e05ce104b310c"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","2c7bf7407e0b2bcf823261118429a710"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","98e6e0877edbca29b86e39a2c72947fa"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","454b6e1dd9365c769e1b1b861c53a19f"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","eea6908c7032af1af7bb7956332c8e68"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","55fe5618db1017a1214939fa0bc8ee6d"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","8bb00d1dc671e06af6cdc1363437cbdc"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","23e224e199e2e33ab531eda1d93148c5"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","9b4a3deff2e338d4932d7faad32ba50a"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","c791708640c5043ffa1165ae574aba9d"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","83db9003af94da616c3577c9e2aa4457"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","a72c2c957f4350623bd699c79eae328c"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","3994eef78dc64797a2bc8012c64fd850"],["E:/qinhao/hexo/public/ByteDanceVerify.html","d7c225f41642bc9ec9907678b8d9eec3"],["E:/qinhao/hexo/public/about/index.html","24364ee632ddcd10a25750be94da4b73"],["E:/qinhao/hexo/public/archives/2020/01/index.html","b29964620ecd00e479a06136ee6b4870"],["E:/qinhao/hexo/public/archives/2020/02/index.html","1f34a999b8243157a90ea04829348a8f"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","1a7ad0106444e7c5e7e30537c5199dc8"],["E:/qinhao/hexo/public/archives/2020/03/index.html","2b47bca7f10e78f14ea8263c832b0738"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","45a5cab6c8dc9bbac5111e3e6e31aa1e"],["E:/qinhao/hexo/public/archives/2020/04/index.html","b62ca35857a59ab79c1b7c17425d5cf0"],["E:/qinhao/hexo/public/archives/2020/05/index.html","54e51356b726a143403c74aa8bea87cd"],["E:/qinhao/hexo/public/archives/2020/06/index.html","c7dad9a8ed34037bffb70bb271017e1e"],["E:/qinhao/hexo/public/archives/2020/07/index.html","7312b3e5c865cd3cb457f7962f4cbad7"],["E:/qinhao/hexo/public/archives/2020/08/index.html","ec7ef3425c2496602b2f35c0ba74ab02"],["E:/qinhao/hexo/public/archives/2020/10/index.html","7ae432f009616150320492b26fad99b6"],["E:/qinhao/hexo/public/archives/2020/11/index.html","c751c5f06c4bf07d8f3bf8466ceb0689"],["E:/qinhao/hexo/public/archives/2020/index.html","f9bd8ee4dd6740dc74c056237288c8ed"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","d8effd4d84e1067a3663532a15eaf8a2"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","b7771a4a473b7ea2a58e98108cbfb8af"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","de3d144544a2f2d2f6a93f090edc7f32"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","3f2e2f8b828c7a46cd536da0a5202c2d"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","1a20a2309ab63632ffa8c8aaeaa65789"],["E:/qinhao/hexo/public/archives/2021/03/index.html","65e125d48b7ab9d8a0db43a4cb162251"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","8bb4c3306b2d021e9df29c6e160342e1"],["E:/qinhao/hexo/public/archives/2021/04/index.html","986ca379f09174909d3ac95ac55f82f3"],["E:/qinhao/hexo/public/archives/2021/05/index.html","729ea1c0d2ae3cf94cfec5d1d9980856"],["E:/qinhao/hexo/public/archives/2021/06/index.html","0f9027a2ea45497f3b66fef4a993dfa5"],["E:/qinhao/hexo/public/archives/2021/07/index.html","8b10aa10197a4600f4f1f28b57e2d9b7"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","ad36bc7f61eb94aeebfda5c099df4ab2"],["E:/qinhao/hexo/public/archives/2021/08/index.html","4c9d1023f3b43648418ffc4c909bd041"],["E:/qinhao/hexo/public/archives/2021/09/index.html","236c63b39f69adea3d3ddeced3fa4085"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","e27766763f7ac5c90f9fa28976e80441"],["E:/qinhao/hexo/public/archives/2021/10/index.html","2e0213e57b8e500651c33dcf5095b9ba"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","c646343341f748e9478f94efec705cd6"],["E:/qinhao/hexo/public/archives/2021/index.html","23a808ecc7d91f325dcc104224529030"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","d54c7cbbeb6ca6c49709e506ed511080"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","1392f92e725c4ce91937737640ef4a8e"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","b6dca0f83e0a708cf3dc580de4081bac"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","66fbc883f3013e06692d06604233b873"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","3dc916c1b4fc4b0f383ad5023eb7a798"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","19dfe4dd41c59ea15165bf34a1053112"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","a29f78cc9acafff73a7a523f0b601ba2"],["E:/qinhao/hexo/public/archives/index.html","38f201538d7580a9e19a83c7ebdaec60"],["E:/qinhao/hexo/public/archives/page/10/index.html","18eecc8809d4972950ffa27cc16651d0"],["E:/qinhao/hexo/public/archives/page/11/index.html","18eecc8809d4972950ffa27cc16651d0"],["E:/qinhao/hexo/public/archives/page/12/index.html","18eecc8809d4972950ffa27cc16651d0"],["E:/qinhao/hexo/public/archives/page/13/index.html","53f3baba16c252918c32571017b88efe"],["E:/qinhao/hexo/public/archives/page/2/index.html","38f201538d7580a9e19a83c7ebdaec60"],["E:/qinhao/hexo/public/archives/page/3/index.html","38f201538d7580a9e19a83c7ebdaec60"],["E:/qinhao/hexo/public/archives/page/4/index.html","a66d5b31e8ca5b3a6546f5e0ab84d509"],["E:/qinhao/hexo/public/archives/page/5/index.html","a66d5b31e8ca5b3a6546f5e0ab84d509"],["E:/qinhao/hexo/public/archives/page/6/index.html","a66d5b31e8ca5b3a6546f5e0ab84d509"],["E:/qinhao/hexo/public/archives/page/7/index.html","a66d5b31e8ca5b3a6546f5e0ab84d509"],["E:/qinhao/hexo/public/archives/page/8/index.html","18eecc8809d4972950ffa27cc16651d0"],["E:/qinhao/hexo/public/archives/page/9/index.html","18eecc8809d4972950ffa27cc16651d0"],["E:/qinhao/hexo/public/artitalk/index.html","7dad7480b5de7d70a5c736d4db4f6ea6"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","25bf3924f808723a9096b1b650d2f612"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","c275f6f95d9134de4e1c3295e8966ead"],["E:/qinhao/hexo/public/categories/Java/index.html","39e512ffd52add91070d84f3bf64129a"],["E:/qinhao/hexo/public/categories/Linux/index.html","b2df8940d48ee525afb4d690349bb799"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","cbd99a03575b83c88b75e908ccc52eb6"],["E:/qinhao/hexo/public/categories/Python/index.html","736ff81ca2e51a8335cfcfaf23f51207"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","62f325ebfa69c801e3204d1dcc853c48"],["E:/qinhao/hexo/public/categories/交换机/index.html","757d4fead0ad913b43428ce223435931"],["E:/qinhao/hexo/public/categories/前端学习/index.html","28f1c85b82af525bc7271420962c0f9b"],["E:/qinhao/hexo/public/categories/华为认证/index.html","f380bdbf5c182571c101d184978ab381"],["E:/qinhao/hexo/public/categories/小技巧/index.html","b574fe81a9e9464b86aa3d82f2501134"],["E:/qinhao/hexo/public/categories/操作系统/index.html","80315148aa9e902613932b211e2c3652"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","0e45ca9a3f9f943ed5f766e6b3e2ac35"],["E:/qinhao/hexo/public/categories/数据库/index.html","0a7e869c1664d12ce603cf007597a8b0"],["E:/qinhao/hexo/public/categories/数据结构/index.html","11b4402e37894ff68f02fe5cf2002c05"],["E:/qinhao/hexo/public/categories/服务器/index.html","199984a9026f1de278209c5531487486"],["E:/qinhao/hexo/public/categories/算法基础/index.html","7df0996a94f76ed32caa41f7bef67069"],["E:/qinhao/hexo/public/categories/网络安全/index.html","b187e75e67aae5609f7600dc9bd3c8ae"],["E:/qinhao/hexo/public/categories/股票知识/index.html","a08f8aa7defe4e6cdf02e69d63c3d17a"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","82e913f26b4efaecc423400026a34b3c"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","7d8872124dbaa58b078ed9f7b2baa994"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","c0771e02cf7799aaeab3febfd310bdfc"],["E:/qinhao/hexo/public/categories/软件破解/index.html","42170a2267cb1d78b0b4288f4c0cb309"],["E:/qinhao/hexo/public/categories/通信技术/index.html","e31ee6b6ad09b0c8553fffeed7a81c76"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","ceae1e184ea189da8ce9e9400ab3bab9"],["E:/qinhao/hexo/public/category/index.html","3601ad715c4c09c8f263810a8c298c05"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","fd3fa8667c0355c8552f83afc3348963"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","42fd03d74753bf0029bfd100eb8a5643"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","fb4c76ee9c54a5b698e1ad431d4e9f61"],["E:/qinhao/hexo/public/page/10/index.html","4e65be7d99e5a82a7e521e083a6df92b"],["E:/qinhao/hexo/public/page/11/index.html","741c2edcc1bf3219f006d7bfe13a820b"],["E:/qinhao/hexo/public/page/12/index.html","6b08b189d84dcee53431ef976b9fe3c4"],["E:/qinhao/hexo/public/page/13/index.html","8d2bb981d37b75cc50ebcc8c0f68a9d5"],["E:/qinhao/hexo/public/page/2/index.html","1db927b165f760a40b2f5a18533ed48a"],["E:/qinhao/hexo/public/page/3/index.html","335881737aa030f68f711647099186eb"],["E:/qinhao/hexo/public/page/4/index.html","63f05bbfc59b5ca4756995c9aebc8251"],["E:/qinhao/hexo/public/page/5/index.html","e08af927e6c2d9b7dba93205abb470d9"],["E:/qinhao/hexo/public/page/6/index.html","9cff17d91372104935f34df41e3fea66"],["E:/qinhao/hexo/public/page/7/index.html","f155c467694ee8e9b98e8650d7e1a506"],["E:/qinhao/hexo/public/page/8/index.html","b69980fca806330acbad59e61f2a904d"],["E:/qinhao/hexo/public/page/9/index.html","16afc2daa1dbe08fb13893c0937b87a0"],["E:/qinhao/hexo/public/sw-register.js","393d07ea4bd14a03fd7e5a32ff427e1c"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","f08b3374fd5640dfa5ac13bc04f4156f"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







