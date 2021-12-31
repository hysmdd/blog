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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","9c86e8f7cb41e378dcb85b7d59888ce6"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","4a441cc6745c5390b1fb20b8bb2cda77"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","c001250350edaad4518114ad964183f5"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","a7704a767b70da2ce937e60b67cb7ab1"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","e1467ed82199a4497736d46762eaadb7"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","69695a23167b1ab2518b75bbe6a311e9"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","b937ca0be0413bff3ac183b83e79df99"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","6df2fb1f19944ba21c776e61648ab53b"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e26ecb44931c29a814986a56967cc88c"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","59b8f6729a6d925a8d4c2c2e82ed0e52"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","67705d7967fa5ff47e680d6e4d1c51ce"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","27952f296c1163140f7343fdf267c561"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","03d256b1d2db3cbffd710b391b902fc6"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","9685ac1b5590ac940bf20c1d8d380ea5"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","a06cb0ed95325f2577e676fa0f25e1a3"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","921f455950bc4d74c68cecf9fd9e274b"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","8bbd74c21755f1b0b789bf471e7442c0"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","e85985dbc3bdf230112d8c108e6645e3"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","ecf8c2ffb636e08452fd18c889bc7dea"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","29243b792379696a70b8b6fbc7f11b01"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","11406e1926c7543791c4c960e72ce3d5"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","8342f7966fb83ff8eb5cc8e4b0a622e2"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","5970d7ffbc801494eb454bfab3891ab1"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","c5e88bd405754ee8ddbbfd1ef4db4264"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","63e6861346334d6cca2427b5fc38933b"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","7ed24d8cf18e3aebfa578702dd296fed"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","25252a6b7130ea39c24af9d90cfb0fb1"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","38752462718051b910a819981f3885a9"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","7ed255a3acaf2287806847b13c5f9edb"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","b5547fb9737b4cd850f080c1632de8b6"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","d9c7dd2c4790af8c5c4095b8f85edd81"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","cb40ed1d15cd0ca7e441e0120a733d8b"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","47fde9265d31b53e79bbcfee3f1498bf"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","91def475ccf9914abc5fa0ef41f69228"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","836ad83b0423bb339a52d5e103381949"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","28b8be16fccf284b75ad041c1372f125"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","29c892fbe746303f4916662612d0798e"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","42da4bfe20f2c8339f4d3376cf43dc3b"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","aaecc2edc3b69bb023912ef764675452"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","94c104ab0cd95efda8bf190afdb2e6c7"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","841e71507af9c40e5affef0849e0c4bf"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","ca103234f807125447a615b4e393f396"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","aa31282c66b0684c885ce1fadddb8666"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","2a6a7558af5052c73ed46e4fb38808b5"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","511afd57fa0af0e90f4515c054fec965"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","7f375765cd11e56e4b003e6d77a46148"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","711d96f3f5e70430dbf152439269bf2f"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","f7e6fc8426442456977c2ec66c0a5701"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","b21484ec023e4ce96dc505a114887c74"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","9675cadfb98e32d262dc6b22e7fd5352"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","218036ff359f9d042d862c00c36c9d1e"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","fe7b3723388d3e64122cdfbacd67f4b2"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","8b3105b0122b34db7ba22f214ba90256"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","b961f41e55afab09d6c1c307b2e761ec"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","1255679125fd906a8790f91b26daba64"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","09f5d8c561c35c179ebfea28d5bae89b"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","3a6b43bc8baf4fd4c164ab9828f381ac"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","0134ed200b56e32f09d527b3015ddef8"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","d8556af871950c9edc9118b5bb922b1c"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","08af423c12f59c9bbdd86253256f7612"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","46652ca968c0c15427a9a27397fc34a1"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","c46a79c373d7724df6b7e3b0e19e9b1c"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","7e8a4865f1b6e456d08b58688f9f8d22"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","240eff7ab3f5d28758c37e04293d983e"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","a13941951ec3a22dd1271a3d45efaa3a"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","749a927a4e0219e8ab3cd784191b7510"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","2783ab03db7705da95076c1a39865c3c"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","39366cc551585863ec8669e9ef64aed8"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","21f6e0e16b0fa1b88374c7d2dda6d789"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","643433cb9370335927ce382d99d4b07d"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","c610e1ee6f0aac2dfc48a65cc3f6646e"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","b79739c228ec662428de0eb6de42d54f"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","e0cec13a96221559e22f5d8d25937dbe"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","da1e545f5496c43a52d81cbef9a26843"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","267fb17a58b73b4bc471a2e6169ffacb"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","11a684291cb0aeb9d25830ee567eb80a"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","d213242d4069df040c5ac193a44f2826"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","91dee52186260566d9c4726a282ae153"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","d389bd230879963ec8e47c816df8c26e"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","2a3bf340448f02332133004a1852e13d"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","4b62d0538d5e9669c2aaae64bebf421b"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","998e4b7190ba63c472aa2cd07b51c353"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","bcb183ed54777807cb72c8612a4e7eb9"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","6ac8716a628a2f0a9226407761f0c7e8"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","d97746f747d34dd84693a5e082792e30"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","ad91f2ddeb8c386b6c9f5672444c4ae8"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","58eb81bddec66bd7dfcdad0061fc6089"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","0fa00d561933b7bcb20f65edbe1f879b"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","42ca80dbaea16cf3a2016d6652d87c8b"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","05f224996738d3eb20ccd79adcad6a33"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","581723314ffb97d10a76c07780da5872"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","58095b82802a6ebaa913640d6ccc049c"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","91925959d1f8b4f328408e10db93964d"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","875c157f1730e39d00bb274463614869"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","a6211ad8d04caf78b75d57c660b1a454"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","21ca6679aa240f7406bde5e19ba3f929"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","2b88884a5cc23e9774b90bb26c567987"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","6dd8e1c423d23e6c5b32790f925f635c"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","a251ec9183e101acfe233663ae41f57e"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","d6dadd847b486a914415ec3a6d926706"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","532f65a809e794f2642e15835d145f0e"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","d9a1deab1e5c0dcbb57bdf6c755f7e54"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","b2b042493a213c7a485b2f35ef64fc13"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","a60b3f2eebefaab57b438e7614d5b0b7"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","dbbe9d5943b8b446efc95127a6cfe112"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","ec5428dc90c33f24f9898b173d40d291"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","2a3aaad16e1d7dc55066955842f4b687"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","b3492f21256e48cb13e3d89e8116e25a"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","ae8e8ce124bc66069ca188c7e8be1a45"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","72c7d3602b0253e2682f14a28195cdd4"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","31b7b9cbb4f771a42552aa212ec1af4b"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","da6dcbe72ba039bdee26d1f891cf3367"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","22a68052c04a022b61b7b0c122b5f707"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","7cc486da8740a93ea1314a5e74b076c9"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","d5951848f9bee771c6de879568dbbce1"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","6d8dde4914602993a927598f660b7495"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","fdb910d3b1b4ef379c00409755277cc6"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","5cfa7b4d00e2f02445063d1e197d4be1"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","b6e1a32e4a587bc1d603c31d8f877b78"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","1c768468bb86ebd6c03bdf2fd24fb971"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","df930f2b0e4347819467a4e44e0878b6"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","f14ea7937296e016a608d4ac94fc723f"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","8048e03c538e33ae683016049e88a5d9"],["E:/qinhao/hexo/public/ByteDanceVerify.html","99128b475a2190cba4b3acd859672d34"],["E:/qinhao/hexo/public/about/index.html","c82dca46a0b1d0864b2dcb52dd88ea91"],["E:/qinhao/hexo/public/archives/2020/01/index.html","414acbaac0cb3be0af8b9daa5f57ccd5"],["E:/qinhao/hexo/public/archives/2020/02/index.html","b96c6d48901ca623e3d523e3991786f4"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","5380fb405a382f690b4f3dc0baf536e5"],["E:/qinhao/hexo/public/archives/2020/03/index.html","5e7fa908a562c216cf9475f2f8cb33e6"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","fddb2b3e9add8dfc616197e2ca8f76d4"],["E:/qinhao/hexo/public/archives/2020/04/index.html","f373ece2e176c7f1dc27c0bbaa82a371"],["E:/qinhao/hexo/public/archives/2020/05/index.html","5711e737caec461e22d576593c117079"],["E:/qinhao/hexo/public/archives/2020/06/index.html","12837d1717c0ff3480c00cda3eb6df9a"],["E:/qinhao/hexo/public/archives/2020/07/index.html","8330cc9c18caf5255b1691141ba32ae0"],["E:/qinhao/hexo/public/archives/2020/08/index.html","3057586a8cf51d343e42eef09ad8a548"],["E:/qinhao/hexo/public/archives/2020/10/index.html","41ab7689c2fce2756027210ccff103b9"],["E:/qinhao/hexo/public/archives/2020/11/index.html","1919f86134f7033b9c2092f6cf757a2a"],["E:/qinhao/hexo/public/archives/2020/index.html","aef1a247a7672ff84f90a31af479a14d"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","4e3b722eaee5d299398a6a56c1599152"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","3e576086acac4cc92c802a534f8e9333"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","4fb8acf2ec6bdbd529d74b41996c2adb"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","c62ac13176740cc40413affe8402ab33"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","8062fb795d4418994707c21cb78a7353"],["E:/qinhao/hexo/public/archives/2021/03/index.html","f6a965149e91b1da61d3b516f87f4c96"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","1ebf912c9674b5516e7a23e2ff56fd60"],["E:/qinhao/hexo/public/archives/2021/04/index.html","f04600bc1d102f94cab846272504c8c9"],["E:/qinhao/hexo/public/archives/2021/05/index.html","f2fb75e7dfdeac2db9aa1f6d84d22ed2"],["E:/qinhao/hexo/public/archives/2021/06/index.html","6c5d4243d33c324a67092f0ac6438f9b"],["E:/qinhao/hexo/public/archives/2021/07/index.html","1055cdadeed99e79e0e856c2754a2f1c"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","bcc58b4b70db7b8f06a4f33e2e3185cd"],["E:/qinhao/hexo/public/archives/2021/08/index.html","5828d1ef87a76a499ab1451af53e8f22"],["E:/qinhao/hexo/public/archives/2021/09/index.html","8213a1dca0bbc545e3098d91a0105ecd"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","a85a15ce0fdd270e4ad193436d08f612"],["E:/qinhao/hexo/public/archives/2021/10/index.html","330dc83542421d3e8de09495cc4eed94"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","ed802c5e5503b11a76c2ad987678be8e"],["E:/qinhao/hexo/public/archives/2021/index.html","6198295d3554d0335c9a48bb85f4bf01"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","b8973a6751573c25c0515030364baca6"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","df56984266511df68816284e22c96dee"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","d0baec2a2579baf5c0e953935cb40bd5"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","c0762718d29f247ba29ebfc32a1d62e3"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","1b8cf3e2f92433ee17b587ace44bc5ea"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","29234e27f26436b0615132946629fa45"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","e1ba86422c71ff555dcc79c1ec3e2d4f"],["E:/qinhao/hexo/public/archives/index.html","47e2b0053ff71725ded94d3e7b5b9b4a"],["E:/qinhao/hexo/public/archives/page/10/index.html","ee73d2c0605a11b9e908f8fd886fdd9a"],["E:/qinhao/hexo/public/archives/page/11/index.html","bc58788d1f2bd444f593865eb062a7d7"],["E:/qinhao/hexo/public/archives/page/12/index.html","bc58788d1f2bd444f593865eb062a7d7"],["E:/qinhao/hexo/public/archives/page/13/index.html","bc58788d1f2bd444f593865eb062a7d7"],["E:/qinhao/hexo/public/archives/page/2/index.html","47e2b0053ff71725ded94d3e7b5b9b4a"],["E:/qinhao/hexo/public/archives/page/3/index.html","47e2b0053ff71725ded94d3e7b5b9b4a"],["E:/qinhao/hexo/public/archives/page/4/index.html","47e2b0053ff71725ded94d3e7b5b9b4a"],["E:/qinhao/hexo/public/archives/page/5/index.html","47e2b0053ff71725ded94d3e7b5b9b4a"],["E:/qinhao/hexo/public/archives/page/6/index.html","ee73d2c0605a11b9e908f8fd886fdd9a"],["E:/qinhao/hexo/public/archives/page/7/index.html","ee73d2c0605a11b9e908f8fd886fdd9a"],["E:/qinhao/hexo/public/archives/page/8/index.html","ee73d2c0605a11b9e908f8fd886fdd9a"],["E:/qinhao/hexo/public/archives/page/9/index.html","ee73d2c0605a11b9e908f8fd886fdd9a"],["E:/qinhao/hexo/public/artitalk/index.html","31588d1be953c6a8417a2935d885fcf0"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","6cf7508b57f882c2e604e9d12b1f3c68"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","eb1dc2a18cd6456faf6d726c1051f8dd"],["E:/qinhao/hexo/public/categories/Java/index.html","4086c7ab17bd739409d65a1e0ac6138b"],["E:/qinhao/hexo/public/categories/Linux/index.html","285f7403b1c511231ae30c698a546537"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","e35d14bb47ce54baf75b428543505832"],["E:/qinhao/hexo/public/categories/Python/index.html","32ee3d027be7e1c4cb0fccb30960d99f"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","a2c52e9db5a48cd982a8e68f53ed4d42"],["E:/qinhao/hexo/public/categories/交换机/index.html","7a9c6d71e2e564534d27491025f82817"],["E:/qinhao/hexo/public/categories/前端学习/index.html","48227e99b9a11e90c797fbb41742538b"],["E:/qinhao/hexo/public/categories/华为认证/index.html","c538d0af00a289294de846e47993cb9c"],["E:/qinhao/hexo/public/categories/小技巧/index.html","6cd1191ec3fe090e9759655e8cbbe02c"],["E:/qinhao/hexo/public/categories/操作系统/index.html","8a4d3b39a7a23212744a85e8e146caf8"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","4cb0bacc6670dfb36d2d76a76258480a"],["E:/qinhao/hexo/public/categories/数据库/index.html","2888741fa4643f9e46a957a5529a4ee3"],["E:/qinhao/hexo/public/categories/数据结构/index.html","0594cb928d57f48e3c98fe78b20a6792"],["E:/qinhao/hexo/public/categories/服务器/index.html","4b913804481d8ed2b0b42bb80fb0a71a"],["E:/qinhao/hexo/public/categories/算法基础/index.html","0d7700cf977958fec228f0e852843584"],["E:/qinhao/hexo/public/categories/网络安全/index.html","9a300c8909f73f1c881fffe75f33c6c4"],["E:/qinhao/hexo/public/categories/股票知识/index.html","9546e3b911571178ed08c6a6893690a2"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","041a827c46cc7712bcda6fa26c00204a"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","082e8267864789f75ceb9434c02adeed"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","92b48292085816fc532397908058e21c"],["E:/qinhao/hexo/public/categories/软件破解/index.html","1b18e5945f2932aebff7f04d95cacb36"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d6b4c089b3697db5e1b1a4b9d90572b7"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","6bc6428cd0a70dec02a08b3f7e62d29f"],["E:/qinhao/hexo/public/category/index.html","8c0fc0fb35f8a475eecbbfefb7ab02d8"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","7e802b9427c494c420892e044bbc9884"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","0b4edd71d2ad50d6ab4876afbec44375"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","0dffdbc1a9e70b18939059b1103d7422"],["E:/qinhao/hexo/public/page/10/index.html","ecacfb628d5bcbb3dd4521e7718b0d01"],["E:/qinhao/hexo/public/page/11/index.html","f753e80058750a53b0f7f223d2bfc6f7"],["E:/qinhao/hexo/public/page/12/index.html","20fc9546315a87dc7a78ef619f29f11c"],["E:/qinhao/hexo/public/page/13/index.html","040bf21e79bfaa465868619d10600872"],["E:/qinhao/hexo/public/page/2/index.html","b8d66ae43d9a1a18a4f2859fa218f642"],["E:/qinhao/hexo/public/page/3/index.html","6b98606da3bc460c01fc3849f534509e"],["E:/qinhao/hexo/public/page/4/index.html","41d62b130010bcd823b8011ba23fff6a"],["E:/qinhao/hexo/public/page/5/index.html","2b590903fd61215373b4fd7cf145734e"],["E:/qinhao/hexo/public/page/6/index.html","1f36abe364768ddb67ed5382a62a01e2"],["E:/qinhao/hexo/public/page/7/index.html","d6ac7a5684fe746f222277aa90e1bbd1"],["E:/qinhao/hexo/public/page/8/index.html","ace7f4356b40238e829cde77e8011f00"],["E:/qinhao/hexo/public/page/9/index.html","7b685e2ac5ffe820284a832d8bc10c93"],["E:/qinhao/hexo/public/sw-register.js","ad0238a2255647e1d70f95c4eb8d5d5a"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","b109c9c9332446bf87d95904d6f29159"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







