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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/ByteDanceVerify.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/archives/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/Java/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/Python/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/交换机/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/前端学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/华为认证/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/小技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/数据库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/数据结构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/服务器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/算法基础/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/网络安全/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/股票知识/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/软件破解/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/通信技术/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/category/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/page/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/shuoshuo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","de937d5288fcb07f07327d01a28e1480"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







