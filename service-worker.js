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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","9e00cda1cfcd2a64d1c3232642361f45"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","aef6399536f56e91ebd3956dc6a5fc06"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","1ad8ca768f4b4e9fdf51152c9b5c377e"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","2a3d40e029a1f79de9395bae08da7e1b"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","8647bee3f3baaa6dd5216f9204c1e128"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","b90d9b43b9638d816f59aa64f8d58c9f"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","b383e37fc69c709a71255dd238b87ddf"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","4d0184c53bc53225deb6b9798f616585"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","4a11d0e7d9c4c27c9db5847ed0da17bd"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","63e4b403647ba60f142d8f32f5b2c656"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","86a322007c1cf9f0bce7b2cb0f235223"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","e67734c22b5c302043adeab4b821f588"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","1d65a9681f2a4c2f917cc2863a0ca877"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b251ba00b2474d42a1fb02ca0c1ca837"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","f1a7fc2f41cece8648845b90eaa6bfe0"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","845128e6647ebc431fbdefed9f3d48fb"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","bc283c4fd1fcf8915f54d5647e65f870"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","75b43d1955524f708d04f48490b36684"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","c2ccdc4f8c129f988ec4f8af50a78391"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","039fdaa87c2c8f0bb93cd02ad558f9aa"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","6f7c44f0e78f994426b564c4496d2a32"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","4bda4c1157f36bac060c6da09892f99d"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","d4b4bd083eae10239269c229068c8268"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","b1c168e0debcb05d11298ddbe803ac52"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","da8d0d7c92ccbbb1b34be109629deb18"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","da5bf411cd28bb78e136a8e228a504b8"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","791cf0723407071fc3f24ab84a01552a"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","fa1cb9fd73dc4236028ae03209a5754f"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","ccdac95e49d39943f297aef7957bd44d"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","2101f185d83010a0e54a83ebb7b62033"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","18737d7486d0133281f800fa1f359d33"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","e67e0776fd0046a6397f684a4fb4d25d"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","859ca92108a64478a0836fb12d96f1c2"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","55b7b2f10cf93c06d7b717e9c2122923"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","a93d3eb89a609e720db9bc72de22447a"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","e2249483c1ff781f2f2dfa459764fed7"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","00e1f43238ac62163e596cd36b5ff345"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","104a0190ac574b7ae96c40f743f8dee3"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","254a85962543496be64441b86181c331"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","085f02110c3f7f6cf15e02ea391c57c9"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","f90f31f329eb32b230ea6d55e4d5e2d9"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","95b203b359bc1e0f119b9e7047ff21c8"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","709e3bb5a36cc3a5999d73e2033ff812"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","1583e4590a64b6f0df4cc582529e1e57"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","78026d06c9dc0bac5b1318b71719d7bd"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","1c71c29127b930af6abdb08938be9bfa"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","6e28f0e4b9396998e30ee76976a1d4b8"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","7dbe412225c8f07681c0cbd560f4adb5"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","33be6949a72bda17951351d3f74a0c98"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","8f911662342a109dfc07fb719ffa141c"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","02c41ca09dfe2ec08807dfc5ebf34138"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","3e31af37dae32b8a8d19f1e61adc2277"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","59513064ec11ea14b2696b896b3e9df1"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","7cebb2d3451a44af23c0bf8b7b101242"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","eed83e1669cdfa86b25421ed7732a19e"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","8568036876d5cdbf51fab44405a52e0d"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","4006b95930b9d22cf4e848e506fce54f"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","5b38aba78d16f79fcb871a900c53f4dc"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","fe162aa8aee8c9eb0dca4f3c2a5677c2"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","f5eb557a1adf0999d5c4bb49fed436ca"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","a649c3f5fd883aeb314bece8830d2d78"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","d47ea6d5d6a0eab741496446784ce6bf"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","7bd4587f615e4b81ad0305d89a8a2c54"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","f2215b199d8384906a66bb75d0c3e99c"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d517ff65dd379e6bc901eb21a55e71ea"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","4da2d7b4711a6961a86f5134830d0362"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","e840e097ce9bd4927e7f13ae6d50eb2d"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","8d54bd5930aa240b7e4d1353f223410d"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","9b41218ebfcf3a0c378960a8d19b579d"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","55f705b1b7b185f8481641a414bfc453"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","51ea0cd02ad1a14a88bcefb754fa3f0d"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","5fc474ce1e9de3fa950a61f677c1050f"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","9e0f489d7f819b3a8721ac1bac0534a1"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","ba866d7b49bcf40dac9c3a35938f1c8f"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","f7c5928f8e0c3f99b2ebca984bd3afd9"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","feb65c7c5fe83070571e97743e29919e"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","892057f0897946d789d431b1b1b19de1"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","33e806789ec48dc7801b556000a70642"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","484b8ffdd330af0bfc206e261582abbf"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","438c1e72357d186663cd6a89405013f3"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","ec55d4c5cbd26f585bd3dfc31b2baf75"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","a6d010d3e684cefe36bf8a7c8123e67f"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","629eb34903ea5ae834ec387caf8f3736"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","d8b803426e9595d9015b97d3d8f77fb3"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","630a9b1c6b7b26c7cecf46f5bc6ea589"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","5418a655cdbd1a74e31da532c1ab4800"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","b229e024e16da73ac4018320cd4a58b3"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","7728789f35435e430b61ed1606ec1c02"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","847739aa33fdccba94c56782e7ba6213"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","f461e48aaa68456b3ffc2365ee6f592b"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","5741fabf95ba809f26e5f2904076669a"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","5817ff3d8829b5129a94313f1e19395c"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","8b8969c224f8e4b5bfa26a6e01ca9080"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","770367912af0f7772862f8e7c378a226"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","1a28ee963ce05753c43f8fdfa13d9cd2"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","39920d2d70434220ddc6a4cb90fbc648"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","61368832026efb7f00060a92ef6026aa"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","321d5e2ee8a7726b4444e55dcdc92532"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","c6750a01889c3b1bb14584c1ec98ece6"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","5ec0456da42d81b22e02d00b8f54d235"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","7a92fd28716fb4f779fa55a0b34f0fea"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","ef32e18053f8e7affb10b8434117cc39"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","9d35341401020c9593752246d7f53d75"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","8412fa599cadf5a49576f48c4f0c1e40"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","75163e728b55999c69bb80076bf9b396"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","63e88b1cc6cf1601f29d272179b25040"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","6ed8ba8f6dcf309a2641e24d06e46728"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","15f70f9b2100a7b2a5d77c765d1cfa6d"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","ffa84dee8aaa6029a59f4f9992c9c99f"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","a1014edd33e80f46e5af3da107b81cd0"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","18756faa3b5e4bd1229e0162bb3339fd"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","ffe74a03eee017ef9f28428885bac514"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","4fd87935f97e7daf87ade59bda9ddaa9"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","8357266a60bb166edc0a0eaec16e6b38"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","66e8bd4631a4bffa3c639f377062bf9f"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","bca42353beb46166119af67798410588"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","b839d81d9fcbd4ca855d40b67b53df78"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","27cd95f98d444bc10ab801e00db14d39"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","0416328d77b45a461126e5ba9bee11b0"],["E:/qinhao/hexo/public/ByteDanceVerify.html","2de5a678b76dc789533df0d79da3bd09"],["E:/qinhao/hexo/public/about/index.html","ccef036d25e30e8f05033e9692d5a91a"],["E:/qinhao/hexo/public/archives/2020/01/index.html","4af5bdf5f45a13f8c6efc127e77363d4"],["E:/qinhao/hexo/public/archives/2020/02/index.html","fae65a975278c426a9c46097bce8a859"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","eedcfb6b2939679e5aa42cc2f9ce1479"],["E:/qinhao/hexo/public/archives/2020/03/index.html","80e1db17fea4866e78e66ba0e44ffeb8"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","9d0ffe1ac3edd65139efcfbdb9ce1c48"],["E:/qinhao/hexo/public/archives/2020/04/index.html","3b6bc7b2b90618c194a901fa6360affc"],["E:/qinhao/hexo/public/archives/2020/05/index.html","4ead133ab0fdad7eaf343481374b9d90"],["E:/qinhao/hexo/public/archives/2020/06/index.html","08801926cb147e7aafad11cfbeb9e112"],["E:/qinhao/hexo/public/archives/2020/07/index.html","95401df23b8da6a86732a1ba36e93cb2"],["E:/qinhao/hexo/public/archives/2020/08/index.html","daa9d60e3ee31f68c26002450382d2b9"],["E:/qinhao/hexo/public/archives/2020/10/index.html","e34c8577c01c2721a1f51095dd5997da"],["E:/qinhao/hexo/public/archives/2020/11/index.html","0d0a4bc40f524c477debabeea2930587"],["E:/qinhao/hexo/public/archives/2020/index.html","aea676afd9350d0a09e68795cb94afcb"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","9089db70898819533db06cc52688ea80"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","5f43c222f545b2f022ce5f6ea47258c8"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","edc245edd2c1351b2ddef02b7970b028"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","c9e680b254a24e80566cd4dcf51f730e"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","ecfa7143ae62a9682101e6f7e911376f"],["E:/qinhao/hexo/public/archives/2021/03/index.html","6e9e6ac2f31b8bf019085ec785c59f98"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","43004036506bc3da6050fd9263c74d11"],["E:/qinhao/hexo/public/archives/2021/04/index.html","ff65d4336e51636999ce787d2f1542c6"],["E:/qinhao/hexo/public/archives/2021/05/index.html","8e475fdb4e58a17b21857d95a916e836"],["E:/qinhao/hexo/public/archives/2021/06/index.html","8b68b6b5baf31cb13415ac68f4fa6815"],["E:/qinhao/hexo/public/archives/2021/07/index.html","33964ef0f9996419d1fab126feb013f6"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","e3e25396052b33f8327b67a31bdc2209"],["E:/qinhao/hexo/public/archives/2021/08/index.html","d569433b94d5609754e068017a7656f2"],["E:/qinhao/hexo/public/archives/2021/09/index.html","20d62c7fe7585915e157f6192cc962f6"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","34c55227d8e3aeae0c7ae78185f5b755"],["E:/qinhao/hexo/public/archives/2021/10/index.html","c5c254a95d85c593bc2407b73681aa20"],["E:/qinhao/hexo/public/archives/2021/index.html","4a812385e8d95852d7bb3b78a05ec77d"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","3f4e92468321d216b99531584afac3f9"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","9e29380b17e1b78c0476ecf66a9936c6"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","9eca3898077c1c1bdd171e090c97cdc4"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","a798e3d6cef211190abf3445956c5eca"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","7d0f86d88970abae8f7eda5aceba2035"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","93e216df190e05c11af157929d32311f"],["E:/qinhao/hexo/public/archives/index.html","9eaba927c51758a269a6549edab02db2"],["E:/qinhao/hexo/public/archives/page/10/index.html","5f3657d3e0adff61df083d941261f806"],["E:/qinhao/hexo/public/archives/page/11/index.html","5f3657d3e0adff61df083d941261f806"],["E:/qinhao/hexo/public/archives/page/12/index.html","4f39bf68ee02d16bd93790e122a85d92"],["E:/qinhao/hexo/public/archives/page/2/index.html","9eaba927c51758a269a6549edab02db2"],["E:/qinhao/hexo/public/archives/page/3/index.html","9eaba927c51758a269a6549edab02db2"],["E:/qinhao/hexo/public/archives/page/4/index.html","9eaba927c51758a269a6549edab02db2"],["E:/qinhao/hexo/public/archives/page/5/index.html","ace56dcc368b85db034ec4bf5598d36e"],["E:/qinhao/hexo/public/archives/page/6/index.html","ace56dcc368b85db034ec4bf5598d36e"],["E:/qinhao/hexo/public/archives/page/7/index.html","ace56dcc368b85db034ec4bf5598d36e"],["E:/qinhao/hexo/public/archives/page/8/index.html","5f3657d3e0adff61df083d941261f806"],["E:/qinhao/hexo/public/archives/page/9/index.html","5f3657d3e0adff61df083d941261f806"],["E:/qinhao/hexo/public/artitalk/index.html","990a06414f2860d0fa8fe09cc518f47d"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","c55887a33ee687b92dbd8c5d9320ed1a"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","4d102ff27fa1d1888422a0bda3f0feb4"],["E:/qinhao/hexo/public/categories/Java/index.html","8ea69ef49b145176e82871662866f5b5"],["E:/qinhao/hexo/public/categories/Linux/index.html","572b4213a73c7f59e1a4bf337903a74e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","e15635291545c784818762ad103a0188"],["E:/qinhao/hexo/public/categories/Python/index.html","8062c44fa1a2f4e0655da49351de7e99"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","c7a68300c5d8a250bec6b041d8faee5c"],["E:/qinhao/hexo/public/categories/交换机/index.html","ff713a2c8ed3a03dd49015dbe06c1c69"],["E:/qinhao/hexo/public/categories/前端学习/index.html","e83d681aeff33e5def8bf797e3dfe16a"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a92ba08f06385ab1347c8c5343769f1d"],["E:/qinhao/hexo/public/categories/小技巧/index.html","e9774d196019fedf395c3cef43281d68"],["E:/qinhao/hexo/public/categories/操作系统/index.html","5352e7ccb045a7d9d594bf360dc8a2af"],["E:/qinhao/hexo/public/categories/数据库/index.html","472587f0a5c073555506779268387122"],["E:/qinhao/hexo/public/categories/数据结构/index.html","fa6a717d280fa50004043301d1727cad"],["E:/qinhao/hexo/public/categories/服务器/index.html","db7274052b24cc6a0c09c5db41fe8b83"],["E:/qinhao/hexo/public/categories/算法基础/index.html","c470468846688b19e1a8130c238ecfc4"],["E:/qinhao/hexo/public/categories/网络安全/index.html","d77b2ebd4794d984ffff90b511def190"],["E:/qinhao/hexo/public/categories/股票知识/index.html","d6fb6ad06fddb2516330a86eee7b2a9e"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","f2ac28da6dfc51d6ce59f0f0c57605f5"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","cccff3cf9482976311bc567f03ba05a4"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","fa6bdc87fac1f86cf3d5a628a08ab90b"],["E:/qinhao/hexo/public/categories/软件破解/index.html","0c74760aeb58ce154ee3263f98f1334f"],["E:/qinhao/hexo/public/categories/通信技术/index.html","9bafba7d9c960225e8f37f21a665aa35"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","0f13d9c3cda9df93852a5e9a78c85ee0"],["E:/qinhao/hexo/public/category/index.html","f140237ed30f4eb442ae317a9691a505"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","db2788d117d886186083c79c07acb905"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","2ba12b0fea7417cdc3dccd6eea5f3cab"],["E:/qinhao/hexo/public/index.html","9fed6e1123f819febb197e6c30cb16c3"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","809393ff2e363f6ec94966c272cf414c"],["E:/qinhao/hexo/public/page/10/index.html","743ebc7b27cd45c3a915f9f8124d66e0"],["E:/qinhao/hexo/public/page/11/index.html","e3e5ef446f2ad7026ca41e0463b38a53"],["E:/qinhao/hexo/public/page/12/index.html","5d9e5e024c2322067acfcb02347bf1d6"],["E:/qinhao/hexo/public/page/2/index.html","dc525a8a7db69b874c474afa4aa7ba1d"],["E:/qinhao/hexo/public/page/3/index.html","8fffb0824b17505d1fa9baa75f59ce16"],["E:/qinhao/hexo/public/page/4/index.html","e94dd14ba73ce76b24f9ed6112a49292"],["E:/qinhao/hexo/public/page/5/index.html","73f3f905803ef1d14f83fe3ed4cdb7f7"],["E:/qinhao/hexo/public/page/6/index.html","68fe54ccd9eb197c52d4bd9f749e7166"],["E:/qinhao/hexo/public/page/7/index.html","1a5a97162465c8475bb2052dabfdb85d"],["E:/qinhao/hexo/public/page/8/index.html","f0f59b1c61a6d7f0a7c89a93b5f62185"],["E:/qinhao/hexo/public/page/9/index.html","dbda6fd701afd3f2d395c1ae012dd8a1"],["E:/qinhao/hexo/public/sw-register.js","fa48e21944b90f541751fc995a2299f3"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","9f3a1b8aee5a7261f24ab282d8d9a27f"]];
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







