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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","513381374919968ae49d9a21bbcf6bad"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","68a474bb64040f259feb7e78feb9189b"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","47304f0755f75ddb92899c02da6ae901"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","9c030c94679b8beafbf09f54b84faa3a"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","16384bc02294d70aae9faeb87c6ec47e"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","ddc27338b5ffd5381160662d7c66bf7e"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","91f91227217dcb03b2935309864bb444"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","ce7bc92b5965ba07f84528697ca34631"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","afe80eedd688bc360479a2a610dae2c3"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","681750ffc11c9eb33506ec87712ff4a6"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","8e728d899d3f8109b6e7d380a06cb13c"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","293da1b5973fea568c013d561ee43362"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","07273024e7068f6502450e07b8f30e0e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","20fb17933a0363f48bef446b3d292338"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","62dd8b014eb24422fcfcf5ed588b21ef"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","39ec82f669c29ae8bbec097be4c347fa"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","5c8bf46d6bfd8a942912f6548d58883b"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","685d949884460869b2d0eada529ea5f4"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","315b1e73cd5290ceea951a81e6fdd5ab"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","bc7f90f394c6a028909583f5667ea035"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","3baf532fe9fb42a8b443ffd8591b6cdc"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","885822c0f5a3e69c1342a07fc857175b"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","c2e886213fd1d5b920e79fa61c8582c3"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","fb191ce3814f0d81d338478029f01c2c"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","de226c5f669131cefe31b40079dec65f"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","96af71d53150455a7b916c6d669befae"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","befecd1d502f2577f9bc0b9a89130cce"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","b4cd74dd501832a048bd51a225f43aaa"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3d49980608eaf169bd4408d63b2dea8e"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","9595f082bea664bf0cdc229a1b1ee6f8"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","9dbcd3667544778afefab9d44c8ab5cf"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","f118347fc26c6d897cd7f2cad512559b"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","c69ded0cca823b57d3548d3924af3393"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","b09dadb5dad3ee5cd547e5414bc06678"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","f67576ed37f355291ad563f3c2c1b3ad"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","1aa5372863565cb134c2cc494cbe26b8"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","d71737de37e2ad5cafed5f4dc24ee311"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","2c4b66f5040f4be22698f759c3fc3a73"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","a0732164f742e31aa3549a1136172d38"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","435b54f53abea4e2a81eca0f75129000"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","a26083b5cf5f86a3f0d5e6746f6137fe"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ff1baeba36dcb84c255974941a898227"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","ffaa44563435a8ab484ed1bbdc481b34"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","46112b2fcf49a1c730227e7829d48091"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","3ffb871a024e1be5a6c77869049b98f2"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","acb9a81601c6ab330a280964055f6299"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","f6f2e8fe66996cde7561651d5f0e349b"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","8e9ece54643aa8122a5ce0a7a2abcac0"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7e7ae886a4a953e9679573c617336740"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","2ee28decc3f4186c237de57380270e42"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","eb41fabeb11768f77840b8eacb449a74"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","3bdcc7fe497101ecbcbd0067bac98524"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","c5b8c31412413ae2c0c08212e3e77ec5"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","099c3543eebbe919c63fcd57aee8adaf"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","787e98dc684bed578165b0fbcd58c751"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","d34d2b3998d21b86d69783f90a9e3d3b"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","9d7f889793298c481a003e2e4d20ef91"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","481e12554929abd2a84f3f7c16319b94"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","7bcd56633bf7810463e4e272775726a9"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","922e024a225485c84129491ce3dcba82"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","01c1cb034f50181db828130b982290fa"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","6c633bdab8cffbf56e101279ac3adaac"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","5c8c4774f68ea2039bb8e42172683274"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","9ac79565302413566dee5a1a1b80c2e4"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","71b3fcd1a5e0478b4476f19f90c76e31"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","8908cd61cd91adf4cd0258a157231e81"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","afe5018c4188b8ddb574b75e3390d469"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","e67b48aa1573e633246d2a28e9b88e61"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","658d641284bc4f844d6ccf8cf881bb2b"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","bf826d15a29495b9e8462df5f621efaf"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","96739ef77e2bb14d5126a5a938a934a5"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","70401d1996830627addd83b5e2826150"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","fe983eac79d6fb0979b7144da9345859"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","1ac87691d684d8e9e24aaea1f9a66c3f"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","7ff7493ffbb9f76593216dd66901cefd"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","413300cdd0f7991668ae7d18ec1d7dcf"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","18cf5e68174b71b22167433d04f5b127"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","77f2002bbec7ce8c25e960d64e151fd9"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","99da7eba757689594c6399f5dab5d6fa"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","90dc315d6c3494d5e7073111f973c0b4"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","8c4f2fcc264e7d834d9b02ca6fa4836d"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","a836631efb67dba43d80fe0eec90840f"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","8361caac2bed7dec668d68ca73d01034"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","f614d6c511366912f02c6d19b3ab27ad"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","04b6f442d912f0a0bd39bd82cd03b299"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","b8a6a58d9c06f07321c382f03c90c314"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","d5609abd974130106f50a42b3ce91f15"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","c256e552dff05451a5c9ee3124bd56f4"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","24d6426152ab39483549f0aae57eef76"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","99968da0e2501dd657306fb9a570d1e0"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","52f0c4050ce261c5e1d83e27fa79ccd3"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","9e2171ae134f2eb8455b12d9898f337d"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","89b2f29377c634cb3e4ec77f048c0730"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","b6cd835c492021e43cb70b9fbeeef8c5"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","7277f49a3fe2de6f1a32990cd0f0cefc"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","87d8a8a7aa43c226a08b3144536208eb"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","25d978c1aae748ee449d0a432b0827c1"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","16e4e590bbcf5e9405b6b12d58a31cf0"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","4b87ad8ac96c7fe0bf094adc0d071420"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","8b98d0b764f3bf738055abf02e10fee2"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","3722f6c95ca007b67c49829ad296367d"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","662a7c2c99d1da619719946627704f7e"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","d84c37eafa403fadaaa1010f3c956812"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","6c74f17fb89d465956980ce4cd4ed151"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","37963a6fef60ad05bf7dbc204ed6c63c"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","377d6100cf9c225ba6b12a322de4f7d7"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","1046caaac6fa3906a6025ae2d75482d3"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","13249c53ae0a5d36c0a3ae23fd50a67e"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","176d9ad13a9d68d48849b415e520c2f5"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","1dfc5c3ded188ae195667f56002ed3a8"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","9341bf226ed8470f45eec33b02ac9cc6"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","d3d99cfb60fe62e909b98371c7009bc8"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","31e4b4894f319cffcd88127a005f0031"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","76f9c963b511bab7dfa29f5bf59a762c"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","b87765e383f889e6a0942b09b1dac987"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","226c7d0854020dcb088543964e62b50b"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","f2d6d4f166b4a622cc6c9ef32a8e89ae"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","5edda24675ed33a92f64627edb404c76"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","5da3bcd31f0c36e9398f31d839a70240"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","f239548f17b67fc421ee77479a3169f7"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","21d4353dc13280a614aabf6238a854eb"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","c0e4660298a8006ec2c26c4fe5a2d2f7"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","268c75ec021e8020dda81906c7e4080f"],["E:/qinhao/hexo/public/ByteDanceVerify.html","5f346d10a2d57850d11005098bd249fc"],["E:/qinhao/hexo/public/about/index.html","99d43716a11fbb740e781ba8f584ca72"],["E:/qinhao/hexo/public/archives/2020/01/index.html","ccfdd28063c301f40e57f880f8f5b4e3"],["E:/qinhao/hexo/public/archives/2020/02/index.html","6067028a206e7ecc0926991cf3e99ba7"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","db8c130dd72810b5373a02b3ade8414d"],["E:/qinhao/hexo/public/archives/2020/03/index.html","0e4821d179e149bf201c332f77b6db23"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","85e9b6cdc120098e6e07bf894937354f"],["E:/qinhao/hexo/public/archives/2020/04/index.html","0208098c4f7d3ce902e8f97110f9be33"],["E:/qinhao/hexo/public/archives/2020/05/index.html","faf45849f065fbbfb5a20a9a3cefc8f5"],["E:/qinhao/hexo/public/archives/2020/06/index.html","e76e2701ba72101fe8e35c5f88386091"],["E:/qinhao/hexo/public/archives/2020/07/index.html","3ce47660cf39bdce17922a72970ec106"],["E:/qinhao/hexo/public/archives/2020/08/index.html","88bccaf0bf121cec5c1eb53e7ca4f86e"],["E:/qinhao/hexo/public/archives/2020/10/index.html","85bb22ed9dc3aa2f7166768e0f6ec36d"],["E:/qinhao/hexo/public/archives/2020/11/index.html","668132cb03c437814e52ff6e1850d479"],["E:/qinhao/hexo/public/archives/2020/index.html","a067410638d257552069198454f7c177"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","9d31a2036bda882579aa5b4ad0b64287"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","60a5ad912591676e5c827a56da566dc2"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","136dafbd5fec58f62499b6bdbcc3542d"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","49da63792acae23af879865beae2fd56"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","ae0715c0342bf343c3d2f3e532fa3a9f"],["E:/qinhao/hexo/public/archives/2021/03/index.html","533f29682baac89119cc6e0b852a11b7"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","1ae4a934c27fb65d41af50c82204af70"],["E:/qinhao/hexo/public/archives/2021/04/index.html","77dccf4fac9fe6fbd03618d0f9856d02"],["E:/qinhao/hexo/public/archives/2021/05/index.html","66863da4d69a59ef6916e658977368d1"],["E:/qinhao/hexo/public/archives/2021/06/index.html","1c1fd4087cbc5e8056f115661bddc4f3"],["E:/qinhao/hexo/public/archives/2021/07/index.html","18c498174a7d50a46b3885c589bc81fe"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","ef1dad098fb92f09d543d8879ac7eb8e"],["E:/qinhao/hexo/public/archives/2021/08/index.html","c64b67ba2a9363597423a8c00163e858"],["E:/qinhao/hexo/public/archives/2021/09/index.html","bc40308ebe664a16d0a13c7e049e5194"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","6a1ffe5af7cddcde3d72a8f8479b49e7"],["E:/qinhao/hexo/public/archives/2021/10/index.html","d515aa480068fb03f1d8851b297aa4d6"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","14b9c03fa039b7cfebf4d859d94ec18b"],["E:/qinhao/hexo/public/archives/2021/index.html","b44be1060fce89c6b2315e11b64fe8e6"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","87116c6e33fff5397c6bf88feab16aa8"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","fd105fa81e9b34e7f057e07f6f08a348"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","1f16ba927e73375026238852fcd82ba5"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","107704cc8c363e11a4117c164f47365d"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","b4b198cc71aabc22b5e234d0173f0fb7"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","87bebad92fb735ce413f04033a7bc1bd"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","10caac6699f2d6cc4f9e38be4fbac699"],["E:/qinhao/hexo/public/archives/index.html","29de6566f54100726a5a9f148bcaa274"],["E:/qinhao/hexo/public/archives/page/10/index.html","86dd07a9815a5c2cf255c06bef8d2df8"],["E:/qinhao/hexo/public/archives/page/11/index.html","86dd07a9815a5c2cf255c06bef8d2df8"],["E:/qinhao/hexo/public/archives/page/12/index.html","028392a54e4bf9bfbf8c05e72a2c34c9"],["E:/qinhao/hexo/public/archives/page/13/index.html","028392a54e4bf9bfbf8c05e72a2c34c9"],["E:/qinhao/hexo/public/archives/page/2/index.html","29de6566f54100726a5a9f148bcaa274"],["E:/qinhao/hexo/public/archives/page/3/index.html","59377cd606cd181fbe8a8ebb98605901"],["E:/qinhao/hexo/public/archives/page/4/index.html","59377cd606cd181fbe8a8ebb98605901"],["E:/qinhao/hexo/public/archives/page/5/index.html","59377cd606cd181fbe8a8ebb98605901"],["E:/qinhao/hexo/public/archives/page/6/index.html","59377cd606cd181fbe8a8ebb98605901"],["E:/qinhao/hexo/public/archives/page/7/index.html","59377cd606cd181fbe8a8ebb98605901"],["E:/qinhao/hexo/public/archives/page/8/index.html","86dd07a9815a5c2cf255c06bef8d2df8"],["E:/qinhao/hexo/public/archives/page/9/index.html","86dd07a9815a5c2cf255c06bef8d2df8"],["E:/qinhao/hexo/public/artitalk/index.html","cd4e23d3fe622545af14dc0ccc40290e"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","77874fa53a77ba5e7a8b62bf1d562672"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","02a973d23b8b2c0f493b229f83b31bf6"],["E:/qinhao/hexo/public/categories/Java/index.html","81d39b69567a85a295da1407e0257b16"],["E:/qinhao/hexo/public/categories/Linux/index.html","544134cdbe8d8efb1d3b0a10b4bc1ec0"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","d4a1f0b7bdba7e3b0a22653011569724"],["E:/qinhao/hexo/public/categories/Python/index.html","67e323cc255ec85db842a760d0e5eadd"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","1363c672280675e48168728becc6955a"],["E:/qinhao/hexo/public/categories/交换机/index.html","1b300857fe7d506d707c463320f03ebb"],["E:/qinhao/hexo/public/categories/前端学习/index.html","ce090baa70362528534626e22845528a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","0f329cb5f0665b5bf748e650e4dbefd4"],["E:/qinhao/hexo/public/categories/小技巧/index.html","3611487409833c86ece9dd9dd89cf3d5"],["E:/qinhao/hexo/public/categories/操作系统/index.html","e9f70893df2f885dcc5e5679002d648e"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","c2f56eb63952b11cfe3ccc3abd8dfb47"],["E:/qinhao/hexo/public/categories/数据库/index.html","030da660f9ccd71e92ff44e2c93fc6ff"],["E:/qinhao/hexo/public/categories/数据结构/index.html","3d782fc7a9290fd461f613ee5cad8900"],["E:/qinhao/hexo/public/categories/服务器/index.html","e41c03ed0acc6417e876a783c5f145fb"],["E:/qinhao/hexo/public/categories/算法基础/index.html","18577ed6f21e1e7b739a846c15b7cf31"],["E:/qinhao/hexo/public/categories/网络安全/index.html","9044f0fed24f8195fe9ba0e7cc77dc36"],["E:/qinhao/hexo/public/categories/股票知识/index.html","f5e98fa6ae25cabd3059b2228c22929f"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","12a81e8502dfabb5b61944c967222a8e"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","aa63ce1ee531ebcd1ab53ad408f08f61"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","821f089a3590e4fbe142134ca550ac6d"],["E:/qinhao/hexo/public/categories/软件破解/index.html","661066591f341af4e8040039fbdea77c"],["E:/qinhao/hexo/public/categories/通信技术/index.html","72cef80ecbbf926e77a4ac48f2436398"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","f1c95a792a24edd5c7b0b4dabc2d2632"],["E:/qinhao/hexo/public/category/index.html","43b47e8ff2f4d8b83778fd646b10c75f"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","4d13917ca8737c060a30de2d447af6d9"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","5b98c560bbe93a41440fbe4979022fbf"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","fd71c95b2e176d2956040104bd479519"],["E:/qinhao/hexo/public/page/10/index.html","52409ac83fa82971cb5c65507df748bd"],["E:/qinhao/hexo/public/page/11/index.html","abbdcc0828b0978fb3796610aaa5005c"],["E:/qinhao/hexo/public/page/12/index.html","e94b54743e66a7f13c386fd272d63fd0"],["E:/qinhao/hexo/public/page/13/index.html","4582a1003cbe1c17dac8a263978c7601"],["E:/qinhao/hexo/public/page/2/index.html","cac1c41880754574a4a9402b8992623a"],["E:/qinhao/hexo/public/page/3/index.html","9b3e564cbd2b70ca13724e9accc28763"],["E:/qinhao/hexo/public/page/4/index.html","cc4cf0abfc6c05df39a9b52dce2183b5"],["E:/qinhao/hexo/public/page/5/index.html","66325169f3ab8ca43a1599383b395a58"],["E:/qinhao/hexo/public/page/6/index.html","ad1375686a9da053ef0936555cb54f5d"],["E:/qinhao/hexo/public/page/7/index.html","906e1fa4a0227d4db1224ce8f62c4729"],["E:/qinhao/hexo/public/page/8/index.html","01515a476e84fc9d0fa6187785bd02c9"],["E:/qinhao/hexo/public/page/9/index.html","e91cc84877c4ba4f6cd0cc2ca732cdf7"],["E:/qinhao/hexo/public/sw-register.js","4b806c8b7c34a3954e6a39124eac4a4d"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","92733ce76ada34b2be5093b668897312"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







