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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","3531c390bfbdb32bff092a5132f74ff2"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","6b484fe125379ba40ff60a991501cd0d"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","b9ff8469a6a3836fc35806315182cde9"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","23c5113893150f6edd54d00799d7a878"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","9131076100cc8432f2d95bb687936389"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","b4be11467f10421b94e729424f575a67"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","0949f9d310b7b28b9a997bbaf12468b9"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","5dff87b7d666be01c631b498da913178"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","c875dd5361b41f1f3b93edcd5e1ce586"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d4e033638562cc0e0763665b88d56612"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","5e8522e31dad6de9918d9826085592b8"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","7ae34cc2e39541c31b42108806ff0444"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","b6608d14e844451780e5c630a9ec98e8"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d82ce5c85e85e468067f961f9b7708a9"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","270448388d3b5cda795bffa36b82d0dc"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","a4b619d325fba8bb278f9ec2a4405964"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","94ac8374ef8c228b74a43da69bf30d36"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","3379f599a93263508559a4e002d1e014"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","4c2070fd19f6be334089e1047aa2d420"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","9be7bcbe76578e198d62f8bef818300f"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","13f6a7bfa9cd7110406a2d581f63c272"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","0b4b51e220319742f75791a79b12b605"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","1bdd781948ca8ad013cbf2875926b322"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","98dc65037610da61c1f1a20531cb2b2b"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","348362c9b2884bb8ff5bbd5f3e5a8f21"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","c65de8215cd412b16915fec24a56e60b"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","387ecda7f1bdadea00d3e9e718b8ebc2"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","99a90725b6363bc37209d7358d6c927f"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","dc318d0354623abd46266f7bbd177bf8"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","d4f7ac51176476b43efdc235ab527403"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","27bf4c7c43b39b942e4691cb9911c971"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","9edcfa39583d334cc5715471a3fe130d"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","c4a21eada5ec98406fc55e871bf59582"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","c2159067a95c4dab989ef24a5dc9a0f4"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","9d0cf672bbe053af17dff4d987247ae4"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","8742239c0e9943d53fc4707fda79388c"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","9baef512713a727fc413d31927cb6479"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","0ed9ecb4522d986d876ab660b299ddea"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","5711043d2baa72a48bc16622c11e81c7"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","4a8e1040429b9c853c26a261e5b68174"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","bdb04aa0ae24a9732912cf28c739b9f1"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","72e86004e0063625dbda769fe27277a7"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","534799fae9086d6a05181cc409cd6ae8"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","d708ed6d06c8cf64742567543496a59c"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","b6d08ca357a2d68367f7a0f9f6dc5540"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","3cc8a3901a20a92d07fa3fd55cd3ff88"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","521637b3c8b7c2d81c42755ddf24f512"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","0399cfee7e81ea298798cc0c95b333da"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","f79fb32c1dba253c7e65a789d1af1b9b"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","3ea0bc8acb663e5d07ae831dfa46a1ca"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","1dc38bafc46c17fd8db6fceca2775585"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","e6e3e6786317ac200ccd6ecde1993f13"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","087cd8f64b007e875ebf205dd4aa4838"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","e89b1d8d0d3bf42e4159aad93f5535db"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","be4fb903ee38d52a298d3368de9413dc"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","a570366cfc50beaa08fc50c401cec182"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","c0b6f2f18283d947fc05a2a4dfa00caa"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","9264ea1f1e87052605b7973465718f94"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","c02211a88b2ea12d4cc5441baadf8771"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","9959931d0d00ab03869e4fdc8dc86eb3"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","5dd7ab8e35c34b2b1e363f4779624ece"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","5ca574932a88356b6a1f4f2fea5537be"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","df8848c76008351cb946793ed548befb"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","f6a80bbb9fe93fede8f6ab7fab9d380a"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","6e73b30d815a800bcaa9200db8fb7786"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","e788cff7a1f95d30e23b6473c733e09f"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","4c274fe026cd7ca5fd7c2fda00b873a4"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","2e3ba38e2a863b600c432d366e9e8dc1"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","94cac10f016ae36a14ba6731201b1119"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","ae91855f55f2b3250a6228e29cc58be3"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","327449de7818d9707030fe2d2f0d5a86"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","e8424564a8f3b97bdf39250b5b663d39"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","3abfe7776df683e9b76b6768175e475a"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","1bf00e80aa9cabb81034217541905be3"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","3fa79c597aeec2a23e0c805fc10e8223"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","abfd4ed1785bad18cb1fa0a5664b7080"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","0ba6f79fb8abe5d98be38477fdcd217d"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","84da9318badfdd0e29479fe697e99664"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","e0abec276ec8adf910c69dba61209d0a"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","59c77f524d15c4a9b913f556fbb4bf21"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","53eb1fb93fe740cab9c2dddfa2ec5896"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","b5cd8661d5703e404171de9ae380f88e"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","ff37e7ec3a5714054680edfc0e7d6808"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","000df6220002a5b2af9caa9c806ee891"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","a0ab906323ee6557b01f2636b6122994"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","6a6e3cb4462eb597b9039263dce6e3e4"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","f69cb017a67d1bfffc87f26ac4634035"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","4a6ff6b31894cedc5bd4e3163b486feb"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","517cf44b7561854d3a96e009a9be0823"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","6b1a900ffeb4c56187b7234979c1cdd8"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","0cd6e895b0d18ca951797fbc6debc64f"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","e6d2c41b9a2efe76c6c285055e02b633"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","fa882f319a6c423a1ce1f1281702cbe2"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","fd0b95cbaa0f829f9a31385bc1cd3740"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","f5a93214bfa9277f0aae75a172d44431"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","8e3984cba89afe3db7888c54272ba6f4"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","980f6b258ce7ac496c91f56e3487b245"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","19106c1d7095227c6679bc1752637737"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","846c1c3d9c121094c661c2278e6aa5a7"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","6f813aff92edd43eb47726a9ef274c61"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","a9e6c9b85a8f7daba50ab2793c41fc0a"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","e3b0090d36cef2cffc59dd4e54d040f2"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","fd7412cf1169621865bfa429e5ceec45"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","8d2ed8f2aaff6281c85f00cbfc05df79"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","1660fa1300a0fb65ebe55fc5e7aed9d0"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","1061b27741bb0f48e12aeb47c8fac64f"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","78467a5acd248e737f771de143ab2b11"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","fc0379c164e67059c3ee0af3ae44e224"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","f7d1ccf1d9b66095b97522a6b37d8862"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","07c8ca5c82a702bb9511b3a4d6d5cf03"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","562f261dd36a3057555e3f0caf91e580"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","073673bd489a8ad18e0a09a07710db81"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","6edda06b5b20f4ebb03cb74c3f6bfcd0"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","1f1e58b491185dad419227d91aed149f"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","d2b1998954912b10b2d18fbe5551701e"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","a882743c2d2b260edc607374ac8871a2"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","b9e4aa825f6149b5dfff10a3b97ccbf9"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","ffdf19b355ecadb52925ec35f503593d"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","e4f5c8b0d8a15da76f5a6114c6fbf885"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","425c1f8efd1b01700855fbe3f47a81e3"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","b370976fdbd89b0438cf26f40b492e9c"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","3ea38b6c89e4c9a1771bf5598e46605a"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","350e2989077fefc36a531d84ecdc9e08"],["E:/qinhao/hexo/public/ByteDanceVerify.html","0fee7f6676f46165a242e43224616f50"],["E:/qinhao/hexo/public/about/index.html","839333d3341d1f9eba09926488414a5c"],["E:/qinhao/hexo/public/archives/2020/01/index.html","92667d2f4ae252dddd9a6f7d4e43c843"],["E:/qinhao/hexo/public/archives/2020/02/index.html","e354a4b635273d20379324c3785130b0"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","dc63b78bfdf488a0c71189218aca8613"],["E:/qinhao/hexo/public/archives/2020/03/index.html","7031b1eb1830ad57d4b6cb4ea0aab669"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","fbb75026a967da1a4889b64812e6326d"],["E:/qinhao/hexo/public/archives/2020/04/index.html","ce1ee09feb5f9b066faaa5f2c7de653e"],["E:/qinhao/hexo/public/archives/2020/05/index.html","ce705c4ccfb1e9785cb5e14d83a9c523"],["E:/qinhao/hexo/public/archives/2020/06/index.html","2f679122dee18a023f0052bc19f94203"],["E:/qinhao/hexo/public/archives/2020/07/index.html","ec6e943e712b00d93d1467fa02bddd58"],["E:/qinhao/hexo/public/archives/2020/08/index.html","ed1b99edcabd89d0f440764a71cd9aaa"],["E:/qinhao/hexo/public/archives/2020/10/index.html","6e548d946430bac369175e3362b5a058"],["E:/qinhao/hexo/public/archives/2020/11/index.html","79f22ae0f6b9909f04d554fa21162a0d"],["E:/qinhao/hexo/public/archives/2020/index.html","0abfa687b8ecb790ed4ff1b3ed4cac53"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","340dfa510b9c554791d9f73a377c152f"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","a6b1ee37b544e9d00fefaa3b47d634b3"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ccc957b16c6d8a5b3619ed2df8be3c9b"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","05ae5d270ac9916b9f8e2c04aca35438"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","1b1885d9e11a1a67aba03b03f0e6b134"],["E:/qinhao/hexo/public/archives/2021/03/index.html","5b53d106a8546672539f3168597dfd04"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","615adc61f811b6b48e292d0a252473e8"],["E:/qinhao/hexo/public/archives/2021/04/index.html","b839cc9b8ed066f24dde3608fedcf69a"],["E:/qinhao/hexo/public/archives/2021/05/index.html","0a3d25b83bd275991b824383419e976e"],["E:/qinhao/hexo/public/archives/2021/06/index.html","53c879865887510c699da50264b2235a"],["E:/qinhao/hexo/public/archives/2021/07/index.html","30f0863881e2135fe3c6748f7ac88eab"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","c08a63b09cdd92909b43f2b50d98b631"],["E:/qinhao/hexo/public/archives/2021/08/index.html","284f5b85ebf94949c7470ceca75797f1"],["E:/qinhao/hexo/public/archives/2021/09/index.html","d296407b96b1ebc3fd28ee857e92c4b4"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","d674d911f91b8e73b50cb26bdce89588"],["E:/qinhao/hexo/public/archives/2021/10/index.html","ecc718ffbff500db59120361827f436e"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","6928b2440f890a7e4e07dfc89e4d21fb"],["E:/qinhao/hexo/public/archives/2021/index.html","05c3f678ee221b8c5511f3de10e9422b"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","a2f1b123c578832d05e01252d855ba00"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","b7ca73a5eb5faf3475d90b553250e863"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","0e411afb6d6070e550c83bf27dc02493"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","223c0b193a50682bbc5a31524300a797"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","715f4b8ad3446b5ef0aa004262fc78d3"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","7961a3c77e60675724ebfd83161c4e33"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","b1090313f768f1ff3fa4d146c480e077"],["E:/qinhao/hexo/public/archives/index.html","0afe4750e9be2d057fb8f8e631818042"],["E:/qinhao/hexo/public/archives/page/10/index.html","bb999a7fcdef00044d23b5bc160d99e9"],["E:/qinhao/hexo/public/archives/page/11/index.html","2be3afed9cffa215a3ac5bb752024c13"],["E:/qinhao/hexo/public/archives/page/12/index.html","2be3afed9cffa215a3ac5bb752024c13"],["E:/qinhao/hexo/public/archives/page/13/index.html","2be3afed9cffa215a3ac5bb752024c13"],["E:/qinhao/hexo/public/archives/page/2/index.html","8d368b7c363a0cd9d38af656af87f3c6"],["E:/qinhao/hexo/public/archives/page/3/index.html","8d368b7c363a0cd9d38af656af87f3c6"],["E:/qinhao/hexo/public/archives/page/4/index.html","8d368b7c363a0cd9d38af656af87f3c6"],["E:/qinhao/hexo/public/archives/page/5/index.html","8d368b7c363a0cd9d38af656af87f3c6"],["E:/qinhao/hexo/public/archives/page/6/index.html","8d368b7c363a0cd9d38af656af87f3c6"],["E:/qinhao/hexo/public/archives/page/7/index.html","bb999a7fcdef00044d23b5bc160d99e9"],["E:/qinhao/hexo/public/archives/page/8/index.html","bb999a7fcdef00044d23b5bc160d99e9"],["E:/qinhao/hexo/public/archives/page/9/index.html","bb999a7fcdef00044d23b5bc160d99e9"],["E:/qinhao/hexo/public/artitalk/index.html","e0aa71ecf40ec53f8e70172631c0d824"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","299c6458e4a6ab0426d38ecd2a06fd58"],["E:/qinhao/hexo/public/category/index.html","a18a27d6fd084fd69d73e4630bee54b4"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","bf87464f17e70fda82d9bdd29acf3e84"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","cca8ec400811d24b0072f4672399a4a1"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/friends/index.html","d6aec6f2d003d808e28c65191f8c3658"],["E:/qinhao/hexo/public/gallery/index.html","3571d7f0f628eb2ac132525c8dcfed53"],["E:/qinhao/hexo/public/gallery/reset/index.html","15628462916ce2d8529e361678a1c89a"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","f496bd43235fa1a13a0a62f7679df491"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","06edbf0e82a8fff9e4c304de762d2fb2"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","a4f4ee4371efa7132dc826fcc26c7047"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/movies/index.html","9373351d656454aa9862112a9b5417b2"],["E:/qinhao/hexo/public/mylist/index.html","3cd07d7ec3f74f5dfccea1cbfb7941a3"],["E:/qinhao/hexo/public/myphotos/index.html","b712ebf86c7ec5811f8b4817fbab7b9c"],["E:/qinhao/hexo/public/page/10/index.html","2f953a89ac0930fd1c6967ecce68e89c"],["E:/qinhao/hexo/public/page/11/index.html","d33bb026dd8964624839d3b1dd3ae275"],["E:/qinhao/hexo/public/page/12/index.html","82a9c72f30c99f6b9020c73cc8025fa6"],["E:/qinhao/hexo/public/page/13/index.html","d69417e45cad194485b110f699602177"],["E:/qinhao/hexo/public/page/2/index.html","291a4ecb032a9c3b7afb69618ef59dc8"],["E:/qinhao/hexo/public/page/3/index.html","541e019c9467a0f393f4ff0bbbc75964"],["E:/qinhao/hexo/public/page/4/index.html","dff0a109f96164463b8268679bc67620"],["E:/qinhao/hexo/public/page/5/index.html","ad61913a727d3a31757a644079ddf7f9"],["E:/qinhao/hexo/public/page/6/index.html","417bff517e83d175ee635ad72d5f0c24"],["E:/qinhao/hexo/public/page/7/index.html","d59a021b59c8fc667f20beee6f43dbb0"],["E:/qinhao/hexo/public/page/8/index.html","d5ba3781c5458b87f0309c38f6da011c"],["E:/qinhao/hexo/public/page/9/index.html","b4ed6cba5d46d2cf01f4578795a73c53"],["E:/qinhao/hexo/public/sw-register.js","30a7cede688b086e60ba36fee6e27530"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","e462eccb379eecefe0a507ee92351fe9"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







