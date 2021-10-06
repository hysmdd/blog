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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","788e899a52086d7d9f3a2924c8dd9398"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","fb1efa4b3a22920579ee6ce7d6e532e3"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","69ee279eeceba18187ec1592049e4e15"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","1debd443c8fbacacbec44172f12c6f64"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e3c4d1c0784f1d2cf8aff2fa1b6f07e0"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","8e0454c2ba0c9e2f9bf7692ca866a553"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","596be69642cbf03410e325fa17012939"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","7c8f675b6cbd65b404a9149e44524367"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","2fbd47e3a5f380e78e2de9df9b825b67"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","6e62082ab8915626f9af3fede6041af7"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","70f32ff00e49c2a89eada609d7cae528"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","4d4de176d4898bba8a64df6f41cd5214"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e5bb68f51c9d2f8f25dc8b2297b28418"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","2ac5d9254703f5e25e5ec5ff9b182614"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","ff32731754d45703f950546332c65b83"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","ca5937e89963b2cd39fce2662ce556f0"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","76a61bdc1a56e76ae52a7022fcdf5378"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","07c812957cae6a546cc0aba7be523cc1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","c5dd9bd5fccbc9504b9cf38ca851c734"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","f270e31dcf0f4f0826d2a4611d0e3d2b"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","ce94a7c9237dd61918a463c01de7d401"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","a0eaf647b3b0fa48f235fac0b804d120"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","677bda4dbacc6e79a7b716a2069bda64"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","31a0278e4b40f1e5e3391af78af90f61"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","8df4f2bdb155974d094cb0adc3700240"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","d901ac6b93d16c4ec34746f75637a158"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","b1469ec7cc665f736534bfc192e3cb48"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","c8dfea62bffd91ee569bfdcc83b45528"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","d6a7c1b78a5dedfb3358abec9378955f"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","4d2e64073d945f99de2b708079d0d2b0"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","fa3a8f2cc5d6c01065c6b7af42500cc1"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","f9fe076cf0d35f064eb2e7bcff7b78b4"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ab5136d359d5288049b6c2b82bb34a88"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","5e8b27264d488403fce3b914842d13b2"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","4d896094867dd48c082741806ab00752"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","df791e3ed9581c501eb8f09425bd9b7a"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","b2b785bf20fa1b81ddb1122bf8abe7b6"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","cc6d81b609ca2a56ff003b31a2369e6c"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1d25787dcfd0152583728279a4fc5288"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","3660fdff741b43983000e62f24529113"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","dbe5cec2df2f503db985dc7ef2d31396"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","8fc6cf64cb20c9d7045ba3bfd457fc0a"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","a072112e94761778490c5355f81a37ef"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","a8e2f5f8356b5d12e81908b2f1365634"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","3fcfc2c7348071c685b5a7237d7abeb2"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","724cc4f5f936bb0fa1740e5b13b62f21"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","82b03339140b0136ce2f4ef43a23ab47"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","39b9d464cb8d44a93e4ec4d3a1fd9b9a"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","c915eb2bc46433835eeb68ccd5c359d2"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","7a8fc46062b1d9c0d9081c72208a40f6"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","29b62dcc7b88effa78347195e56f748e"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e5e927ad43b078252705c72f566792ed"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","02ae9e62adfc5cdd19863976b4d9de99"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","0804de39fa9690c9d7ebc7b356e519ed"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","2360934b008e1e822ff9335a9f429ce5"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","62a375792194c831e49926216b39ff02"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","856b8d7e94788803091f884dca083dad"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","dd71eae2145d0354fe3499cca16c935c"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","755f0c3a7b647f64c5303042140cd095"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","4d604d7f03e7d74d346ee9caafa10432"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","defefd84beabec82b8702b0681f8269a"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","149d2edb3bed82e6c3a96a8c9af3bfe1"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","37aed0e48b57b374bb42adb1139e8b4f"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","0098109f81e507d0df4052ecf12a565b"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","80707398aa61250f13a7c0d89cd674f8"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","4134b759861c9c5d256ba7fb90cfec8c"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","342f0f0c7504789c236115924ae80665"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","63bedf8a8ca930b278a71483cafaf960"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","334375207a8f4537bcae60fcdc8b3e1d"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","105c222b6abfbe75ab782ce4c6831bea"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","593a6f344e0af61673199f80f9f8860a"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","b8a99eef79bd453b3720f6d10705c20a"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","83ed680068a24a6a1dfa6095cb428390"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","fc71ec7a5074826fcf0152814274ac6e"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","03f3929749befdf0d078c893a3f7b976"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","7c3192a9ee0a46292bb8d1823b2ffd0b"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","ed8c1ab558ed103bf059ad6357122113"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","c50b67abea7e7ae39c173c32f82aba00"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","8a331ef4c5de72eb60395d6fd940bd5a"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","9b4cdd339e78af63847fee2d33a607b3"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","29e30917e03fa917ba3e64d1735a9e20"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","3499eebe496c7f5db9baf153d4bf1770"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","bd663e911a7bae59e7327163a3448140"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","b34e6bfe3e6fe4c0fc7b63e1123f9fca"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","5500ee8aeacefaa44b85ffb3c9ec8f03"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","beb4b6551cc825a592e55449756d0898"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","bfd9c4ab84b4731b24976a98f3f15d93"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","a58266b608d0ae579ab65d384b002da5"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","045fa18ce95de0497aab20df2ec4fe8d"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","896c4bda4fd345e231a341272e7ac038"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","2a07bed4eeed5a7f959cb22c0c85f036"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","01930f2d8126eb64a7def27884dce75c"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","7b5142cc670112b6048acf2386daf6f5"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","8ccd586c7be308addae5410f6012c1ec"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","31b13050ad835c4c7ac47259b4150836"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","93f16ca5a19c1657f722a9a8a2021b6f"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","862da04be147cdb7f3f048b4d0ee431f"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","ee7a0abfdeada86fde94bea2d3d805dc"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","27c8f85639d341db251a5882a3bcfee3"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","6f945e901babc77c1925f31aae894e97"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","42974c2c670ff5fcb53a718b3f41955d"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","6403d7772730a360185a71d0feea4c7c"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","c81565adbd183189c7bfcc2df81842b3"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","2d7e05b27c9716d838ddcebd13a07871"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","531f38215a81f8525a1140cb02d6e575"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","3ebc90da3d296b35bb2953027b074454"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","89f11728180bf3199717a4a9294a0f14"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","ba22b8d9c1fa869ef26771d71d867717"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","f39feb8306cc7da4a5773ac3f0e1153d"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","2af2a6215190bf92b56c3afd07107bde"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","31b4365a3bfe5303479a32f8b33856d4"],["E:/qinhao/hexo/public/ByteDanceVerify.html","bda3dc739443b3d7ffd8a2b1ac7777f5"],["E:/qinhao/hexo/public/about/index.html","25de9f42b06ded7331d37f10a91f0141"],["E:/qinhao/hexo/public/archives/2020/01/index.html","7b695bcf950561d732b44b2dd6bc2554"],["E:/qinhao/hexo/public/archives/2020/02/index.html","42c747174d097cf03d5a452343e90751"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","0eaa1eab673b2163407e47af88a2a2a6"],["E:/qinhao/hexo/public/archives/2020/03/index.html","aa5a9c1b2b2981ded39daa7290198c46"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","75f32da952d07776f2901c46761537f2"],["E:/qinhao/hexo/public/archives/2020/04/index.html","5c3a962ad4c9bb88a3978c01a3b39912"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d15c796e4214c4c320a2fd330e432562"],["E:/qinhao/hexo/public/archives/2020/06/index.html","6a70bf3f512eb9a84d150ebecffbfe64"],["E:/qinhao/hexo/public/archives/2020/07/index.html","d457597c2b86adc5862b232523d08d7f"],["E:/qinhao/hexo/public/archives/2020/08/index.html","aadbc29af2837d345af7e6b190727ad9"],["E:/qinhao/hexo/public/archives/2020/10/index.html","e52fb52555f82afb479692e072514bc5"],["E:/qinhao/hexo/public/archives/2020/11/index.html","60a259f2e29cec60cccefa979f1b924d"],["E:/qinhao/hexo/public/archives/2020/index.html","392a5bc626527cfa0b154cbe459205e3"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","cc9b05164f3556e9fb30514e7844a070"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","1e555f6bd04a5e88e62eb6d0e6d92c2c"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ba9488fe2a91879a9e6d516d1ff3853e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","56369e8f537cae57de079531eac1825f"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","d3ab26a813810fc840d98b8e9ebc7549"],["E:/qinhao/hexo/public/archives/2021/03/index.html","e20ee11d0c02352a8cec82b58cd1b6fd"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","2afbc37b4cde57fe54fe4aac77b323b5"],["E:/qinhao/hexo/public/archives/2021/04/index.html","3d9abb5a71d9fca5b5657b8a2fcadbdc"],["E:/qinhao/hexo/public/archives/2021/05/index.html","1194af00b280abd22f36544883fe401c"],["E:/qinhao/hexo/public/archives/2021/06/index.html","1278407fb64844b4bc4dc551386eb913"],["E:/qinhao/hexo/public/archives/2021/07/index.html","d79664f08d2b08be769fa4f864e07795"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","ca3aab25664782a9bb5b314a341f3d6a"],["E:/qinhao/hexo/public/archives/2021/08/index.html","fa7829469b4cb5a4288159653345a168"],["E:/qinhao/hexo/public/archives/2021/09/index.html","7098d2fac10469a6c8d87826331ef145"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","538753f551133e3cd2f09bc0ae7e054e"],["E:/qinhao/hexo/public/archives/2021/index.html","2e5e5d0ac93c1853e043372eb4091c9a"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","f6cb1f54d88fba78cb2568e4628ec19b"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","b54079357549b526bca0ace62ecafc58"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","3756e5aa836ea5b172b6b98d23d72b76"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","9aa261388774381df63cffa366cf5cc1"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","3111bd23c265c090e921ed79d280e434"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","e2faf1eb760d2590ef9d113cb505c01a"],["E:/qinhao/hexo/public/archives/index.html","0bce6898f2313801d783499e4b2c9a5c"],["E:/qinhao/hexo/public/archives/page/10/index.html","82496ba3d68df88fbb2972af47d1476b"],["E:/qinhao/hexo/public/archives/page/11/index.html","82496ba3d68df88fbb2972af47d1476b"],["E:/qinhao/hexo/public/archives/page/12/index.html","f41dae857edb50065613ce497bdbd603"],["E:/qinhao/hexo/public/archives/page/2/index.html","202d2484036db868035338a411cc4b8b"],["E:/qinhao/hexo/public/archives/page/3/index.html","6ed9770c72c5dfdd88cce5aface9dc80"],["E:/qinhao/hexo/public/archives/page/4/index.html","6ed9770c72c5dfdd88cce5aface9dc80"],["E:/qinhao/hexo/public/archives/page/5/index.html","6ed9770c72c5dfdd88cce5aface9dc80"],["E:/qinhao/hexo/public/archives/page/6/index.html","6ed9770c72c5dfdd88cce5aface9dc80"],["E:/qinhao/hexo/public/archives/page/7/index.html","202d2484036db868035338a411cc4b8b"],["E:/qinhao/hexo/public/archives/page/8/index.html","cab7357f87a5002f601b9f57a2f4f252"],["E:/qinhao/hexo/public/archives/page/9/index.html","82496ba3d68df88fbb2972af47d1476b"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","c5875f5abd33f4cb311083794ae836ef"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","377f3340b78990f6860dad31127e3948"],["E:/qinhao/hexo/public/categories/Java/index.html","f88471edfbdee09719e6ff60440cd2de"],["E:/qinhao/hexo/public/categories/Linux/index.html","58e269650781d23f1534567c3cf4d9af"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","f45c229fbaed8c5868fbcc8b96312fb7"],["E:/qinhao/hexo/public/categories/Python/index.html","0f5d15c4fb55801d3afdceabd0862085"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","532fe9c6c8a21053e9691d2990e90c95"],["E:/qinhao/hexo/public/categories/交换机/index.html","ea44bb50f92c96a0976b6d54832cc067"],["E:/qinhao/hexo/public/categories/前端学习/index.html","9a2880e032c1bda2b0ef8c493a08a882"],["E:/qinhao/hexo/public/categories/华为认证/index.html","123aab1529b230368f2ee46006bd2c13"],["E:/qinhao/hexo/public/categories/小技巧/index.html","99ce652428ea33e478e7cd9be18efd89"],["E:/qinhao/hexo/public/categories/数据库/index.html","007611427fe5a8e39ae1358fb970734c"],["E:/qinhao/hexo/public/categories/数据结构/index.html","41c65eaaba9fb130b60370027791d736"],["E:/qinhao/hexo/public/categories/服务器/index.html","154c83900d1aac286c7564b314000991"],["E:/qinhao/hexo/public/categories/算法基础/index.html","3fbff4bc264fb3ed7b585f8e72902e28"],["E:/qinhao/hexo/public/categories/网络安全/index.html","9b843b9d26165a6fc755ae91e1af6df0"],["E:/qinhao/hexo/public/categories/股票知识/index.html","55238b885964527ddb7b4074ef47eb47"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","fe6cf0b235bf573a67ede4804a37e8ec"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","fbaddd89ed0c204597c4b674f2665263"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","28c6760679e928aea4cac701a91089d1"],["E:/qinhao/hexo/public/categories/软件破解/index.html","c63b69fc6a6bf82afe797f6b2a006330"],["E:/qinhao/hexo/public/categories/通信技术/index.html","a7d3cdc3e02f1b9f898b7b27d81f7f61"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","1667337f1379958c04e4405a4e8a0a08"],["E:/qinhao/hexo/public/category/index.html","82c05a8a33b337b0bf7bcd642b89f69c"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","d9973f4e5280f40150b409a829cc41eb"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","2727de4e4bbdb7d95009d7f626c00688"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","7a695d9dbff2bb4c19391a63ecd296bc"],["E:/qinhao/hexo/public/page/10/index.html","fb94f7dddf490a725e49a00e5b8dc9bc"],["E:/qinhao/hexo/public/page/11/index.html","06a0efe706498dedd757e8799ad73179"],["E:/qinhao/hexo/public/page/12/index.html","74cc41ba425e6d1f6239a5d89f851ddf"],["E:/qinhao/hexo/public/page/2/index.html","0a9fb4c236f8da1dea71c1393e82e806"],["E:/qinhao/hexo/public/page/3/index.html","030b62f97d16cee6c61a127f9325c79c"],["E:/qinhao/hexo/public/page/4/index.html","f7e1b2fc43c1339c4807b70be9448eea"],["E:/qinhao/hexo/public/page/5/index.html","821262837335f8f6f13463da97379a69"],["E:/qinhao/hexo/public/page/6/index.html","cd34561603232d54d3da0b433be36c69"],["E:/qinhao/hexo/public/page/7/index.html","d38d924bba98647cb4da74eaad1f4404"],["E:/qinhao/hexo/public/page/8/index.html","8a6e3e9517dbcbfa7a4c1d5c705786b8"],["E:/qinhao/hexo/public/page/9/index.html","06a231c9add7f224273ad465f54a83ce"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","96d5707de046f1d8082f1b22cc088f62"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","010c929d8d2773b2fb78f19331ee2c38"]];
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







