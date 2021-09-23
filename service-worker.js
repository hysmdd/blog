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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","9f164618763b37465fd798f3889f1924"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","69ee279eeceba18187ec1592049e4e15"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","1debd443c8fbacacbec44172f12c6f64"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e3c4d1c0784f1d2cf8aff2fa1b6f07e0"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","8e0454c2ba0c9e2f9bf7692ca866a553"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","596be69642cbf03410e325fa17012939"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","7c8f675b6cbd65b404a9149e44524367"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","2fbd47e3a5f380e78e2de9df9b825b67"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","6e62082ab8915626f9af3fede6041af7"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","70f32ff00e49c2a89eada609d7cae528"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","4d4de176d4898bba8a64df6f41cd5214"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e5bb68f51c9d2f8f25dc8b2297b28418"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2ac5d9254703f5e25e5ec5ff9b182614"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","ff32731754d45703f950546332c65b83"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","ca5937e89963b2cd39fce2662ce556f0"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","76a61bdc1a56e76ae52a7022fcdf5378"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","07c812957cae6a546cc0aba7be523cc1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","c5dd9bd5fccbc9504b9cf38ca851c734"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","f270e31dcf0f4f0826d2a4611d0e3d2b"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","ce94a7c9237dd61918a463c01de7d401"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","a0eaf647b3b0fa48f235fac0b804d120"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","677bda4dbacc6e79a7b716a2069bda64"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","31a0278e4b40f1e5e3391af78af90f61"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","8df4f2bdb155974d094cb0adc3700240"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","d901ac6b93d16c4ec34746f75637a158"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","b1469ec7cc665f736534bfc192e3cb48"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","c8dfea62bffd91ee569bfdcc83b45528"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","d6a7c1b78a5dedfb3358abec9378955f"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","4d2e64073d945f99de2b708079d0d2b0"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","fa3a8f2cc5d6c01065c6b7af42500cc1"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","f9fe076cf0d35f064eb2e7bcff7b78b4"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ab5136d359d5288049b6c2b82bb34a88"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","5e8b27264d488403fce3b914842d13b2"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","4d896094867dd48c082741806ab00752"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","df791e3ed9581c501eb8f09425bd9b7a"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","b2b785bf20fa1b81ddb1122bf8abe7b6"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","cc6d81b609ca2a56ff003b31a2369e6c"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1d25787dcfd0152583728279a4fc5288"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","3660fdff741b43983000e62f24529113"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","dbe5cec2df2f503db985dc7ef2d31396"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","8fc6cf64cb20c9d7045ba3bfd457fc0a"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","a072112e94761778490c5355f81a37ef"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a8e2f5f8356b5d12e81908b2f1365634"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","3fcfc2c7348071c685b5a7237d7abeb2"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","724cc4f5f936bb0fa1740e5b13b62f21"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","82b03339140b0136ce2f4ef43a23ab47"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","39b9d464cb8d44a93e4ec4d3a1fd9b9a"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c915eb2bc46433835eeb68ccd5c359d2"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","7a8fc46062b1d9c0d9081c72208a40f6"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","29b62dcc7b88effa78347195e56f748e"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e5e927ad43b078252705c72f566792ed"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","84686b4749e500757363dc5f8e6892b2"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","947dd01525c6087a7e456437dd099a61"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","f7d0e3b286a14a9c402dd77301c9feeb"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","62a375792194c831e49926216b39ff02"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","856b8d7e94788803091f884dca083dad"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","dd71eae2145d0354fe3499cca16c935c"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","755f0c3a7b647f64c5303042140cd095"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","4d604d7f03e7d74d346ee9caafa10432"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","defefd84beabec82b8702b0681f8269a"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","149d2edb3bed82e6c3a96a8c9af3bfe1"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","37aed0e48b57b374bb42adb1139e8b4f"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","0098109f81e507d0df4052ecf12a565b"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","80707398aa61250f13a7c0d89cd674f8"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","4134b759861c9c5d256ba7fb90cfec8c"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","342f0f0c7504789c236115924ae80665"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","63bedf8a8ca930b278a71483cafaf960"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","334375207a8f4537bcae60fcdc8b3e1d"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","105c222b6abfbe75ab782ce4c6831bea"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","593a6f344e0af61673199f80f9f8860a"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","b8a99eef79bd453b3720f6d10705c20a"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","83ed680068a24a6a1dfa6095cb428390"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","fc71ec7a5074826fcf0152814274ac6e"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","03f3929749befdf0d078c893a3f7b976"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","7c3192a9ee0a46292bb8d1823b2ffd0b"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","ed8c1ab558ed103bf059ad6357122113"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","c50b67abea7e7ae39c173c32f82aba00"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","8a331ef4c5de72eb60395d6fd940bd5a"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","9b4cdd339e78af63847fee2d33a607b3"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","29e30917e03fa917ba3e64d1735a9e20"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","3499eebe496c7f5db9baf153d4bf1770"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","bd663e911a7bae59e7327163a3448140"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","b34e6bfe3e6fe4c0fc7b63e1123f9fca"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","5500ee8aeacefaa44b85ffb3c9ec8f03"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","beb4b6551cc825a592e55449756d0898"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","bfd9c4ab84b4731b24976a98f3f15d93"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","a58266b608d0ae579ab65d384b002da5"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","045fa18ce95de0497aab20df2ec4fe8d"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","896c4bda4fd345e231a341272e7ac038"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","2a07bed4eeed5a7f959cb22c0c85f036"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","01930f2d8126eb64a7def27884dce75c"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","7b5142cc670112b6048acf2386daf6f5"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","8ccd586c7be308addae5410f6012c1ec"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","e0c7d917d97a75bc9851bc322e7e9a36"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","3d09985091b1ce9b4fbf506e303af6be"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","ee7a0abfdeada86fde94bea2d3d805dc"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","d19af610f2de3fae7eba7c2d3fbb2998"],["E:/qinhao/hexo/public/ByteDanceVerify.html","bda3dc739443b3d7ffd8a2b1ac7777f5"],["E:/qinhao/hexo/public/about/index.html","25de9f42b06ded7331d37f10a91f0141"],["E:/qinhao/hexo/public/archives/2020/02/index.html","1c2ad8ab2c5d4e429f9a56112e035df9"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","7c85279997ac3a4e38c60f589dbab502"],["E:/qinhao/hexo/public/archives/2020/03/index.html","d5e044dd808fdb2be950fd35883854ed"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","2d31017a9ad106de048e6ba03f2ffa58"],["E:/qinhao/hexo/public/archives/2020/04/index.html","e37763fb04d69ecdd151b2745b90fb27"],["E:/qinhao/hexo/public/archives/2020/05/index.html","050f484da8afba9be7358c25318f9f2f"],["E:/qinhao/hexo/public/archives/2020/06/index.html","936ea4ab76d8b814fa83f372ea45022e"],["E:/qinhao/hexo/public/archives/2020/07/index.html","22ef78ba24330cd4fdf6ba8a96c9b616"],["E:/qinhao/hexo/public/archives/2020/08/index.html","b75d5e5a950699e6496705262f679cd9"],["E:/qinhao/hexo/public/archives/2020/10/index.html","d95634ed8dc7309041561605e0cda45e"],["E:/qinhao/hexo/public/archives/2020/11/index.html","50f29d23cebb65827b2566ab45ae3abd"],["E:/qinhao/hexo/public/archives/2020/index.html","d4601a3f67589fb071df2c853c760e6c"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","2d72e95f1287b2ea126b83f9513fbb8c"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","21ece26ef27e367965dfa06d05559d8f"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","4583c7db5ee7079acdb3ddfabaf25efe"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","ab5dfba0f1ff5a883b8649f108e0258e"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","eae9a67c470c4d10fe0081629091edc3"],["E:/qinhao/hexo/public/archives/2021/03/index.html","3d8b5ca0d84e2fb69fe1364dc6f6d449"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","09e04f7bf3f1a93fc0a9492f95f3f5d9"],["E:/qinhao/hexo/public/archives/2021/04/index.html","c0652d781517ac1749a4dd1f4aa0425c"],["E:/qinhao/hexo/public/archives/2021/05/index.html","221a1fa1af9e1266210d6b4798d7e950"],["E:/qinhao/hexo/public/archives/2021/06/index.html","c69a9cedfdab7b81dcaf31a39e5bb10f"],["E:/qinhao/hexo/public/archives/2021/07/index.html","f5fc1dec24d747642de7e74c0958d87a"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","321de1bb6a368b1c843314b13222999b"],["E:/qinhao/hexo/public/archives/2021/08/index.html","7d469db271bb7ddb05c910b4408f29d7"],["E:/qinhao/hexo/public/archives/2021/09/index.html","78a6a1286aa7ed2e04d671177a5874cf"],["E:/qinhao/hexo/public/archives/2021/index.html","2f77f365db51f48658810e0423e0d747"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","b40db96549c5d1c16d7166dda4f1793c"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","b33a4d19f0c5f73ac4439bde3a7b7367"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","eff60f8dfb46140ef56c784cefe15f7f"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","e2faf1eb760d2590ef9d113cb505c01a"],["E:/qinhao/hexo/public/archives/index.html","109784d74c132cf5b09fe86004257c34"],["E:/qinhao/hexo/public/archives/page/10/index.html","4908a5fa973fcf42a26af13c6f9b2da8"],["E:/qinhao/hexo/public/archives/page/2/index.html","8930b9ededcccdf0762d260e8a629a9f"],["E:/qinhao/hexo/public/archives/page/3/index.html","8930b9ededcccdf0762d260e8a629a9f"],["E:/qinhao/hexo/public/archives/page/4/index.html","8930b9ededcccdf0762d260e8a629a9f"],["E:/qinhao/hexo/public/archives/page/5/index.html","72554ba18cf65838c78dd62ebffccbdc"],["E:/qinhao/hexo/public/archives/page/6/index.html","72554ba18cf65838c78dd62ebffccbdc"],["E:/qinhao/hexo/public/archives/page/7/index.html","72554ba18cf65838c78dd62ebffccbdc"],["E:/qinhao/hexo/public/archives/page/8/index.html","4908a5fa973fcf42a26af13c6f9b2da8"],["E:/qinhao/hexo/public/archives/page/9/index.html","4908a5fa973fcf42a26af13c6f9b2da8"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","132ad17890aead98f0cc491a43681826"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","1a9807d9066d0cc82e369c5cc60045b9"],["E:/qinhao/hexo/public/categories/Java/index.html","986b6822a135f514edbe8f840df521c3"],["E:/qinhao/hexo/public/categories/Linux/index.html","f4c8636972bff092a53fd35d583d7ca7"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","f5f50d919c82374fefd5b6f218dc6a86"],["E:/qinhao/hexo/public/categories/Python/index.html","95d2aac147170c146c47fa419d1a6f70"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","b31b9ec8e5ad448a78ada4f55abc31a5"],["E:/qinhao/hexo/public/categories/交换机/index.html","45a86b55aa210db9fe68374597c64824"],["E:/qinhao/hexo/public/categories/华为认证/index.html","56f10215f28c386f4f0ada172104c4d7"],["E:/qinhao/hexo/public/categories/小技巧/index.html","0d8fc92c812c26f70cffcb613e10c4db"],["E:/qinhao/hexo/public/categories/数据库/index.html","0c097709433bdf927291e3cfee273d1d"],["E:/qinhao/hexo/public/categories/数据结构/index.html","501eea0809d4d9d969e7345bb8d773cf"],["E:/qinhao/hexo/public/categories/服务器/index.html","a69356b0a3ee1b1c668d652c5b2ec43c"],["E:/qinhao/hexo/public/categories/算法基础/index.html","ba7ea09adba64869b45954a9df566b9d"],["E:/qinhao/hexo/public/categories/网络安全/index.html","7ca29c30321760905d48684cc7873d63"],["E:/qinhao/hexo/public/categories/股票知识/index.html","e5e66c9aa56ebc62a68ae399a12a1172"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","5f2a4b1b5ac569f56c05bc304ee7431b"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","fe16953708f58eb71e3d634f46f4f89b"],["E:/qinhao/hexo/public/categories/软件破解/index.html","6d117467198318a2d2196aff9aa0f997"],["E:/qinhao/hexo/public/categories/通信技术/index.html","8e566ed2af84a1000b5e22b086617805"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","52468b8c76003d04fbb102244abb3415"],["E:/qinhao/hexo/public/category/index.html","5901f83490127cd578b9db5396826c76"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","d9973f4e5280f40150b409a829cc41eb"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","f4157e5e7f5210e6a147b96b137652bd"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","8e612028a725a30c4aaf35b2690b6c99"],["E:/qinhao/hexo/public/page/10/index.html","bfeef360e6c1cfea52bf1e8b9739d37a"],["E:/qinhao/hexo/public/page/2/index.html","b3f076c3529d129fc67fc87ba5fab553"],["E:/qinhao/hexo/public/page/3/index.html","8b187c39c25827d47953215df21818f2"],["E:/qinhao/hexo/public/page/4/index.html","2ee18a35a12900c74e1a4b1c10bb6d41"],["E:/qinhao/hexo/public/page/5/index.html","da8860831d5127b6919930317919eee9"],["E:/qinhao/hexo/public/page/6/index.html","18c99bf05688a63421e395f524900ac5"],["E:/qinhao/hexo/public/page/7/index.html","b87666d56192cbe3ca6eebb071e6dcc8"],["E:/qinhao/hexo/public/page/8/index.html","fd501a6092fcc91590dd40ffe8fac7c4"],["E:/qinhao/hexo/public/page/9/index.html","be70f356547c87b7c7be2b60af5b6f96"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","ec272c9dc7fd0e576a222d34b618444f"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","010c929d8d2773b2fb78f19331ee2c38"]];
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







