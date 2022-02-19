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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","fccee5166e139a329381ff1f9c07c29c"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","1d1ccaee48a5ec20b96ba12e5f81cf18"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","7fbffb49aa49fca9c7266d285d265511"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","40afc50f40a501397afb5be09fbfe4d4"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","949e4f39051900b9f782aabf8b584a11"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","1ff74e756f266e2796ba6d93891622c0"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","c893b65529c4e3a1be60c177cc2a44ce"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","d1d0b6ffcfe064c3b8e9ecc6d5610211"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","4dedeea722041b3968cb69eed2ff1eb5"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","2fe3ca18eecfb6d0b7e5d0667d496cd1"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","75327ecc8ab4cad1db9abb5fc8b657a3"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","468cb21067c8457f5c3ca41dcd8c0320"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","775341e10518b4d6380ea492d3edceab"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","ad0967a798a288dcc6f7021e1ff18dda"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","b04b49f9b76137806f1ade65f9ab2e41"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","da6ea6a9512e5c831a4294ca8997a72e"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","ccd1cf9e0ee72e237088323a1b512e67"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","23f7771af1caaa27ffe9df1530ded1cd"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","5e260efac389cab7431566f760367882"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","7f05d6c7019224a0f25fd2d63b8e77fe"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","16553ceb9f2fef2cc5c6871129c6debc"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","b3e123da9b319af263c6710f4224e282"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","8a1810defb1e05d145a60e43c78076f8"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","97791f7ca44ab10d036ed220f121795e"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","f25bf7df5a835573330f34ffb2433034"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","0ad3e4625ee34db37e6cb6c4266d0b52"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","ccdbe6202f7a32dded6b300ea9f08c5c"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","5d842b79b2a9e5262180845eae69acb2"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","8484720e95e7940d67b43806b1f561a9"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","dfb5caada76f48a6dda6d771e6974b4c"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","54ec632ea84b3e4c480073ae005b6d77"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","4ba3c91c3c794c75622087eed46bc982"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","525a6c750624bd13e3ca80758baeb688"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","00b123196a599c519f1eec7eecdcd6af"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","f43c2e8a1606a640cadef74c06f1e05b"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4cb0fa5a57cb67638ad3f76c1c9dd200"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","9af542c9205bb5484a6306735280f767"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","4977b7c5cafd14bf50b7ffb5e6b0e07b"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","08480e1c60815704a5634b0745eedbf4"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","4e9427ecf784e2e28f4a992f9dd8f52e"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","07383163e4723f63e85e8b9dd59b372e"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","d5c615c28115ed90e8421da03ad3cb2c"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","70d6910c0f3dd655753eae6abfb6ebdb"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","59648c3ff4f0acd6a73c133efe84eb1c"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","57fdebded8eec14617e2cf5dc0988d33"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","c9eaa657ce32386014b98df8cf7863e1"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","ffab125b3d26ecb9146d833e2ad38670"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","39ec792578d71b8b1d93a9bade81b164"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","3238b91c7a9487d8503c763405eff8b7"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","43b0ba0df07cffde384a0dbd2e791693"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","bea16ec6223055e6c5040408df71a0cf"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","03e6544d4c73496fae223360fd8b5d2a"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","9e47d68a2cb65fc6c0f1265bc2343317"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","f25b6ccc4d42b394e75864173c0e22be"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","012c2b7dab919698f8225be8e7f04e39"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","d03b1476fae2252e9241d9fc17196975"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","42522c40afc149f6ebaed3358b11b60c"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","c7ca4d1e3081d5838893f49176afcd39"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","f1e6e6b1eafc5db4e71b7a017ecf294d"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","908f971461b537b996813347652e7f87"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","4038d3fa5bedbf87a5bedce9b7c6fd27"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","6fe8556a7f5409640a9370b2eadac3d7"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","5f33845ac42b1deaeecc45c32245e893"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","362eaf4d33fbb7334a12e6c943294efb"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","92057622810043a2b1e4b955a0a94399"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","1893d80fc9b7976d36f02e833052ac16"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","28eaf30a4eb99515c56223848e0899e2"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","3165d963bc509ad70080d7f52f84764a"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","b455d06979acfafda5c0e65230b9a423"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","0304737677c5d5bfa60103a666613b03"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","f5fa0687fc2c029bf95947a402588150"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","460fcc1c15a6c258db11f7c551a5d18e"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","964c6e566e5f03b2cc9591f565cfcfa8"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","40c3f0e9d5401459842768c472eb62bc"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","6a738e40d4a2e6a1385e9c60b83d63c7"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","1c20ab361377ce9b21f16a899c91c419"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","182459526129f4c0a21490bf12d8b437"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","221b05da9c353e9b328b269ee69bb337"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","f3ede6db3b3d2a80c32c463ab0014a27"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","d51151c92ee6b10c88e359bdb5faf9e3"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","6e821467e8c47a85dd63ab783370a3c8"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","02a1fa611992cde1e389ffe9fa41cd36"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","79fa04e4a8fedecb08537415fbfd5710"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","eb8bc5aa706022d606eae6f56e8beeae"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","4f7a5ef25c3bd41eb799dafc7e9d8faa"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","a36550109364b0982cc3af20938e8362"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","a7aabec4fba75b51548439c79f6d3bdb"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","11bc5791ce064f44efbd1f155d66733b"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","15b7bc7d632cfaf8950a3c0d4458dee0"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","23b5d17e517cca1c56584b1a308ba1d9"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","20a0aff054133d64d80feaea356182c9"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","9ec0caebc6467e6a61e724c3c172f4ba"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","a6e2e43c8f19e667f8c26cd8364a95a2"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","66b3f6e2544c25b4391e4e7c3eaaabce"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","d9dfaacd7ac8f747be595b5674179f77"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","0d54e5fda2f6f672628601e70617ddeb"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","514b75f5eb4f335171f0728b41ad7b92"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","82334ff3ef9602726d99bbe145d0a651"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","529204779e5643669724240d648e2e50"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","cdb4c3b6ffbbad47aff3e5cb9d2fb794"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","9e81b626e8bfc33d14de270086da8f9a"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","4d4fc3ff6d4ad2da7a89f398a5c0c932"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","49133ff5df394f47d3340cbcaaaacb4a"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","2f109301be806e1bba96f0cd743ae433"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","af0001de9e27970c3afd8d4cb2c3036a"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","11a7f0706821b717786e3e10e128510b"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","9cb49fa66c5d6c491d90d0e1eaa0898e"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","0216807b34ac822fdb2703b1808d6652"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","3e68aeb1e3db58f0780ca35dff81020d"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","f64f2fe1e8e6eaf8cd5ed9e7f19adab3"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","a3b36a9cf05a54027563bc67f17b87a7"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","525b50a507917b67bbf3f2ba1ef90926"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","a0bbe024f1b21a76edd094ecbb0654e4"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","066a230c15082858cc0eb0fd52ac33f4"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","d7e31291dceb0f60e2ca4d86aff2c582"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","20a6f444c634964a2d8eb55b1ba08ef3"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","87722a5de6f4723e3cebfc8330f18ba1"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","74148d04bff4e0600c0a41e44e7ff9df"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","0aa45c76cc2562378978b6e3f3da6597"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","dfbabd95d841880143d7a2b087977379"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","2d1c4018a70464e92db46c963199bacc"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","6713195022ef7430e5b11bde4937c496"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","523dc7390acbd73f1a9e6c37a0afde01"],["E:/qinhao/hexo/public/ByteDanceVerify.html","5ae5d19ba579a70f51b5e538506da23b"],["E:/qinhao/hexo/public/about/index.html","277cb9eabb242a711707fc10e1ca0400"],["E:/qinhao/hexo/public/archives/2020/01/index.html","1b85823be9bd9d18fb52f1c44b059c1e"],["E:/qinhao/hexo/public/archives/2020/02/index.html","9d75d9f6aab2ff1c8092222c2b0f4f4a"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","f9f61e166ccb18e7640c634370c70533"],["E:/qinhao/hexo/public/archives/2020/03/index.html","310eeee237996ac70c5a87fce7363e88"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","2a1c623c32737ff9f5d7d449b997b86f"],["E:/qinhao/hexo/public/archives/2020/04/index.html","361a986fb12b610f26343f00712c12a7"],["E:/qinhao/hexo/public/archives/2020/05/index.html","a7d2998d7679562d0ec96a98fed4ce73"],["E:/qinhao/hexo/public/archives/2020/06/index.html","5e1e2b89790e6627db6516c12745f4d7"],["E:/qinhao/hexo/public/archives/2020/07/index.html","1b22ebc065b31ed845b16020bf5a569f"],["E:/qinhao/hexo/public/archives/2020/08/index.html","1008b504309460807fe3c5a9d35fea77"],["E:/qinhao/hexo/public/archives/2020/10/index.html","8d8b17a5af75c1f1f9a04bf655b8781a"],["E:/qinhao/hexo/public/archives/2020/11/index.html","25b63fb0dbe770e547c40e8954154b60"],["E:/qinhao/hexo/public/archives/2020/index.html","cfd53e9e9056013afd13050a612b9abe"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","e9ae40d63fcf224e7713af1d7e6ac399"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","4ecbd40f72c64d014a1db580691a8835"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","4959e807b7ac14fe20a296c7f19a69c1"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ac158ad6619b1c350caf7520957c1d4d"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","2219195184c195dcb9db4f241e063fc3"],["E:/qinhao/hexo/public/archives/2021/03/index.html","2b95823135a26e68e12af3ee954ba9a6"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","4ed3de2783833685c39f9485ea49eb0d"],["E:/qinhao/hexo/public/archives/2021/04/index.html","5ad464032d4ac30e9c8d8241de1afaaf"],["E:/qinhao/hexo/public/archives/2021/05/index.html","c0cc91fc53dbfe972b10e3524fd49923"],["E:/qinhao/hexo/public/archives/2021/06/index.html","1e70e6489b2923dac1643193da750083"],["E:/qinhao/hexo/public/archives/2021/07/index.html","a024fe6cabd4eed5de9d25e50c592f2a"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","0921162a6f4c6be1b39a8b6eecc92f6a"],["E:/qinhao/hexo/public/archives/2021/08/index.html","be850b87a20f60225c561d21c8f77a19"],["E:/qinhao/hexo/public/archives/2021/09/index.html","d66a3531f055f6f6a557cfe113f2b767"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","e2571b6d0f307215bbb2501f5d0ae7b6"],["E:/qinhao/hexo/public/archives/2021/10/index.html","c8ce889cffe389726b3ba1856dfcd9db"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","2370e2af293633b628b9a5afaea05eb3"],["E:/qinhao/hexo/public/archives/2021/index.html","7ccc6be191deb3021b41d29546b4f375"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","e0658140d08851357279eac48366543e"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","165997019efb6443583af92cbccd1d39"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","27cf586d3335f944ebcaebdd14f2d476"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","e316ace5fe39d1b43701db051c7103f1"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","0e654394f802355a5d7b5631818fabbb"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","609f2957a90981741ad9b00165389186"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","6f9329222ff3f8f03eb0b1cd0878ffaf"],["E:/qinhao/hexo/public/archives/index.html","360c085e2d0978bdeefd51218f1bc235"],["E:/qinhao/hexo/public/archives/page/10/index.html","9fcee5b524ba5b753e3954ce7fe654f0"],["E:/qinhao/hexo/public/archives/page/11/index.html","9fcee5b524ba5b753e3954ce7fe654f0"],["E:/qinhao/hexo/public/archives/page/12/index.html","44b02a39c8782826444fc1ade31cef04"],["E:/qinhao/hexo/public/archives/page/13/index.html","9fcee5b524ba5b753e3954ce7fe654f0"],["E:/qinhao/hexo/public/archives/page/2/index.html","71c3161aa907bc6e4228f2d752b98a5d"],["E:/qinhao/hexo/public/archives/page/3/index.html","360c085e2d0978bdeefd51218f1bc235"],["E:/qinhao/hexo/public/archives/page/4/index.html","360c085e2d0978bdeefd51218f1bc235"],["E:/qinhao/hexo/public/archives/page/5/index.html","360c085e2d0978bdeefd51218f1bc235"],["E:/qinhao/hexo/public/archives/page/6/index.html","a40daa20198d8f0516e596cc3c092410"],["E:/qinhao/hexo/public/archives/page/7/index.html","a40daa20198d8f0516e596cc3c092410"],["E:/qinhao/hexo/public/archives/page/8/index.html","a40daa20198d8f0516e596cc3c092410"],["E:/qinhao/hexo/public/archives/page/9/index.html","a40daa20198d8f0516e596cc3c092410"],["E:/qinhao/hexo/public/artitalk/index.html","9bb5620809e71b8d9f28d3a9d07783f3"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","f1b9fafa16f5390e1cef0271eae85a13"],["E:/qinhao/hexo/public/category/index.html","b0a12c7ea895c827da113b690cad0f80"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/friends/index.html","cd758f88228526931cd722309feacff5"],["E:/qinhao/hexo/public/gallery/index.html","e68aa6b20e453a3a48fde181209f7ff0"],["E:/qinhao/hexo/public/gallery/reset/index.html","18afdb9fe450b526ec990cf3e3c8b79b"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","0abf0c7029f9b0ea153a34ec91b85b27"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","9202d439f28b1eeff4bd7802f5e81b0d"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","1a1935fc414161b0e2209d8fb5ece887"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/movies/index.html","93e08a51e79e4f52b31eff1c27b20286"],["E:/qinhao/hexo/public/mylist/index.html","5264d126d39a11f3ebcb42b803be3cee"],["E:/qinhao/hexo/public/myphotos/index.html","46d0fd9b4a3882649355a46358ca816b"],["E:/qinhao/hexo/public/page/10/index.html","4f04bc684b19b3130905f0b3c6e21957"],["E:/qinhao/hexo/public/page/11/index.html","96525e8670c6405f8482598151d4e2e5"],["E:/qinhao/hexo/public/page/12/index.html","c4c4c6b893f4716b1d9a53851706d023"],["E:/qinhao/hexo/public/page/13/index.html","e6a1e46182cd8417c23561a934738bac"],["E:/qinhao/hexo/public/page/2/index.html","861bb453884c110ae15af2a99cd9316b"],["E:/qinhao/hexo/public/page/3/index.html","feab263b4242d0e87364a2ee0deed26e"],["E:/qinhao/hexo/public/page/4/index.html","7e4ee26add84289dea7970d711686015"],["E:/qinhao/hexo/public/page/5/index.html","0908a9a4c60deaf35fd985b20b193160"],["E:/qinhao/hexo/public/page/6/index.html","e6679eae82e1441b304426516d61e398"],["E:/qinhao/hexo/public/page/7/index.html","9cd54fd1d5bd0b556c695bdbb190bd51"],["E:/qinhao/hexo/public/page/8/index.html","2348ae40de689737c7d67723c186fa9b"],["E:/qinhao/hexo/public/page/9/index.html","ce735530a771e6d2a547fd8114769994"],["E:/qinhao/hexo/public/sw-register.js","94b7aaf5dbc428e1b0263aadafba8314"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","a835820e1bbc15ebbf2b8a354734609a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







