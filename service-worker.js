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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","eaf284a849243d61c2b59f38018e01b1"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","80b34210763e085b441c64f97d892840"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","f391aa637b507ae75e7ed91c1c677226"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","35c05071e790ef5763dfe84ab894e941"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","37e4a0fdb9b1ab005a00e088c542dd01"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","62a7ef5bfe90eebfe7e32beaecb92cc3"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","1989e5b5e92d417c3880ff0052916f16"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","6a5f0394feef8ddfd06d0440689e3ac7"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","ecc456cd7e0fdf93912fcee1af4f9b2e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d1a3b41a01103e7e7b6b70db7bfef38b"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","31c87cb70df084ab0e50a501f12f2aec"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","009b44ba3845f335b83a3b24ce0c1a0c"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","daf945cfefd0e85e815074836e1f30e4"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","75c69ad969126a3a8ad9351ffb2b3fe3"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","4101a6bdbf3e8bf0c0e086bb60fafcab"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","986e9d96286998e297e077c54afc0b6d"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","96fc2fb5378b333cf7fe688d6e6ed8db"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","7d4682bb7bbad5221593652faaf10c6a"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","c06d02433b3f504acef36c4423f88b0d"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","da39af283da733cc5dc915a4b3e93026"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","9413f7f4e397d1ab39ce52e354a20cdf"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","e4f678f3566fa4efe2c95d44c8c26742"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","27fc1b32900f11c88eb8aed1f6720c86"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","1feb41e900b739c78dfdb426e6f49a73"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","69fafaa355f6c6c740a7d8cc11d10bfa"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","3b1d291e3d263ca3f723faae982e3664"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","c308ea04112c22c23f151e74c987f6ba"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","1c769305ddedd5579e7e488ec72ab471"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","753cf3bd9d763bc04b8326a199181ed7"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","141f98f68e16360173482c5087f2e6ce"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","1dee401a376c57402259037785ddaab7"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","78727c2ea7302936bf79bcbd0c544be9"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","487895c6e19bfb86cd27224e2dde56b6"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","1f007c2e3750af903b469034b9fae861"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","940839a6d7a4c1b8d4220505192e0d7e"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","0e8e1555f8246b45f9b34967e17bed4c"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","712695da30ae37dbff992f9d7bd7eaa4"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","3b81d5b0a804ba0ca1df832311519b1b"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","2d9073613dfbda0e546d22751d70543a"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","5461b96173c83bbf662cf03a577d19dc"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","c81250db237901328f36ecf4afa467b1"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","f88d2924f1b6c58383a217423cff73eb"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","bafa98865b51c0faa8dcce2f8db638cc"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","587dc559c172eb80543f1390a495bbd8"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","afdd281c79212dfa68ba7c93fc3c816e"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","75b98bda170244adcde8ab57d5bb9d8f"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","d0df27eab9a5a8e4d30b3632bccb20d9"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","53f3968d01b024a4f184d3286aa52f97"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","7becc25ae1d4ee46b4086037724e5c85"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","5b4e9332497f475aecd2a63ed7b5cd36"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","b842a3a9e4be28d3d07382835eedc47b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","3ef84fc1e00b74823563797e69757a5a"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","8126ad1dfd9d37e4a0e5c38e16edc64c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","6496ff332116deaf0fd065cb615807ec"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","df0600eedd6a567f4262c2f0a2c4bcbd"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","8c840383e64c9b33ae6bf90375014d54"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","479c72d09aceea53c2ddbc9df5cd9bb6"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","2256cbb24375958bca036b5c4cb15931"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","9b93c1e1da8f23e8b25672e6175afe3e"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","d25f78c7c2d19189377df7e61e5c6aa3"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","bce0563f90e2b5897aa63526e215eb25"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","a9438999b8934790e12bd3406c5451f3"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","bd21034346627f0a6682367cb0124061"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","9ce175c457b7bf49ca98f1ae0a40d393"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","e070151a964aa0eb4a8e4a1a43e3b962"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","e891b355c33a39c784a034f6aef9c3bf"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","ad6c7a6bed43500171e0bc02adea7acf"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","199464ad788463ba1a13857e2dc2026b"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","321f2eb76da4bbee15f98cc5bba648d3"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","ba67e190bfbfb12215a49bdcfdb24e13"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","9990f5635e649b80e4faeac2b7761916"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","07e32e9c51c2ac7ea17a338d6e895487"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","7f0814539e19946a221d6686504a1cb0"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","57f876932938028f890ddaec23fe48c7"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","91b234c12ac7d81b9b7a3090e742148c"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","2f6166b787340aa0c66a839b55f11be0"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","46de054833166f101d04edc9bd617134"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","02aefe929d1cdf84832c7b8f16f2449c"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","3b8dd8111617ab5da2753d749bc497f1"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","04b4ee93c3824d305afee281d40a73cf"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","566ca75e5d7d4de935cfec675aa665fc"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","c227d9ce0319c60123e3bc92fdf8ce54"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","98216cba89f4c5ed19686785e65b0211"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","c5c7055f873ddec255961ce95460b52f"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","6ef2cf03091aff1728d5ca3ca4452360"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","b582c757c41f7e900cac03465a30b5f0"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","435fe544cf10dd8d2450c39f4c8946d1"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","f0cbcd0460a33e40728513ee939ad50a"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","15455e5a0c3f36fbe58e020d720d81e6"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","b92f671d53ff651445e7d4e20e7d8766"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","0f5a6074ebf5002045ab29139214d9b1"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","ddb242c3557aedcb216c93215a26c016"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","bb12a3a3170d32549739eba4cbf81f2b"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","36b74c05215f857c3eaa8f41bf957781"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","7fde992b8b511a0d2332064c4bf9f868"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","f95f27347faf921c806800fcc84152fb"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","4a0808b0298102ac1e2ae42bd0c0a7c4"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","17eac6979e0922b8c6e19450d7c22406"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","1045024d81da712e322043051944f121"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","8af702085fb186d6ef1dcdd73551132c"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","039d2955487601bf5fe91ee930e153be"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","469451109d4f37537b48c56f506a04ca"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","ccdf86907a3b5f75ed9d99c91c830c8f"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","36d36262ad37c30b3d08e4c9edab185a"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","edda913bf91fd14dad6397013934fce4"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","07c180d2bbca5e7b791ec3111e92bb70"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","ce276e40b09bc7f15954c9dd9914c5e3"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","5d08d6c29375fb16ad058cf756f8903c"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","64641afb417ac56e834dde93ffac6633"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","9aa9a057d367675961f721ca0d39c8b8"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","f3f597818059bb333d488a9245d88182"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","6b50b58ad59bfc05480fa06f62d8912e"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","eed91391cb4c319f56f1e42dcdc1f65e"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","e216bde68ae140b545ea0bd7729f92c0"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","1640e6041da2252827dd189c14a0b9f5"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","b46a649e2c0d46e652b8e74a3d7cc3a3"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","738c2d30e6749fbda7a1181628813274"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","800b8bff3b7f40e31566dc531c7c0ca9"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","201e510f66e93ff067bdef1426c31712"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","7b384e350ac2e7f7c6ee526a778dc694"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","f6a9987cb129de76db21e113725099f2"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","df92e81b411b7894de49e4d720179d9e"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","b1e0332068b75ebad4c2af2f866c4173"],["E:/qinhao/hexo/public/ByteDanceVerify.html","9e7858ab9566cb711bcca69c20844fb0"],["E:/qinhao/hexo/public/about/index.html","aa8556a6415d37b6c3808976c310bf1b"],["E:/qinhao/hexo/public/archives/2020/01/index.html","94615fcc573de86148d412560a8d833c"],["E:/qinhao/hexo/public/archives/2020/02/index.html","51dffc7d551b6343c2d39acaa9dd9143"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","22d3c6b956b0f766d5f574671696591c"],["E:/qinhao/hexo/public/archives/2020/03/index.html","ac054a96174e14d09c08ed3a061243e6"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","bc5936ecc7f2d24ae8134f39d46b0e91"],["E:/qinhao/hexo/public/archives/2020/04/index.html","07e512697c4f4328e92317a4c66b5eb3"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b93062879c3a1042ad996dafe2e01195"],["E:/qinhao/hexo/public/archives/2020/06/index.html","0c60d69d92de18d88bbbfafef8d83c67"],["E:/qinhao/hexo/public/archives/2020/07/index.html","9377e954893d78abe320666566185661"],["E:/qinhao/hexo/public/archives/2020/08/index.html","1997e787f31cb66e8514641b23a78dd3"],["E:/qinhao/hexo/public/archives/2020/10/index.html","d690cd7315679aee4db939ffd3675944"],["E:/qinhao/hexo/public/archives/2020/11/index.html","7f822efa504f48369d68b6a079158a97"],["E:/qinhao/hexo/public/archives/2020/index.html","fd5a7d6110f6e3796c123daa293b5ab9"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","7bd1e7b465456dacdda10a63d9667d86"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","617c9e603b53b4a053a00a1c23515268"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","55a0178e62eca4bd324925c0a313b077"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","1f7ebba8d3706dbfd52667bf8aa0f934"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","beb7978e9645776f3347bc1c28d83cd8"],["E:/qinhao/hexo/public/archives/2021/03/index.html","8ff56109975fe111209937b08d43e1e7"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","941d98c2c5ffca18a53e3a833220ec62"],["E:/qinhao/hexo/public/archives/2021/04/index.html","1693eb39a537d4c0c4d17627da62ca9e"],["E:/qinhao/hexo/public/archives/2021/05/index.html","569ace82e72ac14186022581840d0f79"],["E:/qinhao/hexo/public/archives/2021/06/index.html","1bad8aae30709c3e3a5534402a6fdd5a"],["E:/qinhao/hexo/public/archives/2021/07/index.html","cb88d5fe36b828b4adfd8f696f8bd97a"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","3db91f0eeb6215e52b68179319d8cdad"],["E:/qinhao/hexo/public/archives/2021/08/index.html","d29912138ac75b4e18c034ce86138f30"],["E:/qinhao/hexo/public/archives/2021/09/index.html","c1ce8fa4aad7dd4601959ea2bd71ea5e"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","c40ceaa5d0346f6981c53de5914f56c7"],["E:/qinhao/hexo/public/archives/2021/10/index.html","ac6e27abe62a4390dd2064c882fd7783"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","482c5521ccd6373d6fdde99a1bad35f5"],["E:/qinhao/hexo/public/archives/2021/index.html","2cbd04826174761fc844def41d008101"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","d8394a3b3a311da278a9549b7122e1bf"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","01e172e9cf0403a28f35271acaa3ebb0"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","dd1950757cf6a29d8a0ba95fcf508490"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","4f8d30de1de96075cf4ad2334df133cb"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","5ea53beeb72601b1bb90ccb459eda848"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","ab167b514c34422c57b91337a51ca622"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","38884894fc66c779d3632071d8f92a04"],["E:/qinhao/hexo/public/archives/index.html","d28742707e9d7713d6a9879efd754436"],["E:/qinhao/hexo/public/archives/page/10/index.html","63fda655e227cbd2def7144b00f65ccc"],["E:/qinhao/hexo/public/archives/page/11/index.html","fb9b9ed0b0da3dcf35c4e9f548494505"],["E:/qinhao/hexo/public/archives/page/12/index.html","fb9b9ed0b0da3dcf35c4e9f548494505"],["E:/qinhao/hexo/public/archives/page/13/index.html","fb9b9ed0b0da3dcf35c4e9f548494505"],["E:/qinhao/hexo/public/archives/page/2/index.html","d28742707e9d7713d6a9879efd754436"],["E:/qinhao/hexo/public/archives/page/3/index.html","d28742707e9d7713d6a9879efd754436"],["E:/qinhao/hexo/public/archives/page/4/index.html","d28742707e9d7713d6a9879efd754436"],["E:/qinhao/hexo/public/archives/page/5/index.html","d28742707e9d7713d6a9879efd754436"],["E:/qinhao/hexo/public/archives/page/6/index.html","63fda655e227cbd2def7144b00f65ccc"],["E:/qinhao/hexo/public/archives/page/7/index.html","63fda655e227cbd2def7144b00f65ccc"],["E:/qinhao/hexo/public/archives/page/8/index.html","63fda655e227cbd2def7144b00f65ccc"],["E:/qinhao/hexo/public/archives/page/9/index.html","63fda655e227cbd2def7144b00f65ccc"],["E:/qinhao/hexo/public/artitalk/index.html","eddd4c136b5fb36aebdacaeeb60f5273"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","eab823f7c58759a1ec0aa4512c833545"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","f81d9220626c43dda80d9fb428d5865a"],["E:/qinhao/hexo/public/categories/Java/index.html","b3cee57a18dbac27cfc81ce001c6e505"],["E:/qinhao/hexo/public/categories/Linux/index.html","d733b5b6ed5bb4ed4383987a48fae543"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","6456188b7d213ad2f114bed731182dac"],["E:/qinhao/hexo/public/categories/Python/index.html","dd39aafdd11a943e644ea26e6723df05"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","1cd7b2f06a2f230bdb5cf6bc412d0287"],["E:/qinhao/hexo/public/categories/交换机/index.html","f7b8a8516966f5f0e5cac4a02e44ca09"],["E:/qinhao/hexo/public/categories/前端学习/index.html","6d9322ebc908c5890049d61fba7fcf0c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","662ef84466debb76212ba0732b94f917"],["E:/qinhao/hexo/public/categories/小技巧/index.html","10ce0830c3fe590facaff4cb1f184c26"],["E:/qinhao/hexo/public/categories/操作系统/index.html","960603c8e454fcfa3d986a88e404268e"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","094313244fa90b023479b596a4737b15"],["E:/qinhao/hexo/public/categories/数据库/index.html","7224141e8e6f76fbfb4e1d69e75025b2"],["E:/qinhao/hexo/public/categories/数据结构/index.html","b8c49f2b7b36cb9dbfc93a2ee74b635e"],["E:/qinhao/hexo/public/categories/服务器/index.html","d00f26db778699ee3dabbaf2ae0d8702"],["E:/qinhao/hexo/public/categories/算法基础/index.html","d1360beb8122f54c364cddf6210cc899"],["E:/qinhao/hexo/public/categories/网络安全/index.html","c40b29cf2b6631579fd29091b6420a53"],["E:/qinhao/hexo/public/categories/股票知识/index.html","0892e7518a3a6e5036812309cd966799"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","7bde6694ae9b84d8d7b9627296f93e6b"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","2adbbc3b6514cb76fc56e41011887216"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","835ba9833703fa86b15ed5fc4e513d2b"],["E:/qinhao/hexo/public/categories/软件破解/index.html","56a0d149b8f940f704fcee532d00a746"],["E:/qinhao/hexo/public/categories/通信技术/index.html","870840aa9296833ed3095e037cb11765"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","ec135d4a3b95381650ecb4aede8143bc"],["E:/qinhao/hexo/public/category/index.html","48b153e921953f9c367a80f31e2eb060"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","6f95d5ee6e019a543f0e3ffe43524506"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","00b9eb24501105c502ca2ff24bccebde"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","3dc9015aeb9d57196ea28e22928b424f"],["E:/qinhao/hexo/public/page/10/index.html","7f612dfa17308d2ebdb6fa1c74cf01c4"],["E:/qinhao/hexo/public/page/11/index.html","bc4c8823dae2cbf2954c3fd115b15091"],["E:/qinhao/hexo/public/page/12/index.html","d8aab4aa39363044b8d53fd646fb7fca"],["E:/qinhao/hexo/public/page/13/index.html","dae8ad93a9e0c5b08704c1650da225aa"],["E:/qinhao/hexo/public/page/2/index.html","9f085b8fc1c9c1fe298483dd516c52f2"],["E:/qinhao/hexo/public/page/3/index.html","9d1d23f2c5f20d1983b5785d744bf3c4"],["E:/qinhao/hexo/public/page/4/index.html","b38650f62dafe9290da6ff7de794f8fc"],["E:/qinhao/hexo/public/page/5/index.html","8abd87fdb6bd011ea7858c9dfb5feb3f"],["E:/qinhao/hexo/public/page/6/index.html","edd0acc208e097988060b8aac1fbbc34"],["E:/qinhao/hexo/public/page/7/index.html","f4bc7a3c33b0ab2bea948f1a8611474d"],["E:/qinhao/hexo/public/page/8/index.html","b4cbc069b26d4d4b16fa3d704e30401a"],["E:/qinhao/hexo/public/page/9/index.html","66c4052c479693fbfbcdae6638fc923f"],["E:/qinhao/hexo/public/sw-register.js","f3b8db46f729c160f243808e832d9fe2"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","41d761d23f6f6395518a0dcb77ad28c1"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







