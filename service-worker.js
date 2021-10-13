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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","c6ac0fab145d361d928d376067e255e0"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","d3bc17c3c502705663c00c40df49b92e"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","038caaf8cfeb241a4d3f395d24d44ddb"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","50441e7fba9bcb0717ed5a5839416754"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","92418afc1525c1618be71c3df5b6f007"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","726ba5136e90a61dd7434eb16995c540"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","2ebc6234bd5fc1c920b747b47af08a67"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","afa10360674286eafbdb2d67c59a1c26"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","98f6a7c7625909d9cb8d03f1dc44c9c3"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","ceae66122f940932825fb62b70b4a4d1"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","e638a7cf054e18d021002be6588244f3"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","9ef8d51e8f6fe9ba51712f6cdcc6cd5d"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e4000e6f7d4be637583875264c45af09"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","eb9c45d6bf7a02a323a8d155614ef7d9"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","a19f53a0d03dbd4dde95bec61a1c66e9"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","084ca990093460a382ecddd8af3251e6"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","7f4f74f392f73216f442a0cd66edb2a5"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","f9a9387978340249500bd76f799a043a"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","ce3682edad587c6804a061f06db2f60b"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","1438c85c17b768bd3c33e19821463a13"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","76fe98a228c68a3bd5483034cf482bfd"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","2a678fefb4db2b175e9847e5f19a660b"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","4d7ec7d45882836f1d5674090abbb278"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","5392a91a3ef5e89e7eebf31087c5387c"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","2595613f3f86a33e007910195d25e2ef"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","5d1fe937e4491bae8112e587333e6874"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","7e2a239e7bf74f693908be7a98405010"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","d4f7f6548f3aeab34c8dcf7920c0c8de"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","35901ba6c2c0a26dca3acf8a31b61672"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","6ecfc1fb6ec2879655f8a0de4acb7063"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","e98dc14b5219b54f36ab90c527e5efca"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","56f5700b08f7e7b5d8b42b5a9864f0cf"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","9aa6adaeb40155b92a72b261df79d72c"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","9f0979de04e3f31a2eb160aa9e62f9cc"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","7b9f2748c2908098cecd7e01bfbf4d56"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","bbb9d4eece228f67404cd74cd6d7922c"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","ebd26de916c072261120830fa35cb389"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","c413a99592017164351315a71ada92ed"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","b3c5543b683c575102c6818e10aa013c"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","059ee9ac7e3d0bdbd49dd8f511961c80"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","2527d3fc033036660a3eaabe1e5b7a71"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","f402cc4d837d4b170e13227184231b4f"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","af4c9c0351ea46f5fe7990d46777c625"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","aa159b8625deeeace18920e45f8292c1"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","6f11ef399a83d06897e2477b7e6cf6b1"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ee419d2ade917aacb2be443004b99090"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","6adc91ee8674c8933533a7fdf3b825c4"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","848d4a109de3c0a7bbbbfa2bafdded25"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","d01d7317c4854469e905e7de1da68c60"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","9dc2763061db0beef269149624b3097d"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","1d18ed7a252d4c6eff77a8172fb7a861"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","29101a0ef652d257b702fe72e7ee4320"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","d54c838fea3e63e4ffb215f837e1703f"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","5903c955f5c69fc2918c3c78994af06b"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","921fb0a5f68c732c65ed13dd745be8c4"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","d0efbba9cb63ad4893291de07688e9c9"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","28279c81a5f0b55db1e2f2bd61ec766f"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","f7b4bd3d5f34df5bc8a124f1b0373395"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","231fc07d273c22060e4bc802c11f0318"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","1e235173be030cb989f22bbd0dad6ad6"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","065f756db813a508f04b04a5fff643c3"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","0a3328f8a5ca290e6c742c7cbfc4bc52"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","b0d7ed02ebb52aeeeeb41298ebd7d29f"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","bcfdb6947289cbc8e01bcca1f6e22fe6"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","106a6a2835bea60d0949eab9d8551689"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","b968f9eadad51ac49418b9163fcaaca7"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","6e4c72baa3c4c2b4dc33bc2f8d033452"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","b26a787f40c76140fe77bd066b86db5f"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","b8518e83e52fd2f7e64de89b8b3510ca"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","c796152f209df8bd8421ff9c6d0604d3"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","e7c4b3efe0e51d9b2ba640b21bfa60c1"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","693529706e5181db0640838f057ac69f"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","b1f14eb929cd4e7c936e2ca025dee283"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","70181064a07a620ee70c8757d2509616"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","7bab1b50629fd5b4e9705359d9645ecb"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","cccc9c13725bc8b51add5c64472089ea"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","7b3cbc18aa7ff37392bb14e921df5dff"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","55792bed357b2bb738d7bf16b023532a"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","620bb6bdcdc9b639a78eaf3e960ffcd5"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","74562258f113ded1ed6f5c390b0649a1"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","31d6ed875fdcc801f2373fb77f922b44"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","191f63fe1bacd7eba3b72657149dd080"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","d7eba5449e67f15a2a14e37ad6962793"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","66b25cb038f8d6e12ff6fcaa78f6221c"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","ec73648d81c8655617c90c2019410161"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","fbb417ceac4d17f82f490fd9b3ff8c29"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","ec65095d974fecb87aef2bc85a98bb89"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","1ccff2987ebf740ab19bb0be3c20f5b5"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","3b1949d6adc48e966dd7c92361eb473f"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","20b8aeeb16611a3e768bd5327b2fda3b"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","752cb3fd4ac2cf500c691d23a8b87695"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","f32bd7aa865dcb09632a7ed576aec7c9"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","922446bf712d109a45987603f5b236e0"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","bf6b08e31ddde0f402c523323aa647e3"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","b588c69b87fc9f596875e594f9754db8"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","d0619cffa82a4aeda5144a1fa714ef17"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","a15047313278f6a6af9569ab4d01bc59"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","3b66144ef1743c2a9ac529ee54edf824"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","c7374585fc48a49083d59ce75bd85c66"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","056d7ce26b75bfc0d732bc3c5f8874e2"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","75a2977f8d6e93c6df2f1e0b4f198215"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","0dcb6f391d2518985ba704ac41dd1abf"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","3a918d6bee90e6b589d3905a130771a7"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","df7a5172faa202777bb96ccb4ee309c9"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","7da76adadaf4f7304612b8778e366205"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","34c95678255d2534c20b86d354a21109"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","bde3e417daecf6662ab74833c122bc31"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","ea83d5a0a32a9a4cc71a93a85ebb1114"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","1f7bc81dae9d6841410bc2bd442282bc"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","795291f834c988117b2d6dddc6f43012"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","789c762c90d718dded104ad4dc848359"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","f12d83dc811de13dde4e9e7fe4f7c1f3"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","4427a8469b20534353842c7cbd1a5630"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","23d7b14b6e208cd3866caa4b0f1a4d00"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","579fec881ae7f74e316213debd6e0b23"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","3efe71c72c18c653bee98aca44419a0e"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","1674e696c23094fe0d60a9b5fc1a0dd2"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","66f05a4e2329d482a7b9686686ed94e1"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","29cc8afb1d35ec36bfa117fe99e31589"],["E:/qinhao/hexo/public/ByteDanceVerify.html","59f747c126b5c855af6397e90e6360a2"],["E:/qinhao/hexo/public/about/index.html","c5a5ac71d40a2844e00724942313aed1"],["E:/qinhao/hexo/public/archives/2020/01/index.html","f18bf7bb468592c23a01b2c1e82b730f"],["E:/qinhao/hexo/public/archives/2020/02/index.html","9023732e0a903589415428c73f7fe1a8"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","8041ea55ac8f56f18b38844dc3590356"],["E:/qinhao/hexo/public/archives/2020/03/index.html","dd3084ed8459a0b1d07b8833d9c884ca"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","eef5be2a9c94d9ba4f9c3c21f5744a0a"],["E:/qinhao/hexo/public/archives/2020/04/index.html","2d18481cb5a704c9f946f92b6ef8c26b"],["E:/qinhao/hexo/public/archives/2020/05/index.html","2741e7b8b072aa66e35d694d8d213aab"],["E:/qinhao/hexo/public/archives/2020/06/index.html","cfe6ffd3669a5a6a4bffc7f74c6edd4c"],["E:/qinhao/hexo/public/archives/2020/07/index.html","490f8c021feb232bdef640749b0abe36"],["E:/qinhao/hexo/public/archives/2020/08/index.html","17197f1603b44b60efb8bffef1fe75bd"],["E:/qinhao/hexo/public/archives/2020/10/index.html","ac57de03dd0960a8892e745553345060"],["E:/qinhao/hexo/public/archives/2020/11/index.html","52a91c07dcfaa69daf5c2cd1831169b9"],["E:/qinhao/hexo/public/archives/2020/index.html","ae97e50ab10adc5204bdf06b626f722c"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","dc3367b3929ec99e683f57061d9557d7"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","5e7b342f44880aff6a54fbbb92d0da09"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","f480a8182e6c19420da4e7a461ddbad5"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","3dde4dd83a8ca6a7392210505603d8e9"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","aee870438c4eea1491175362dde43a0a"],["E:/qinhao/hexo/public/archives/2021/03/index.html","1f3468c78a3569db7dafac467a6b1093"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","2bc6ced18e3d5d949cfe8e0b983df69d"],["E:/qinhao/hexo/public/archives/2021/04/index.html","c11afb870cb2f625d7aa76175d912ec1"],["E:/qinhao/hexo/public/archives/2021/05/index.html","e41e0433f46d6e3e76b69a207d00f39e"],["E:/qinhao/hexo/public/archives/2021/06/index.html","67dca917b5dd7458f823790f08c27f44"],["E:/qinhao/hexo/public/archives/2021/07/index.html","3ec0c9cd05d451c283a47ccff7d29d4e"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","c652d2e30880a5512c991d3fff441e07"],["E:/qinhao/hexo/public/archives/2021/08/index.html","9170e117c366818da9d8c15b8b20b8b4"],["E:/qinhao/hexo/public/archives/2021/09/index.html","f6113e400de99b1dbde90d5e9c7b27a4"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","b790fc0fb12560b11208e3f839f1f129"],["E:/qinhao/hexo/public/archives/2021/10/index.html","8ebd9c4cc60da1999ede2d942cbd770a"],["E:/qinhao/hexo/public/archives/2021/index.html","a1bfd49065954860a6663e2bf8cb9d50"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","da11069f4e9be1efeb334bb479a995d7"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","3705e6a3708b367ea0b30d7e1b778b56"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","d7dbad6c22e91bbfa29a4904a2db68cd"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","6a76d216fd1247e70625df7077354314"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","5a994f82fded34b5246657eb9620e4bd"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","f2d9078dc21c2344ad1a86396c168c47"],["E:/qinhao/hexo/public/archives/index.html","78a297ad5b6e17f2a277f4eaf892c100"],["E:/qinhao/hexo/public/archives/page/10/index.html","02757b5fd8ddf423dd8e9f390f8a56f5"],["E:/qinhao/hexo/public/archives/page/11/index.html","0ffe521d30075f3bea717b91f83e1538"],["E:/qinhao/hexo/public/archives/page/12/index.html","0ffe521d30075f3bea717b91f83e1538"],["E:/qinhao/hexo/public/archives/page/2/index.html","cdd26e287552ccf1d1f4a9f25270a44e"],["E:/qinhao/hexo/public/archives/page/3/index.html","cdd26e287552ccf1d1f4a9f25270a44e"],["E:/qinhao/hexo/public/archives/page/4/index.html","cdd26e287552ccf1d1f4a9f25270a44e"],["E:/qinhao/hexo/public/archives/page/5/index.html","cdd26e287552ccf1d1f4a9f25270a44e"],["E:/qinhao/hexo/public/archives/page/6/index.html","c8b02dd5f94462e08bd0bf8bf7a828d8"],["E:/qinhao/hexo/public/archives/page/7/index.html","c8b02dd5f94462e08bd0bf8bf7a828d8"],["E:/qinhao/hexo/public/archives/page/8/index.html","02757b5fd8ddf423dd8e9f390f8a56f5"],["E:/qinhao/hexo/public/archives/page/9/index.html","02757b5fd8ddf423dd8e9f390f8a56f5"],["E:/qinhao/hexo/public/artitalk/index.html","1eafd65aaa84d89068ca93dfb0bfd124"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","9914af238bb336b09a764b8747b5ca18"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","7fb424431729bcc45fa4e42535d75d5e"],["E:/qinhao/hexo/public/categories/Java/index.html","b45c0e385e19af8982938d9d93977888"],["E:/qinhao/hexo/public/categories/Linux/index.html","41bbeca53e446b29445655ed49d59f61"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","a61205e045463f242e434055394def48"],["E:/qinhao/hexo/public/categories/Python/index.html","215fd5ce596fc255f0a2d1ffdb38b977"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","02d3ff55f243cc22e4c35e575464d7ae"],["E:/qinhao/hexo/public/categories/交换机/index.html","cc2a4f68bda68605ace59e14f09fceb5"],["E:/qinhao/hexo/public/categories/前端学习/index.html","f4f2537013dcd3b1914b92ab6635ae77"],["E:/qinhao/hexo/public/categories/华为认证/index.html","1dab96efb3f9174613611ef78911fa53"],["E:/qinhao/hexo/public/categories/小技巧/index.html","d3b9f6de5ff3c44958983995bc158ad7"],["E:/qinhao/hexo/public/categories/操作系统/index.html","4f4432f50dcded1a7d514761286d9317"],["E:/qinhao/hexo/public/categories/数据库/index.html","10644afb2c520eccc5f0b66cce8790c6"],["E:/qinhao/hexo/public/categories/数据结构/index.html","6a52381f3b481039656112f23ca6c2a0"],["E:/qinhao/hexo/public/categories/服务器/index.html","281ad12b155f73e4dff57edb07aa2d58"],["E:/qinhao/hexo/public/categories/算法基础/index.html","d6b99d23804de627fe49928de42e681c"],["E:/qinhao/hexo/public/categories/网络安全/index.html","f9a1f264b60929938b4841ead8623b6f"],["E:/qinhao/hexo/public/categories/股票知识/index.html","cd40dd5c037b32ca3ca701ffe649df89"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","e0484cbb37da829f08f74250534966e3"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","353ccdf86a196d50bb2c7aeb879c3b05"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","7b0919dff051317833b6dbc4de3ec5fa"],["E:/qinhao/hexo/public/categories/软件破解/index.html","0a8fe06772c492ee6ff09c2ab8be8753"],["E:/qinhao/hexo/public/categories/通信技术/index.html","c861471f09fa8e6a6af090f7beb54e20"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","8d13be6ce3a851bdae872c790a78d3c1"],["E:/qinhao/hexo/public/category/index.html","d21da6c32123a8cc9d3466fdec2c4599"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","bf87464f17e70fda82d9bdd29acf3e84"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","cca8ec400811d24b0072f4672399a4a1"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","362b40224dbace76ba00dd9fdb94e9b5"],["E:/qinhao/hexo/public/index.html","895c77e63facab09a16c5545bf1ac58c"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","6f28c3bb59211bcf4aae48816322f5d5"],["E:/qinhao/hexo/public/page/10/index.html","0f7c4bb198509777058bb3bf86cd5ca0"],["E:/qinhao/hexo/public/page/11/index.html","8fa2ec352bbfad87fa0ac5b21f4ab6bf"],["E:/qinhao/hexo/public/page/12/index.html","77e28d4a74bd84a2ab297452e7124b87"],["E:/qinhao/hexo/public/page/2/index.html","9bec259c1a1f57d623c147dc03033dd8"],["E:/qinhao/hexo/public/page/3/index.html","76a2fbbed9e367cc2fe70a05751a4290"],["E:/qinhao/hexo/public/page/4/index.html","5cfb605d0cc3fe6386515d6a6bf020b7"],["E:/qinhao/hexo/public/page/5/index.html","31264e6719a170fc912daf425d6d7770"],["E:/qinhao/hexo/public/page/6/index.html","7e444fb919566af9e08d90a279aa55df"],["E:/qinhao/hexo/public/page/7/index.html","254917b14e1f290fb0885c50f99cb7a6"],["E:/qinhao/hexo/public/page/8/index.html","5eefbb664c8510c0ae045a298214d36a"],["E:/qinhao/hexo/public/page/9/index.html","343796f9e6c88304b4f3e6b32ca38854"],["E:/qinhao/hexo/public/sw-register.js","cbcb0ef3b9c71e0b5fc1dad4103ab70f"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","16b93919577627e943190131ada6ae8a"]];
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







