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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","72027881619e4f25903fa0d406f07930"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","cffdaa5346458e7b4dac34ad413046b9"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","553a10dfabc1da3f7fcdc5b4d0196bae"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","f2dd3bc415122c12db0fffaf479b333c"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","1a4871e7f4c135be66618fb63afe15df"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","0c99ef20891d98cf0ce499b022c928b5"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","8bd3531371d087455c4507465ede1bb4"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","5dbcaabf8193d83b16ab5f8f2c5cd2ef"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","2a41e2879d5599836ae70015e57c22a2"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","fac548ae88767b34915049b4e15114ca"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","de6a0824bc92a2a7c542e68cc6f5daac"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","7e4f3a270a89dd98af745ba69dfe5bad"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","e53e73cf2748300c0ff0e10a21f851d5"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","ddb204b90288cd459aa94074d2610ddc"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","7aec685fd89d950ed9a61fd2dff1bac1"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","6bce0a9b9d568007c8551e85e03ed860"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","a9c306d8e4381b6252da8bca0e887990"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","fc41aa0e20d495efa5073065564ac63a"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","967d683e568851600e9030ac9f5f0765"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","9ebd4394bb28748d3e671e0a91b0ed15"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","d57883e2a0d926102592fcf5969902a2"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","d5e465178e8b3a20cfb64f84d1fe5b3c"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","86553045ec473b35f0029a8c4082a777"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","0145c1f5e549d238d73331c29aa9b4b8"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","44fc00eee18e5011bc9d83cd98e16cc7"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","90c4fcf9e7e1f6d9723bef623a04d5c0"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","565e470d4bcdb1c10e2ea4862638e4ab"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","58045c0438ab240aed36cc46717c12e8"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","7000978947a179f626d6f86ea4a655b8"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","07ba512f9fa98fbf91677548d1373e6f"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","d323f10e43ec25df6c44e1f20e46275b"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","1cc4b0cfa4aab5765357a4aeea2c6a49"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","4e64cbb4a6ee28231c83d55107a20852"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","d935164054b50ac1cd960391a510f480"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","7ebda6bb9bb23914627397df6cf4f857"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","5ea5a2e77d122c4fa86297cbf4f9e506"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","4cf66045846f49684704a91a3a173ad2"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","ee618af2e359e443e211d6742317b5b5"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","5f8cbeffe48411b8acf7c88783b3fdb9"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","2d67309bbeb5937551c1d66850e535d7"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","92015b1a392024fb084581bf6ccaaaba"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","24646de19874d2ee3212599a744d19ff"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","a71330846f309874a697c2c34ade3f18"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","cc07f6fa2e9e1eb043bec2ac66ea9fbe"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","279ad9b4332ecd88c6adae783bdf7b84"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","2fbeb30a5c7f455b161108b5bc80fb12"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ad0a7ec7c4e48a9159d9f6e9ec8d9d2a"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","a8253881bc1340978d321acbf7872d1b"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","7990f6709f956832421e8f19ab226ed0"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","6bc6b4ca5b5d9c322f541e88cfb5678c"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","9cf4baf17a7854a79fb461228c771d4c"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","58d0ea6521aa6b3daac52346b8f62339"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","d4483ea83f9715b55984c156f773f308"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","f2d27925a3ca07029310535545b0ccef"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","486aee818b4d37b10948b468af1ec1ea"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","e0911528c2ea4bc314b916727ada006a"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","2b3a2fcb7935eb617b2b2f7a7379d817"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","5b92d070e9ce80953de240a33d881b68"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","aec9a2d0a373cbdbc8119102ab3e8cd2"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","835538acb1eb53fec504f14a22be1e87"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","fcbdda5958bac24214f164795c868214"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","4477b9a75707a76c5a2891629466a028"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","83bd998f644a8219cfdb6c7023cadf22"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","158209c7c84ebded4585739a944dd968"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","333ed23cd7fe5f43df9cba8b07681162"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","0b6a7d0fe444894c88c1d9358bf6846d"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","39c8300d5ab5c26e7891c7d66b583839"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","146291b0884ec7f0cc3313847536383b"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","8fe0d9c892b1671cea1bced89d24c6c7"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","330696f35c003aaa89ffd18f306430e7"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","9400d0e0dbfff01b57c088ad501c782d"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","cf7408bd79354a53ac99979fec105781"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","d8a79ec1167a467ec983ebb0ef860b2f"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","e16f955a982e92097cc3177e621e0d59"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","5b738e23a49b39f3feeb2057f66a56f2"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","0e60d22c87ac3400f6a2dd7b002ada07"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","ae02f76a4e3319fe333c6546273b09ab"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","cf4130010e39fccb636bfe56b7db7a93"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","e33d77c9699afb301b73ff0b5045613e"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","3a97ffce5a6ae0756cd3c8358d3f4478"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","e233cd87c64fa59917c387303e031bf9"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","95bfd91c37e63a9eb47c45f6cd3efc79"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","9b623261d87c2db19c31be0f9405924d"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","ad522d3fb9b85116f45ffa7ded5d91d0"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","a24eee03dffefd8cc1ed1cd72f81707f"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","014897b9259300a6d000980e538ccd64"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","7751ab1f38f959ada6a131c559862d87"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","69d62133043101ca9f3cc085e83fa95b"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","0e928f9484cbc63f2e701e782425dcb0"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","43d3319885bf69f1aea6a9bb5f519549"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","bb75a4e5a6094eb8a1c08057b220671a"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","1c305678a2786198de91f85d29b23044"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","a52db213963466d47b25e72085be87a9"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","bfe319ea419e193c8c2e90a8c7828491"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","ea2506107dac1af32e370cea20602c8a"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","eb82013c78d461f1055d9b38df584eed"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","bb322f142ad57c6b342c18a15ec6f541"],["E:/qinhao/hexo/public/2021/08/03/dataStructure-3/index.html","dae53b7c6ad8dca545d87441b89b7982"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","c7c6052c23fdb4fb99c05fddc9361afb"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","856f72e23e3ebefcb0f3a0def097b9bf"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","fc0c1b7f225b0ceba4ea8f2b4ef1a65e"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","15e9994264ac6339f50ce93daebc628c"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","c3b1a480eec4e6089b6c37af514a5e5a"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","33bc2044fe1cfa8f6146e077b1e02c24"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","455e599567cc03c92611ea99f470bbae"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","fe8abd4280cdbb33a1543dcf28a2715b"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","f1d9cb6320d3949c85f6b5f018b66986"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","1eb8dc9bbd3d4abe8d402071cc75b7b4"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","0908bf24b73bf267b1b5a47e8bccd27f"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","7e5560909e2d104604f41194dd422bd3"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","5400e4e48b8db3667e9ea55f9b232477"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","844a0b760dbde53ab0e5fea414e6be10"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","ffee643304c307ff67b519116c6bc3f4"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","71455adcbcdc47ddc37fcb3677145a79"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","9ad3c2beb64373422f8db49e051c51a3"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","062ae62dd1871485e5311d57db8a0e8c"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","414c8fda1ed51ed31c149b9b13bdd3d3"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","4a544a864d79e5112d4c9f15b8cb6f9c"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","8d5c0d4859dc5e52c2d271e83e182468"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","4f2435ca4114527e21acf0227aef8646"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","3b55c8cec485b5cbc4df987d31d7c0d2"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","3dda08e523475f664484668729728be5"],["E:/qinhao/hexo/public/ByteDanceVerify.html","79a9c18d2eddd46c4175c9550e3ccad6"],["E:/qinhao/hexo/public/Valine.js","46dbc7dfe465faa0f6086c7ddb4e9849"],["E:/qinhao/hexo/public/about/index.html","7f821886695e99812182f419c7ddc34c"],["E:/qinhao/hexo/public/archives/2020/01/index.html","d403b0dd0ee8c6c8cff20f777acda76d"],["E:/qinhao/hexo/public/archives/2020/02/index.html","4fbffb1682f7bf9fd735ef83f029af6b"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","1ad4b7b175a4aedbaab392feb8bf8e19"],["E:/qinhao/hexo/public/archives/2020/03/index.html","1c1e762bdbab5c9a768d10be8d1cabb4"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","d9b7b83b8a03e6e717511241e184ee77"],["E:/qinhao/hexo/public/archives/2020/04/index.html","76ecdb511b6963d37d893a6840922bd7"],["E:/qinhao/hexo/public/archives/2020/05/index.html","cd52aeff44a49752ebb270c618b79ff4"],["E:/qinhao/hexo/public/archives/2020/06/index.html","5c6b29069ede4fab20ab4175fc505d9f"],["E:/qinhao/hexo/public/archives/2020/07/index.html","e13d301f1f22bc73d8e9a8225a3ba21e"],["E:/qinhao/hexo/public/archives/2020/08/index.html","7841fc773dc377b6bc12360f25472386"],["E:/qinhao/hexo/public/archives/2020/10/index.html","10509b6a0a5428e52d3cf5ea0872fbc5"],["E:/qinhao/hexo/public/archives/2020/11/index.html","2a0d51644771801379fb0f7e2a3f9460"],["E:/qinhao/hexo/public/archives/2020/index.html","9edaa0e318dcb06229376ea7ddbe3b83"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","6bdd322456d0ecd4e842cbcb1f02322e"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","8accee27c436e60e5a7084977038ee35"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","2a7c6030200a53012568764f5a127169"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","0d5885fda2e64e7c1d5d19095e314aec"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","a1c30a36aee45995e85b83169338d5ea"],["E:/qinhao/hexo/public/archives/2021/03/index.html","3368c0f79d3b73fbcfac32e83da05f56"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","9791990e3a0f656b970352fabb139a11"],["E:/qinhao/hexo/public/archives/2021/04/index.html","3a993a0b32d132307c80c62736b9dd85"],["E:/qinhao/hexo/public/archives/2021/05/index.html","30a2fe679be917b17c1bbb6815652e25"],["E:/qinhao/hexo/public/archives/2021/06/index.html","13c8abde8d6ef2456bef10293f3e3577"],["E:/qinhao/hexo/public/archives/2021/07/index.html","ad256868af1946b34d06446fed047820"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","384f3b365865e416b4d74513d00d4f89"],["E:/qinhao/hexo/public/archives/2021/08/index.html","6d526127aab2ac6347e13a8838a0d667"],["E:/qinhao/hexo/public/archives/2021/09/index.html","89e9eb290db197e4248038a10232dd8f"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","8055de4cdd26d8e705a086390d893c53"],["E:/qinhao/hexo/public/archives/2021/10/index.html","fa0a4279f05135f7cc968c6a949b80f2"],["E:/qinhao/hexo/public/archives/2021/index.html","17db6c6195fda4e5a4909fb4bd28bc22"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","f05612d0b8a0f85ad70daa209e888467"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","f272f25248d787e7c1c660273ec2246c"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","640d883ccd028e85a831b53589c80f1b"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","a57122101e3802459e0b06a6fdf5df50"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","4c473aa54576bf81e78d19f2faece997"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","7f525e17fbb3afa0b8e50f4e342d6076"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","9f70e5682cba9333ceefbf1921d9947e"],["E:/qinhao/hexo/public/archives/index.html","223aec0955ef0c1081993422b50959bb"],["E:/qinhao/hexo/public/archives/page/10/index.html","53fe36f556f4e5563fcbb612c33425ba"],["E:/qinhao/hexo/public/archives/page/11/index.html","53fe36f556f4e5563fcbb612c33425ba"],["E:/qinhao/hexo/public/archives/page/12/index.html","53fe36f556f4e5563fcbb612c33425ba"],["E:/qinhao/hexo/public/archives/page/13/index.html","afc93f02892d760fdd79fa163464c2f3"],["E:/qinhao/hexo/public/archives/page/2/index.html","223aec0955ef0c1081993422b50959bb"],["E:/qinhao/hexo/public/archives/page/3/index.html","a20bfd4dd4b597b9442aac1b123664c2"],["E:/qinhao/hexo/public/archives/page/4/index.html","a20bfd4dd4b597b9442aac1b123664c2"],["E:/qinhao/hexo/public/archives/page/5/index.html","a20bfd4dd4b597b9442aac1b123664c2"],["E:/qinhao/hexo/public/archives/page/6/index.html","a20bfd4dd4b597b9442aac1b123664c2"],["E:/qinhao/hexo/public/archives/page/7/index.html","a20bfd4dd4b597b9442aac1b123664c2"],["E:/qinhao/hexo/public/archives/page/8/index.html","53fe36f556f4e5563fcbb612c33425ba"],["E:/qinhao/hexo/public/archives/page/9/index.html","53fe36f556f4e5563fcbb612c33425ba"],["E:/qinhao/hexo/public/artitalk/index.html","9e9aa4164439a398f9f80717075eaa75"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","07422d35073b61949939172feb7edd44"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","a2914f4ae9ca58ce8f175c60bd4dbe7b"],["E:/qinhao/hexo/public/categories/Java/index.html","4a382aac35e496d55a85848ef37a258d"],["E:/qinhao/hexo/public/categories/Linux/index.html","7481c1deb70a7615d8c06abf7f30f14f"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","287e22b18594e8f88e1d48d1e858f421"],["E:/qinhao/hexo/public/categories/Python/index.html","cee82748c3e4f2c7c992f3ff6ad07f2e"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","ab0bc2ba1e1aa7d1e050ede5a66b4584"],["E:/qinhao/hexo/public/categories/交换机/index.html","1e30526eb68f18cc3a51d95a33c92fe9"],["E:/qinhao/hexo/public/categories/前端学习/index.html","1817dd497266a8360c50e1972f6fb665"],["E:/qinhao/hexo/public/categories/华为认证/index.html","f229ab2075f7e91f07bb57435cd304bd"],["E:/qinhao/hexo/public/categories/小技巧/index.html","eb4a50379995951972d71c920b295890"],["E:/qinhao/hexo/public/categories/操作系统/index.html","c1c0e0af19963456d78a4b3cd61a7a87"],["E:/qinhao/hexo/public/categories/数据库/index.html","a454b49891c23db13f7ebc38a4028206"],["E:/qinhao/hexo/public/categories/数据结构/index.html","dfc4385830f15980ded89da7d5a384ec"],["E:/qinhao/hexo/public/categories/服务器/index.html","f146467624912c3d16e121d4c9ae8c3b"],["E:/qinhao/hexo/public/categories/算法基础/index.html","94cd555f14d3f2314d40347986f4be66"],["E:/qinhao/hexo/public/categories/网络安全/index.html","7c6f8643f92f3e79685287c89b0a5c9f"],["E:/qinhao/hexo/public/categories/股票知识/index.html","750c86dd6eb71087e9b3368392700b62"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","e4ec52eb753528f5502c21f2bc7eb460"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","e7cdff45dfeb1b114db99f0027acd442"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","73c510e32e36a21b01c8227e8d7a2ff6"],["E:/qinhao/hexo/public/categories/软件破解/index.html","0f66703954eec2d911b1ff2c8c5c4fcf"],["E:/qinhao/hexo/public/categories/通信技术/index.html","70ae594b36f39ac8555d346b6a58e9c4"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","aa816c9f5161e54589e1a07735bab977"],["E:/qinhao/hexo/public/category/index.html","0a0643c8d2a2d10b52c1c4e27f8d0959"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","36488b9ba6c7b685a641aac8b607a82c"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","bf87464f17e70fda82d9bdd29acf3e84"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","cca8ec400811d24b0072f4672399a4a1"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","0c71e7467f353e03b171fc400165ff8f"],["E:/qinhao/hexo/public/index.html","a9d2833caeb0bcb24db5247420e97db1"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/mylist/index.html","1783f236a34912e121cb69649d974498"],["E:/qinhao/hexo/public/page/10/index.html","a2dfc86effb412179c7e9b8e672a2608"],["E:/qinhao/hexo/public/page/11/index.html","10cbd08a78abe04cc8555f02d6116c1e"],["E:/qinhao/hexo/public/page/12/index.html","78c2d17b59003382628adcb8e5db3f29"],["E:/qinhao/hexo/public/page/13/index.html","ccde9cc25ceb93b71392a3b5b222a726"],["E:/qinhao/hexo/public/page/2/index.html","206e448893c26f93961f4481b7c4728a"],["E:/qinhao/hexo/public/page/3/index.html","d11b2cbfb4a11f9377da507e0cfcbaaa"],["E:/qinhao/hexo/public/page/4/index.html","024fb8801ee12601963780939baaa992"],["E:/qinhao/hexo/public/page/5/index.html","9dca795ce377ba43af2becf04da66892"],["E:/qinhao/hexo/public/page/6/index.html","87ea613d2e635fb7f683212d2a84a28a"],["E:/qinhao/hexo/public/page/7/index.html","2426ed2a811ff832c5e9da397f1e808c"],["E:/qinhao/hexo/public/page/8/index.html","0fe344878543afde7e9bc78f42c8965a"],["E:/qinhao/hexo/public/page/9/index.html","a0e301d27544d922724006913b1fdc2c"],["E:/qinhao/hexo/public/sw-register.js","1c2046fdd08cd02ec34dde4485684a03"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","3871382315ac691d8d2b68f616b91fab"]];
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







