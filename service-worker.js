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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","b4e41f1fde6bf880b5c1da8be9d96aa4"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","1b18686b52ce91ad1de52b52a17b4246"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","144ce888672c4e9e6facac62a7f5ed1e"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","8ba80ea7f1212f4009ff86be9b509d38"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","1ad1a33218c977cb9d023a62d958385f"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","5b25701e2e64c8484469a3dc8a6b84d2"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","5fcb4893fc935d2d18402987514f56c0"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","652ec68e7d52f3afab4e35e962fee317"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","8fdaa34f3619d77ebaacde42d5aef6bb"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","310899ac32b02be8a3c2462d3a2dccd7"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","23c04abbdbd3525de1e535b1e3d4311d"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","7b7f8c8db8c541088fc46302011bdba6"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","df41398d9ef8bc9f1b9e9101b103f0bd"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d2177b582a84b489b7425571aa7ee0bb"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","5f49421106bf6f3fc19d9533f3e6f236"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","1fb694ce8c12ec4e8754efc18b657ac9"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","4e0ab0f1cb41f616720c8539c5099e9c"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","acc4edd4e3e9fd1f3137dac7c236ee94"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","a6237d3d335e0e8266c7710225e39f31"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","4ded029c0af1ad4870e84d9f188fc142"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","8befb057edd68bbdd57b3ca5d1c54f5b"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e2e9310aef5ffc6ce44e1a67b2a753d5"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","90667813833d33c35c7dd4ade0fd3460"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","3d7c8b545e0bd6467ee7a5f11773aa0d"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","80d126332e05bf42c2e3a3239fcee6c2"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","782d4b06458fd38ba008e748496d8cde"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","ccdb1697f74fc3400aeee53091e7eb27"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","ecfc44411e7097b703d99e678dfe8651"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","9b1c1eb8c84eef5b7b9165d870058867"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","68214c925c261f0bb578c12b7fd4cae9"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ad4ca6462c827a6c1b8392c95105fc13"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","f9ecae88023b1dee1cb71e756183c3d5"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","902bf786fad178b9e831ebfd4ae13efc"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","a6f550925515a0c5b405e2d29f367098"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","090ac8f5b3f135bd9144348bf41b938d"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","f8e30ce079b6beb6c4cdcb5dfc0cbe5a"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","148ea5488501e3c4c7b329292298e63d"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","f1c996be948b9780635e18058db16fcf"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","7ced4ec0dcb1ce87e133f83ae80bbafb"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","77f3194a4b9d29c132473b99b873792d"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","f6d60d5660394b76177308cbf130ff68"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","32e51634276a7781ff827acba68d46b4"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","dc982e6a396c147e176eb8b7dd156137"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","7e467a5c2cf621520f889ed695f49799"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","f26c96f70fe83ddb6839daa4cde04971"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","6fc1d9a9dd28c065b9eb87e10c000b3e"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","0f4e4544650941972e709379c7623791"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","a0c60ea13dc5f8f6f3c50fcc67fb3985"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","9a9af3a77746f757d618a6d57765e98b"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","b4a64c6b1ae2a766e9acfcedfc5913b4"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","da656e83672d0a0397b28f365151d912"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","3068f2a492aaef0620edd2c4b41da862"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","f5ec2515ea48222165e250cb3e05b1fa"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","a1712f041a0fc71fdc857f79fd204aba"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","29940ef67a3537d12f0d9192d34a572a"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","c7cb93c4f02ffcb3cbcea70a142d2278"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","88c2b63048addfb1cdceda88104fe598"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","20b75e371f4707da1392c646725ed662"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","8c21e3f77c84220ea48e22cc4057e48a"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","bbb4ca331da0908c30f81dafe3c34343"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","18715d3096e886eef5597a5142b0301d"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","a151849cc13735f52e08631d75f04c4b"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","58c7130900fea1a1a90220aa1f36a0a4"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","27b7eaef76b0233b171d95b42f34436d"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","7f7d573b35dc1619cf3dc7cb0af2cdbe"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","b54cff9336db9e4ace7b95a0de6f5571"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","0ea8f003e3b4a6bdd124ad66ca590e61"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","e386c905ce76e6613d22a8ac3683bb78"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","d955920dff1fa433d33f896277ab309d"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","25ed440123983e8b55009e2ffa10aed3"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","bb1e3ccb5e096c692fe2ce4b1c6e47c3"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","afaa23978aaafbb2edf7bee87897dc13"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","8b79374aa60203b58403a86cd5383a78"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","a6f2cb0766071756a8053cf206d1ba67"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","55eeada364a3215e2683694bbd5b80c8"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","619d84e049f0dbca9f397b61d3a70acf"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","aa52345a927f756b32422ab3d1ed18a1"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","1ef3d1864f5fea22f175a99c188238af"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","74a956ae638718a289d66dff3d637cd1"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","8743eb6be146fbd7f195c959b9c6bc48"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","bf74830374686903608ef50a49c25ead"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","cfd31a747742c6abe3fe2890cca99846"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","178154ba289f31937ed8f4051ed4e301"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","95728e58aa20718ea671d7023d06a8e9"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","475aa04c36d6d6621d513c14637585bb"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","9baea0523ac72f9d0078c4421f4c1b5a"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","e46c9cb9d4b34910d0bee1b021212ea7"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","73f5393ff27109fb51e220971690bf84"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","245c1ee7b37346d7003c519549ba3794"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","5c7702055c5d63f92deac67612a1d074"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","a6e604d2d70e79c5254560de06f8541c"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","66a692c29a260c89aabc631f33d6f4fd"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","b0fe95144a4d401d4e4d8bb7e38a3b92"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","481c01040f800210e39b2ca0c430b7b2"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","bdc70942db355c687c15429bc8b77331"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","d0c254c4ab5445185b856a301ac2eab2"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","a05ba8f27fb5f1d97e59ff027c03cb71"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","f3e1cf62ae65b4206989264d86d4f46b"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","6bc26fea69d83cb1ba5a159f1fa7ab59"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","d094b84f945434cb04b8bf68e76be2bb"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","348e50a38929739e8042f5f5d8881289"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","a85bce38b32c6159f635b063b26f2c02"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","e3fb53bdf2ba333c6ad8b9dba2ac6ed5"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","b58f038d7dd3eccdfc0d5d3008e79339"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","3d742c83f2f7330d18e9bd04e16569a2"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","634630de3c9b3b80aee6bc9f578c42a2"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","c93da9acba41113aeff53975eb9b1371"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","8c2987191406bfbbf1bb5e532122e5ea"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","8e9ff4f877a9beefe64bec57c6fe72df"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","148ce88b0cc45a2dbb45c1ea8024c9dc"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","a8d7d9ca4eebc45e392c2ddec8557cac"],["E:/qinhao/hexo/public/2021/10/08/system1/index.html","013ffe23bb3e8b791b56f4ffeb3126ab"],["E:/qinhao/hexo/public/ByteDanceVerify.html","bae6a014a65d423634fda400ce3728cf"],["E:/qinhao/hexo/public/about/index.html","516834a0f7b89dbbde80d8de2aa488fb"],["E:/qinhao/hexo/public/archives/2020/01/index.html","1394baa8194c8384c6794623ba126470"],["E:/qinhao/hexo/public/archives/2020/02/index.html","822e292a40b67fe4631f186ef3f0c0f9"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","adadd9116a0b8c901aa09a01e8d333b8"],["E:/qinhao/hexo/public/archives/2020/03/index.html","002d3f5f0549efdfbcc94a294a41207d"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","326b62c432dc05190f381e588b61d0fd"],["E:/qinhao/hexo/public/archives/2020/04/index.html","e83bca5f2d3f40410a55db82a549e868"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b90753edb4071cd0b0f507f82a676280"],["E:/qinhao/hexo/public/archives/2020/06/index.html","1ff8415f46068137b88fdec56d8d5a89"],["E:/qinhao/hexo/public/archives/2020/07/index.html","d2d5b91d4c430762d0fef8f6fed23d10"],["E:/qinhao/hexo/public/archives/2020/08/index.html","40a4e2a5f918c6f22406a7cc8a9b9cc2"],["E:/qinhao/hexo/public/archives/2020/10/index.html","00404cee3efff2c33b34e816e2f89e58"],["E:/qinhao/hexo/public/archives/2020/11/index.html","e1d6a05f601ec66d9b20bf04b5568072"],["E:/qinhao/hexo/public/archives/2020/index.html","7c6239e62151b45a9cec0ec6bbdb69fd"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","649238793e9a3ac3329dbc8b9c6485e9"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","7a7480ff98fb3c453d7d5a5dbc77af56"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ca7b863c2efc4e5e80d4a790ff4ecd70"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","be9ae410055a2709c91236885333d3f0"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","4d6e52f59e6ebd22910fd8d9c5801d1b"],["E:/qinhao/hexo/public/archives/2021/03/index.html","751ed0b445473069c006fd15e43c7469"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","d981a355bf9d03ba851f7e4ed3e84a57"],["E:/qinhao/hexo/public/archives/2021/04/index.html","7e39daafc4ad89417870593c1ddfce8f"],["E:/qinhao/hexo/public/archives/2021/05/index.html","c5da45034d9409aef9802af8b3c3f9e6"],["E:/qinhao/hexo/public/archives/2021/06/index.html","b9056ab5e44eb6825e8ba4f768182ef3"],["E:/qinhao/hexo/public/archives/2021/07/index.html","fd24ae7687e58f55f42801e7b457eb75"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","3894fd9c5f45c93e6aaaebd5ec68dfe4"],["E:/qinhao/hexo/public/archives/2021/08/index.html","8cb69ff94c28427325d848df727b5ce5"],["E:/qinhao/hexo/public/archives/2021/09/index.html","0e94f2a0090219fc042e1e56f3c689bd"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","7f5dc5b3b8bc2aa019b2331c99562e93"],["E:/qinhao/hexo/public/archives/2021/10/index.html","35c54b3d1ed1bea12c0dccd4803cddc8"],["E:/qinhao/hexo/public/archives/2021/index.html","60c4870a54ef34fbd0b0447ff0334350"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","63b6f1e245ae2a84d3735483748c6823"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","ebbef58ff39d63a4c11ce55d954077bd"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","56d336dd7437a634bf99596cfa6381e2"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","6665e76cd51358e59323b71df05464e0"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","9bc669d05a0665436907936e573e82ca"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","84b72c744a2ee4907700dc90602f964f"],["E:/qinhao/hexo/public/archives/index.html","c7fd06e6ff65f7d7198f7cbb4312f2f1"],["E:/qinhao/hexo/public/archives/page/10/index.html","1eca66d113450e2d0a56a84fdd040fd9"],["E:/qinhao/hexo/public/archives/page/11/index.html","1eca66d113450e2d0a56a84fdd040fd9"],["E:/qinhao/hexo/public/archives/page/12/index.html","1eca66d113450e2d0a56a84fdd040fd9"],["E:/qinhao/hexo/public/archives/page/2/index.html","c7fd06e6ff65f7d7198f7cbb4312f2f1"],["E:/qinhao/hexo/public/archives/page/3/index.html","cea1c5855459ce168551a3a459413712"],["E:/qinhao/hexo/public/archives/page/4/index.html","cea1c5855459ce168551a3a459413712"],["E:/qinhao/hexo/public/archives/page/5/index.html","cea1c5855459ce168551a3a459413712"],["E:/qinhao/hexo/public/archives/page/6/index.html","cea1c5855459ce168551a3a459413712"],["E:/qinhao/hexo/public/archives/page/7/index.html","cea1c5855459ce168551a3a459413712"],["E:/qinhao/hexo/public/archives/page/8/index.html","1eca66d113450e2d0a56a84fdd040fd9"],["E:/qinhao/hexo/public/archives/page/9/index.html","1eca66d113450e2d0a56a84fdd040fd9"],["E:/qinhao/hexo/public/artitalk/index.html","17289176d1aa2905cf6b399e38f2781b"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","260a230f2ed583ff9e9d8313626d7202"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","d55cc12dce401d8512e2bade3d2bb87e"],["E:/qinhao/hexo/public/categories/Java/index.html","08d0e3b585713a6ec51cced26c7bf30a"],["E:/qinhao/hexo/public/categories/Linux/index.html","baa0ff4df90ebf8ae9ddfa45bb93b0f6"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","14f08eb5a83c886ffa31e97f44f76ee9"],["E:/qinhao/hexo/public/categories/Python/index.html","4ddcd78369608b70b680843797229e7c"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","7531939f23fce5107cce64e7f7a2273e"],["E:/qinhao/hexo/public/categories/交换机/index.html","f17d7a477b572e405b2a00763870cbba"],["E:/qinhao/hexo/public/categories/前端学习/index.html","3433f6e99f06c137cbe3d2e14f75892d"],["E:/qinhao/hexo/public/categories/华为认证/index.html","5e13fb8f25455dccb6b461e3e5566d36"],["E:/qinhao/hexo/public/categories/小技巧/index.html","d7e8384da99d91eaea0c002352a25c03"],["E:/qinhao/hexo/public/categories/数据库/index.html","f652ab8b34eab46ade9484f8957f9e25"],["E:/qinhao/hexo/public/categories/数据结构/index.html","3b60521bd34a6003c8f5a832d1abfbbc"],["E:/qinhao/hexo/public/categories/服务器/index.html","b120458966e6da2dea9b6f7c953b5130"],["E:/qinhao/hexo/public/categories/算法基础/index.html","001dcf08428bb8e16464d3b21d7c1733"],["E:/qinhao/hexo/public/categories/网络安全/index.html","e80b38cd8e1227a40de0b530944c0e0d"],["E:/qinhao/hexo/public/categories/股票知识/index.html","7c7af311933064ad9f88bc4dc8d28fb9"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","14458dc6a2cd4aade9727b8caaff9af9"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","3052297e1ea96b863a21efb7f8c5e5e7"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","459311e7be3e888f23597424e88f119b"],["E:/qinhao/hexo/public/categories/软件破解/index.html","dacc6f8b84ae9108c7d17803510a8780"],["E:/qinhao/hexo/public/categories/通信技术/index.html","c864d2838763ff010fa9163c509363cd"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","403a98841999a993b485b62fb3c53a68"],["E:/qinhao/hexo/public/category/index.html","990e98f0e70b35e9115267f140588319"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","95d1e00f8a06a3711ba4ebfe1af2de32"],["E:/qinhao/hexo/public/index.html","6da627b4c19638957fe0b2d26931a661"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","45b6ffa169f56e084825c12a11b0cf47"],["E:/qinhao/hexo/public/page/10/index.html","88f9ee2b64fb0607523fa98586b0da23"],["E:/qinhao/hexo/public/page/11/index.html","1be27f40f43b49ed3fab51d9355a41f6"],["E:/qinhao/hexo/public/page/12/index.html","3b32870a0ee5222dd701d0e9aa6439f2"],["E:/qinhao/hexo/public/page/2/index.html","1c6fd52ff88b2bd47f24c92432ff0e60"],["E:/qinhao/hexo/public/page/3/index.html","ccc2698fd95d40dfc4171102f0659b03"],["E:/qinhao/hexo/public/page/4/index.html","afc40a5700156fa7a480158ed02e95af"],["E:/qinhao/hexo/public/page/5/index.html","e5be071d5cbb27e7f328d90703731f97"],["E:/qinhao/hexo/public/page/6/index.html","196045e21757b5348ad251f651bdc897"],["E:/qinhao/hexo/public/page/7/index.html","c71d81edf1f08fefc7ee8f1b6c47f078"],["E:/qinhao/hexo/public/page/8/index.html","a0274380eb1fe4eb762ebe43f46a3c17"],["E:/qinhao/hexo/public/page/9/index.html","a540cf6009d0a31e80ce5f83e8c0cccd"],["E:/qinhao/hexo/public/sw-register.js","d07b29e42ac72b6d9191d59d3128ca8b"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","f44fccb6607452859fcbcda14ffc704c"]];
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







