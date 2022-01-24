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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","b1ec98b5f3f74ded09a06b1bf44bc900"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","c69910724b1339a5acf01dddf95df644"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","ce614238d870f62ac8be8b451a225b5f"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","0f1c8a4c4175e21ef3477038ee1d3e30"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","97f26838de3e32e5c0cc6019a9a78f12"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","98e3f2f7de1668e719cd07775c9b5630"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","069475a2508e5293a5b74cfa587fb7b3"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","e434feb2a76abd5fcf659eb5e6b61c86"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","8cb4114eb7ae3d0bfa5881645bf933da"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","8ea10055287cf80c3237d4b19627530c"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","df65744f43ff4857bd1f8bee32c82ab5"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","8b09b5ac04b18e239f2fc5fe94869e1f"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","0c0e9237fc12169d3d97b9532e84d04e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","319e8560648bbc273daa5386ddf5225b"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","47980014ef73cad1d3080476903e8057"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","0cd653b3590006a861ee9753395750c3"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","670758cb4b538b0f0bcd07d7460729e9"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","36843cb7c04b8809b051daea5d81736d"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","dbf9e7a0002c55cfefb64ff693507227"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","8d8ab03effe012635fa12f33eba08298"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","915add1d7b916614f81fc3deaad77ac4"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","9bae9a4dcc5f73cd5c75fc828fb391d5"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","40de886c719a47d3fe838afd55be4f8e"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","be5c5984674c394ee9ce6f6c99b78d03"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","159e5e04abd716db6a2693ae975ff409"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","92d8f3afcfa3e508bb390f22647b67ca"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","222d878e8093991b70abd1f2fdd54c7f"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","54f9be2fa423c03a7b52076cee27b02a"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","72f328788fa35e005b7304a3abb6039c"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","e899cab84ba5629369b2fba0a0fbef83"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","f3a79b45a511ccdaa4abe050e54fe59c"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","8e24d5d0380befb069b9b4816f53e15d"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","efd8c988563acb1645e77650eef73152"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","29852a088713870d417fb217eb0dadab"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","aa5d0c9e72e77773f5afe02f27d7953c"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","dea134257bebc50296457dea5c562aff"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","6903bc3fc1c79a60dc4a08f12fff6d51"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","8bd68622bb990e9eaf2550089d397693"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","50159eebeb731236e018340722617920"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","365981fe7f51c346e186ca53e1a6bb66"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","584fb3ce3f6941d8a43d846f1e46e5aa"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","159eccf752f89337525a0e24ca331a82"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","f8a4c79dee9886084b321b05a5994dfa"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","92b57b511d64524a9146e147b11e1fd0"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","f95d657e48278bf8841fa7ec06f35d6c"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","bf27bf3cd9e190bd2aa75b179129dadf"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","f4d811a6053bb402997bbd939877e6af"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","d3527848b03351987677f9ffda9a3118"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","a85d4ef008770acf202f24648779c13a"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","e5d9028fd7759602ada10e7469c0a812"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","690f912d60947de458e6593ee1dbaabe"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","7599854758b0f3e844716342c8035c78"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","c292235824ab40ff04bb69f9c2720c5c"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","09baa48477964c125cd9fe3527ac416d"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","c0818f3c3fcf45c8e46d8dc7eb2b2d4d"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","d9438776421d0bf712002a4fcd2e821c"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","8e26b89c79e9345d16319fdeb524942c"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","58cddd8d3a7fb9d0f8727d781391f9f8"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","f59e605b193d3831c48f28ae6aef455c"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","3585c4bde702c7b84774c6b1d9c2ec2d"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","03e9ea87f1399215ddbf891cde479802"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","4ed6d979974d1ae946ac1f7f2de274bd"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","ff9e2785c6a970a9e55fe0137ec8b857"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","8a36cca217ac1a7fa59b2c7538b00353"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","0936cda26d529b38450321f08d768f54"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","9bfe63da825fa9559ad731253b585160"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","80f89ea3a7798c68f601b737db7a5996"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","65f34027f5bede0b3d4947b7762acfdf"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","8f0de26c747fd305b0ac91b4ae597db4"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","a1ec004e798125af5c102695f0b403df"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","881082950f06419b375f5181eec999da"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","a8adfa9e20f8b0da1d166c9fe22bc505"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","5e1c3d87c69ed9b01be201db525e29b9"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","2d29286ebf0753a61b9db21252a32e93"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","05ec90e9f8f75009cc2e989db2093be9"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","bdd4da13067b4545a935674f6add6595"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","03afa390d940f40ac57b0c5350e70ac7"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","f95279baabb9edad3312048b4f7ac6a7"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","47a714fb57f48bcf814c07c69a23bc90"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","da81e3a6ee87b1803e1dd86b74b456c5"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","45f5e973d5db88e9bf546a1a4b8e5a2e"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","8a3cd209d299aec763960e6799c29e29"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","7765420d4ecc28654da86265336f3636"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","854d203a92135c1de81bb76a996c1e3e"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","ca92e1cfb478d293cbc160047ed9a577"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","026836400d9d1fffb334adcc95e1679a"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","3a60964f9b7fd612cc7e246fcb0e89fd"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","239b85563c89496edeb3671bd3f8f70b"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","e4e268a8fe1c548c590a40981a6b2c55"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","04d28c296ccd423d8bf9f6acabcf834f"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","33415054676447642734d967cf544f14"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","ee804fffd77d112fdb6cdac1a9059d90"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","f5bb09fe8a5fe7428cacaaff6833cd68"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","f5b2bb1085a6d66d998f3119dd0b803a"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","136d65e68158b00a48e2cf02bfd23190"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","f02ab2f9d55ea249abc203b6b126f5bf"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","3bd057fc0f4144b01e51514be0fbf5e8"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","25b1964d67ea9b7e6da5fe830e82fa75"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","969047c3ee8bf7b133fab8109ae9663f"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","6a553d4592f3b8cb77866016d9acf68e"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","1c1b9a9be1162976da812e7237ca5186"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","b745c8102b6afaa515222827851c8076"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","160ca5da85c04a4f048ecdf065bebf8c"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","7287509de6226859a18963802611b7e3"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","67c351133f3742aac05ec9c4a1237d9c"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","694aa0cc2e475828f17d1ab6abcaf66f"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","26b2e9af0bcd29d6fad77ddd4c92a883"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","880bb897e01c5e5f751f5431673844ef"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","293130a0a6b4a6366a8a0588df67f384"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","7203566136b5111bfb5f20fa57f22916"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","d279c1f4264d0447a9b72e0b707427f3"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","f436ba5f378e9a40e659ae914c7f95cc"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","8c9c4945b3772d0ff6e0bbe796bcc4c4"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","fc476bc793406d41b2d3ff39e6e1b8d9"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","499c92706b328d592e4730ff6610f75b"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","672ca928e6a277ea63adf9a12d19981b"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","0b773b151b70ca120ce0edc4bf2a4a66"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","afa5330bae63e9a549c290bbbf5fee7f"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","4790bdbbe670074c20fbe27874bf91b3"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","d79bf0605610dece3a24b73a72a45dce"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","bcf702e2b457c0f47d756b6c5757e359"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","68a544ceca52740e49b2e89dd4bd0372"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","198dec62c64ba33c713c78917138d270"],["E:/qinhao/hexo/public/ByteDanceVerify.html","ff34a7c1c399deadf5c819f565d22da6"],["E:/qinhao/hexo/public/about/index.html","d69b6e6e8a3a5ecf5d2e5d41cbee290b"],["E:/qinhao/hexo/public/archives/2020/01/index.html","69805245cb74fb2e5a71d787acbb32bc"],["E:/qinhao/hexo/public/archives/2020/02/index.html","8965ff545e512c2cb2853955cbd6b812"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","1f9e9d8f5b2d352a9942c2e6e76f0a8b"],["E:/qinhao/hexo/public/archives/2020/03/index.html","55a1a5777ba22ca98f8a345d55c4428c"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","83d23ff26489a8641dc84c88969ffeaf"],["E:/qinhao/hexo/public/archives/2020/04/index.html","56a8f12bcb7306397c5249f0d7215d45"],["E:/qinhao/hexo/public/archives/2020/05/index.html","398cc261002de1500d1c7dfc03d042af"],["E:/qinhao/hexo/public/archives/2020/06/index.html","ec0afcbc5272ba97ea0dd4da67a82ba2"],["E:/qinhao/hexo/public/archives/2020/07/index.html","44419f5a226ff44d7f5b09e87f0ab8b9"],["E:/qinhao/hexo/public/archives/2020/08/index.html","56d72bec694c19ec8a488f32403c3c53"],["E:/qinhao/hexo/public/archives/2020/10/index.html","a6679a5dabd4814523d822d1527a6a75"],["E:/qinhao/hexo/public/archives/2020/11/index.html","a92168ce76336cc65602c16797384113"],["E:/qinhao/hexo/public/archives/2020/index.html","3d90b1205893ad9f7d7c3a6598b554ba"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","4d4129e82f7df80661f19633dc45a88c"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","3ce3a768d065887584187fad316e0e3d"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","08fca03b028802df1e0508a2b1956f08"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","0300ffa88cd2c3f74950e6bc4d1ad3d4"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","98d701e16af5000e2126da240f44f610"],["E:/qinhao/hexo/public/archives/2021/03/index.html","5516b541acb240ca00afd05a9ea20d46"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","e2a379781111225222c5e9a47c780a98"],["E:/qinhao/hexo/public/archives/2021/04/index.html","a9954da0320efb902f3132d4fac625ae"],["E:/qinhao/hexo/public/archives/2021/05/index.html","5268c27d67c66c557190af4b533efe42"],["E:/qinhao/hexo/public/archives/2021/06/index.html","fcd9dcac11b81467750ef0aead17a1ac"],["E:/qinhao/hexo/public/archives/2021/07/index.html","e3a76df4b8f9678bd6c8228bc7d4f768"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","3e0a63b895134ec34a8ac631478895df"],["E:/qinhao/hexo/public/archives/2021/08/index.html","30ea1f479f7f937c3067ca8c81295fc0"],["E:/qinhao/hexo/public/archives/2021/09/index.html","133ef214b3878757536257fb091188ce"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","8288e8bad65303c38951e2eb50264cb8"],["E:/qinhao/hexo/public/archives/2021/10/index.html","8b4d97202bbc67f7c89524dad2b229b1"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","5a6b8452f20cb8d236383bcd26664868"],["E:/qinhao/hexo/public/archives/2021/index.html","d63f0402c048c21c788e83024133b169"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","81be22441d8ecd59a5036f8723d8d99f"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","7ce9ca5eb24f1794e7068791910b116b"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","b99158e598f2b819b89dd6fb02273351"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","2a04902c02e6aaa17fc8be78ac4cdffd"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","af3db497297fecd4a1e5201a829148c0"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","1a3f3c87c8e72f2df5b2b3a13e45f18f"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","445069a2be63db00da34dd035d8b40dd"],["E:/qinhao/hexo/public/archives/index.html","49f14506dbcc4c21e894dffedea62034"],["E:/qinhao/hexo/public/archives/page/10/index.html","d5bf5a87d87f0ea68d1768c93e2af004"],["E:/qinhao/hexo/public/archives/page/11/index.html","d5bf5a87d87f0ea68d1768c93e2af004"],["E:/qinhao/hexo/public/archives/page/12/index.html","d5bf5a87d87f0ea68d1768c93e2af004"],["E:/qinhao/hexo/public/archives/page/13/index.html","d5bf5a87d87f0ea68d1768c93e2af004"],["E:/qinhao/hexo/public/archives/page/2/index.html","49f14506dbcc4c21e894dffedea62034"],["E:/qinhao/hexo/public/archives/page/3/index.html","49f14506dbcc4c21e894dffedea62034"],["E:/qinhao/hexo/public/archives/page/4/index.html","b7c20a71c24359e9988cd8fcccd46b7c"],["E:/qinhao/hexo/public/archives/page/5/index.html","b7c20a71c24359e9988cd8fcccd46b7c"],["E:/qinhao/hexo/public/archives/page/6/index.html","b7c20a71c24359e9988cd8fcccd46b7c"],["E:/qinhao/hexo/public/archives/page/7/index.html","b7c20a71c24359e9988cd8fcccd46b7c"],["E:/qinhao/hexo/public/archives/page/8/index.html","b7c20a71c24359e9988cd8fcccd46b7c"],["E:/qinhao/hexo/public/archives/page/9/index.html","d5bf5a87d87f0ea68d1768c93e2af004"],["E:/qinhao/hexo/public/artitalk/index.html","9690a54a5eaaf4d437846a6f7a58a9c1"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","f2f1f0658ef08ed878f4158d32710e1b"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","7fc4fc221cb3406af25d3d2a732cf4c9"],["E:/qinhao/hexo/public/categories/Java/index.html","47812172c75cae4307aae12d77f2095b"],["E:/qinhao/hexo/public/categories/Linux/index.html","e78a28ed505116098c3a7749e3ad2794"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","84f22be9bf9d4f09a4b0781f67098ced"],["E:/qinhao/hexo/public/categories/Python/index.html","c5a62d19dece3b8fed7751b1116372cf"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","1d4dc2945fa5479e90fc0f7e2fa5017c"],["E:/qinhao/hexo/public/categories/交换机/index.html","1bc599f3b6ba87ccd8cdb7a6d872d092"],["E:/qinhao/hexo/public/categories/前端学习/index.html","2f673a5b6ad9a8ba5e76a7653bda4bb1"],["E:/qinhao/hexo/public/categories/华为认证/index.html","b0f0dad6ca76f723ff96c3374c2f240c"],["E:/qinhao/hexo/public/categories/小技巧/index.html","405e9cfa7e17b2a74ae944498cd1e886"],["E:/qinhao/hexo/public/categories/操作系统/index.html","3e699c5bc54387b0106fa8c8ef9e07ae"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","0f68b59d7154815150d10a72cad50772"],["E:/qinhao/hexo/public/categories/数据库/index.html","9aa3e5e114b52fa99df7413e0e82a112"],["E:/qinhao/hexo/public/categories/数据结构/index.html","db1c2a00a2b7606826224415281edbff"],["E:/qinhao/hexo/public/categories/服务器/index.html","40f5d562c60a7ebae800e55ba58aee42"],["E:/qinhao/hexo/public/categories/算法基础/index.html","bbf60b09259db3d0ec2689ce93277a20"],["E:/qinhao/hexo/public/categories/网络安全/index.html","8e14e2eb613cbdaa76b2adc760304c92"],["E:/qinhao/hexo/public/categories/股票知识/index.html","4efd990a5f96405e13ecc831c6bfaad0"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","c8d602d33b6e141ac2996de0320ca83d"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","3dcc0ac53d74661fe063b69283f97b47"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","c122003b7faf70046198fdd1c24cb242"],["E:/qinhao/hexo/public/categories/软件破解/index.html","04033479b827932b3c019bcb96a956b5"],["E:/qinhao/hexo/public/categories/通信技术/index.html","512d4c4d50c59724547a8835989c450e"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","7b757ea974342d631a4d24170459db43"],["E:/qinhao/hexo/public/category/index.html","bb37d7b38b3fc0f87c1cab57e4803628"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","bf87464f17e70fda82d9bdd29acf3e84"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","cca8ec400811d24b0072f4672399a4a1"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","fc3d0914cee7b02f6dfe9f62daafb493"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","99e1da4d3d3cbfe368047449191addc3"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","b6073abd99e2c420b9aa8f7b51aa7b92"],["E:/qinhao/hexo/public/page/10/index.html","d7ea55643fd921f5fb2a2f0a3f7d3f80"],["E:/qinhao/hexo/public/page/11/index.html","1b5cf73fdf1702b1db61287791342a02"],["E:/qinhao/hexo/public/page/12/index.html","8b612a6205dc9c2aa3529c83ceae7585"],["E:/qinhao/hexo/public/page/13/index.html","7b8138e489f77f647b2c3ae2269f7315"],["E:/qinhao/hexo/public/page/2/index.html","78156525ec4f6f7eff8f824f236eff47"],["E:/qinhao/hexo/public/page/3/index.html","3c579e31beb9d8fed00d40c4592ae57a"],["E:/qinhao/hexo/public/page/4/index.html","f007874d4c05f3e12c9a331715a7b11e"],["E:/qinhao/hexo/public/page/5/index.html","4271ebf834a02f5b83d47bee0acad9c5"],["E:/qinhao/hexo/public/page/6/index.html","32b2fac30c36e42768b0acae9fd4992a"],["E:/qinhao/hexo/public/page/7/index.html","cfb881899b1cc6b709399fb4c7c85e15"],["E:/qinhao/hexo/public/page/8/index.html","9d9ac7e199d90e1442d3a407aca0c8b0"],["E:/qinhao/hexo/public/page/9/index.html","bd0377ee77b5b8e5f113e7325054f709"],["E:/qinhao/hexo/public/sw-register.js","cec8255251fc34f632d1b24c2ee8cff8"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","45ed485abccf86f4f2ec3063e61d3689"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







