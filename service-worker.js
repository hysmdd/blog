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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/01/01/css_clear/index.html","feefef1d94f5fbc2f557cba686363fe3"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","87c35d889069c1d3c8f7b3621ebf3f1a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","c97de7006e6e2bbb90e331a7ce72766c"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","8a83b2f2e395ea8351a710297c868239"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","f0ce78681654bbdeec1b1bea71f65a60"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","c7b7b6963ba823243502f5944fcdaf84"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","d8167d53895e503138197c49668e4484"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a62e57f16a53ff48cb3b949929b93ade"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","d5196fd80481bed12002c9396c051510"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","592fcbd2f08fa7851325723e5ebc6ac9"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","deeee6d4039246d17f6f9e93a71c3fbf"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","035de5aa8bff838946abd85b5c2ebd28"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","9e23d8aaa183a5e21b884e552c4a3123"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","e630ac7c9c2d14231d87514d6476ff44"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","1bfae8ac362cee80a3132786f569d592"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","dd823b4b7fb4382d1ff79837ca29495b"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","8f78a5e180f8c90f0fe836b8ded9e996"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","2818a7493096849bf355d20101782def"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","9d979daf9e7f909cbe1bf395f3e987f3"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","4e2691ec238114af21bb38c8f123ee49"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","f542b160d9bdb478ddf78fac6913d0a6"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","b11d4846c6511b1f320ab67af3277091"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","4044d848db8ac088c18493497b1ad480"],["E:/qinhao/hexo/public/2020/03/11/Python_basic/index.html","baf32a45f6e472564dee05d513e4ef6e"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","c357289201121636a87c4ee8dbd3140e"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","f03c78ea2a7409e0d512e4740c17e461"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","6a66c361e4482eae8a9b20e520d65af6"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","a695a891919738202ed5ae4deee66fe0"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","46154838c69e0fe7e09817560424b970"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","3a472462f731604c05948809a4984cae"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","23d211a92f69cc8fbb8eba0d6fb4c9de"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","06d4e9aa0978eff78ce51a7c845b1bb1"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","76c6baa3da0f9ff329e6b30f2cfb6c15"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","1cae0f16c8f324b86f042383fe2f4d16"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","ec2bd14fdfd4e1b69c94d08597280e5d"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","e1d39d1ad3ecc32e4b4efde0abe52b4d"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","c1a81921cb55b5d9199560d31a41d42d"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","1001f35e6b20ab4a593f027de90d78df"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","c7e30f474e4187435e253be9c0bf4380"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","3c281047ab143b61af34dd311c72e212"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","7be37d170e8430b091bbf509897d02a5"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","a3585bc53b47b155ad5813de69c5218c"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","cc7f2cf316b1fdc54f24d622f844bb22"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","176c6f62a815f56a1444e87ddabc605c"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","7c7d685d3c4d5393c3cccfe3d5ab88c3"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","34d8a6f44974baed9dc67b79e89a4d3c"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","e78695ad4095a4f4f7bca0c7c42aa070"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","a4f56a52e585d6ae778b07097e9f9234"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","75c448d01a5afce4f6bd19a45468eca8"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","35988fddcd476f1dccf801e57826c98a"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","a4a79cc400b4594c472bb2eb60569026"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","29f7e366795ac70fbbce90b6c34002d9"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","dfc6925035290ea51fc8b583cc5a7d37"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","8d052cc20c9447835f047d8aa843f827"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","3f7e83ea3c3cb42255d1842dc773d0d9"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","3f4ae2482fb3bbf89a2c8aad5525beee"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","c44f03224b2c56f1559b0bcab5c57b8e"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","defae0fdee3301264420a4f85d07d1bb"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","0f7ed64bf8a7569ddec1bbe488f97128"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","c59398b468333bf073675632b916fa6d"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","c7dfc8d69b7b3e4c7cd43d10327205eb"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","33870e1312f2e03e5594374aad2f3f01"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","116d74c3fd6db9d70609f00642f33efb"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","1232fb58626c4e21a8931264bc4bd397"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","cb9a78122848cf06e0a0220fa132be36"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","24edb81e43b8798cfa271dee75be48c6"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","f8fa5fa98af9a4e7352d95b76c229282"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","0d75882cab470ec1a4b3367659099c86"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","50c22a5ff19800e40921f2e4233c995c"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","6866b3084f793aa57024e6f809214590"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","dbfa27400417759e8a50e63cd3a9ade4"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","99fb6bbc052702523dbceff4ac2a5945"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","6109d9177572472a5095ded05ffc1825"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","95b3dad0eb3282932c228b826a69627b"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","69dcb884a14416e1672952fa6835f627"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","034a694d367e06078f7696f95a5f9361"],["E:/qinhao/hexo/public/2021/05/14/CPU_Register/index.html","6586c5e8923be7dcd8a9b66c6d536725"],["E:/qinhao/hexo/public/2021/05/14/gcc/index.html","9e7b940156e296aa6352cfd6dad26201"],["E:/qinhao/hexo/public/2021/05/20/Algorithm_1/index.html","9837d2a159f8d39e2793742380ca3d10"],["E:/qinhao/hexo/public/2021/05/20/C_Programming_1/index.html","6a38667a069125799d143bc7eb58a5d6"],["E:/qinhao/hexo/public/2021/05/21/Base/index.html","60506ebfb0276338f4ded4a44bbf4b71"],["E:/qinhao/hexo/public/2021/05/22/memory_save_number/index.html","c73a5d3595a749b56626173772755f88"],["E:/qinhao/hexo/public/2021/06/24/OverLoad_1/index.html","359ddc7e60c731a282b2b60fe688ea14"],["E:/qinhao/hexo/public/2021/07/06/mysql_question_1/index.html","c51b3af378514d835befbb59370eac27"],["E:/qinhao/hexo/public/2021/07/07/mysql_dql_1/index.html","bb75ad4509798186b8ec7fe4329a4f21"],["E:/qinhao/hexo/public/2021/07/08/mysql_forget_root_password/index.html","d43b5174ba296067ab401267aa13dc36"],["E:/qinhao/hexo/public/2021/07/10/JDBC_SQL_injection/index.html","98f618cdd9915f628111ed9111c0ae72"],["E:/qinhao/hexo/public/2021/07/11/MySQL/index.html","d1ffbcecda3c716ca5bee7848f473d94"],["E:/qinhao/hexo/public/2021/07/11/MySQL_constraint/index.html","8429d69594f34b31ab5314b44e98e908"],["E:/qinhao/hexo/public/2021/07/11/MySQL_transaction/index.html","2206ad47afb6ec60496901791ba698cb"],["E:/qinhao/hexo/public/2021/07/12/JDBC/index.html","182f26869d97747f4d26b7ce2713d8bb"],["E:/qinhao/hexo/public/2021/07/12/JDBCTemplate/index.html","961e17d30ab3a36e97651393a51a6f03"],["E:/qinhao/hexo/public/2021/07/14/xml/index.html","94a25145774ad486e8b2301f6f0d54ff"],["E:/qinhao/hexo/public/2021/07/21/login_demo/index.html","489bc76d1922ba69146448336ef16fd7"],["E:/qinhao/hexo/public/2021/08/01/dataStructure-1/index.html","367fa6a4753366290eecd217b71ef13b"],["E:/qinhao/hexo/public/2021/08/02/dataStructure-2/index.html","c16c191ebb18d00cb67d4947d98aed27"],["E:/qinhao/hexo/public/2021/09/01/stock_1/index.html","3898201e95c2f6352651385ab42b5446"],["E:/qinhao/hexo/public/2021/09/02/stock_2/index.html","a5b5c92b91eb3faf068e849b44109a81"],["E:/qinhao/hexo/public/2021/09/03/stock_3/index.html","17f3b085873452934e959fdaa1c732e9"],["E:/qinhao/hexo/public/2021/09/04/stock_4/index.html","6984bc87627c4879e0acca4a43f6ef8e"],["E:/qinhao/hexo/public/2021/09/05/stock_5/index.html","00ca0c7ebecc2c17506a314089a2662c"],["E:/qinhao/hexo/public/2021/09/06/stock_6/index.html","b7731d8539d830bca2f8097b344a7818"],["E:/qinhao/hexo/public/2021/09/07/stock_7/index.html","dbaa425b83647288bfd6b5f4844aa3eb"],["E:/qinhao/hexo/public/2021/09/08/stock_8/index.html","9bf1108800354d53ed7e6b1491c2c7b8"],["E:/qinhao/hexo/public/2021/09/09/stock_9/index.html","7222b955ba06bf3795ca5a99f00b49ba"],["E:/qinhao/hexo/public/2021/09/10/stock_10/index.html","6ea81b1c4e70cfa20f529dc568d86e9b"],["E:/qinhao/hexo/public/2021/09/11/stock_11/index.html","98e7171b87335385ad0a8111ce09e506"],["E:/qinhao/hexo/public/2021/09/12/stock_12/index.html","6bdcfbf71173b9e235ab9fd86af70cb2"],["E:/qinhao/hexo/public/2021/09/13/stock_13/index.html","c8abebc6ada663fc6b22a7dde587f69a"],["E:/qinhao/hexo/public/2021/09/14/stock_14/index.html","afb3970a31a948f21d936be81435bfe8"],["E:/qinhao/hexo/public/2021/09/15/stock_15/index.html","6aba797720417f0d68e9f8623d137c69"],["E:/qinhao/hexo/public/2021/10/01/system1/index.html","98ccc792a5d6263fbeb686f522102d69"],["E:/qinhao/hexo/public/2021/10/02/system2/index.html","565ff5d115d7a0927a4e21ee3fd875b7"],["E:/qinhao/hexo/public/2021/10/03/system3/index.html","63dd6b9fd53560311c7bf0d0348041a8"],["E:/qinhao/hexo/public/2021/10/04/system4/index.html","d4df3b6f8b3cd530786f52c9784befb2"],["E:/qinhao/hexo/public/2021/10/05/system5/index.html","102cfbbdeb709b4fc0112aa0505d9608"],["E:/qinhao/hexo/public/2021/10/06/system6/index.html","236ce34085e050c78468d2723880084b"],["E:/qinhao/hexo/public/2021/10/07/system7/index.html","889dbe1760e9f18a5f2a56b31de99061"],["E:/qinhao/hexo/public/2021/10/08/system8/index.html","dc4c137c2d0ddb3ff31c5f7a3cf2a7dd"],["E:/qinhao/hexo/public/2021/10/09/system9/index.html","6fd5ae7c2ed25190fa4304266d9a32ed"],["E:/qinhao/hexo/public/2021/10/10/system10/index.html","1c9e6d5b22fe21a5fb973048ef4e842c"],["E:/qinhao/hexo/public/2021/10/11/system11/index.html","ed4080a192d096b3ad0c9bf44808d8cb"],["E:/qinhao/hexo/public/2021/10/12/system12/index.html","9e52c26f7a72d9c9466e7ddad66b1cc2"],["E:/qinhao/hexo/public/ByteDanceVerify.html","6425f0a8df698be9eb585614e81c7c2b"],["E:/qinhao/hexo/public/about/index.html","27b7c0dcddd94571ecc8a5610aeaa2ef"],["E:/qinhao/hexo/public/archives/2020/01/index.html","67557c319105d5f39bf4d246408e1ed0"],["E:/qinhao/hexo/public/archives/2020/02/index.html","b79e0c6d1dddada6a811d354fcd9be53"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","04335712b37068449c591f0d5bc53de0"],["E:/qinhao/hexo/public/archives/2020/03/index.html","c947352332d0ca748e50be8c5c3dcba2"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","8d7906eb71430877664c552119cd9079"],["E:/qinhao/hexo/public/archives/2020/04/index.html","5b45b4fe292cb9238d36c19c9cacd9c1"],["E:/qinhao/hexo/public/archives/2020/05/index.html","f14756c5f1ade6774a0ca97f817f4e42"],["E:/qinhao/hexo/public/archives/2020/06/index.html","ad18d729ffe429a16c812d8ba83189de"],["E:/qinhao/hexo/public/archives/2020/07/index.html","d58c3841cf3f15e4a0b7776442b8fb08"],["E:/qinhao/hexo/public/archives/2020/08/index.html","c84d2ef0b9ab82a707b7b016f33a5d08"],["E:/qinhao/hexo/public/archives/2020/10/index.html","5d83ab71609d330d07bfdc5906ed1261"],["E:/qinhao/hexo/public/archives/2020/11/index.html","38106f5aec931cbef891ce4c0ad1f6c2"],["E:/qinhao/hexo/public/archives/2020/index.html","a03da482808f976901d0182376ccbc65"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","b49c8afb71571f08c2197b00a0804c88"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","f4fa1db526fe1aab9429e6a91e7da12e"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","ef58fd24ed99f109e644d6aae15ccc38"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","988330f3f78339d88b40a7c9e2bf39a6"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","ee739696de176d459c9265bd0c0a9d91"],["E:/qinhao/hexo/public/archives/2021/03/index.html","f06265070934db3ee5ea8e663e213067"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","7c0195fe93b6983a4011069329fa43c7"],["E:/qinhao/hexo/public/archives/2021/04/index.html","96235c5af14d29d83bc1d63236b53938"],["E:/qinhao/hexo/public/archives/2021/05/index.html","cabc0e880a225759e1cf90e5bffc477c"],["E:/qinhao/hexo/public/archives/2021/06/index.html","950804bf7df6548302c3e1a74c3352fd"],["E:/qinhao/hexo/public/archives/2021/07/index.html","7bf4152fbd9b3a40f1101c56464bd83e"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","b456e077b47aa7b10c25db7afaf62f9b"],["E:/qinhao/hexo/public/archives/2021/08/index.html","ca503dba2fe6a6803a9206712c1c4027"],["E:/qinhao/hexo/public/archives/2021/09/index.html","120ba496d456e2dbbc68bbe1d5444de0"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","080716ddf2c44114502783b690f5470f"],["E:/qinhao/hexo/public/archives/2021/10/index.html","a1e67bdb7e4bddfaab89cade0517547d"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","21c6da14a3bfd3fe1408a251a624fabd"],["E:/qinhao/hexo/public/archives/2021/index.html","bfcf9b77f9e2f805f606f7fe7dfe7fd7"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","7d22e086df8d05af7584056f21234f09"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","d98c0cc726bb38374352d155cd5e8a93"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","b1b25e3c6a1c9e30c760a29c44337ab7"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","74a420233ce0c07225a608919bc5a627"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","83079ad3d1bb2cc02a5f7a2284eaeadc"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","1ed435b40800f2cd7ccccc2f97b5265a"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","f617a525256e5939ad0ab94876e0a49b"],["E:/qinhao/hexo/public/archives/index.html","390c600ed226198eabad11185acfebc5"],["E:/qinhao/hexo/public/archives/page/10/index.html","289c767d5d96af1dc8c01e9ccdc28100"],["E:/qinhao/hexo/public/archives/page/11/index.html","289c767d5d96af1dc8c01e9ccdc28100"],["E:/qinhao/hexo/public/archives/page/12/index.html","0183ce7d3b11b912adbcb2fef4e35b6d"],["E:/qinhao/hexo/public/archives/page/13/index.html","0183ce7d3b11b912adbcb2fef4e35b6d"],["E:/qinhao/hexo/public/archives/page/2/index.html","390c600ed226198eabad11185acfebc5"],["E:/qinhao/hexo/public/archives/page/3/index.html","1fa1ceaa0d347243f0e5728e0ec9535c"],["E:/qinhao/hexo/public/archives/page/4/index.html","1fa1ceaa0d347243f0e5728e0ec9535c"],["E:/qinhao/hexo/public/archives/page/5/index.html","1fa1ceaa0d347243f0e5728e0ec9535c"],["E:/qinhao/hexo/public/archives/page/6/index.html","1fa1ceaa0d347243f0e5728e0ec9535c"],["E:/qinhao/hexo/public/archives/page/7/index.html","1fa1ceaa0d347243f0e5728e0ec9535c"],["E:/qinhao/hexo/public/archives/page/8/index.html","289c767d5d96af1dc8c01e9ccdc28100"],["E:/qinhao/hexo/public/archives/page/9/index.html","289c767d5d96af1dc8c01e9ccdc28100"],["E:/qinhao/hexo/public/artitalk/index.html","94a0e7b6f7c4aa97fbf82b97cc7bb90e"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","60e58bd9c587a1923bb7612b37386e68"],["E:/qinhao/hexo/public/categories/C语言/index.html","47afa4c67d3956d8a476105b80b0f471"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","65049f3eed6541a90117bd229e6a5d6e"],["E:/qinhao/hexo/public/categories/Java/index.html","2365822c2de0bcb8d068ae9c7c50ef50"],["E:/qinhao/hexo/public/categories/Linux/index.html","311c8c8d0235a5926fee2a24de5c8930"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","d64b83b75ecc4a80fbf354137f6b5523"],["E:/qinhao/hexo/public/categories/Python/index.html","407f3a77c1cb851de1981ec7fb728f6f"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","4bf907b5860f64a95a01d5388533bf05"],["E:/qinhao/hexo/public/categories/交换机/index.html","09ea6dad3e942b97177d0c0b57c10415"],["E:/qinhao/hexo/public/categories/前端学习/index.html","39061c94697cfc95fa1b555cc791306c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","fea0ae72e505fdd3bf1a31de76dc4801"],["E:/qinhao/hexo/public/categories/小技巧/index.html","31a63f37d5bf21833dc069a3bc8be9f7"],["E:/qinhao/hexo/public/categories/操作系统/index.html","eb23bdfdbadcb0cea2f90e96641675dc"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","56fe181718e01a428850cfe9d66d35d7"],["E:/qinhao/hexo/public/categories/数据库/index.html","04be2b0eaedd6518a63254353aa9bded"],["E:/qinhao/hexo/public/categories/数据结构/index.html","5e1c7efb556e0031ad284d154bdc8812"],["E:/qinhao/hexo/public/categories/服务器/index.html","975ecea0e602b234f1f889b0abc50e60"],["E:/qinhao/hexo/public/categories/算法基础/index.html","4cbdb0d26c1e9d4761c8107d7c10ff1c"],["E:/qinhao/hexo/public/categories/网络安全/index.html","5b0527fe74080a38da2d30601bb6a6fb"],["E:/qinhao/hexo/public/categories/股票知识/index.html","269a35d6ebe9ecb879e810969475601a"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","f112cddfde6cd255e8ba91172ba77704"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","d0e305e8d952cd2d30bfe9b58934b325"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","ecc2edfc90c9121af0ad70286bdbf275"],["E:/qinhao/hexo/public/categories/软件破解/index.html","2c584b38b92dd977ed3f5fa2afb09589"],["E:/qinhao/hexo/public/categories/通信技术/index.html","b3c4216d7462a6e77332ce7c88455813"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","1ed39c5b48aac81e5b987bfdad75f271"],["E:/qinhao/hexo/public/category/index.html","7269b77753f70b9f175a686eb69f24c2"],["E:/qinhao/hexo/public/cinemas/index.html","41bb5b9fcfdd62e128f9e45779f6da6c"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","cbd698d046bc27e0586696bfcc6d258a"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/friends/index.html","7602cedb48545462831dbf837222c004"],["E:/qinhao/hexo/public/gallery/index.html","1db61ebd80b58224c84c9416cbed82b8"],["E:/qinhao/hexo/public/gallery/reset/index.html","555c34d143ba12cbc3ac8d39abce94d5"],["E:/qinhao/hexo/public/gallery/白敬亭/index.html","6baa6847a74b202d1148ad7cce1f185b"],["E:/qinhao/hexo/public/gallery/赵今麦/index.html","d80de1b1b5fa156bacca40c47638ad8a"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","e328ce7f828f9182e445745ae0024391"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/movies/index.html","6dbbba3dbcbf717097a0c7f369230f93"],["E:/qinhao/hexo/public/mylist/index.html","75be62f96326890073ec124e017131ad"],["E:/qinhao/hexo/public/myphotos/index.html","56021d7820dd779035a02b2609ca61b4"],["E:/qinhao/hexo/public/page/10/index.html","5d0e845ea8137e3b5e8406d49f24ae72"],["E:/qinhao/hexo/public/page/11/index.html","2de24105b3f00c4accd8b58140257dd1"],["E:/qinhao/hexo/public/page/12/index.html","abd635d8b6360c155742d6e141db0424"],["E:/qinhao/hexo/public/page/13/index.html","e75950379534289d48be7143d7c29a6b"],["E:/qinhao/hexo/public/page/2/index.html","225e6bc83f74526031661748a3fbbc96"],["E:/qinhao/hexo/public/page/3/index.html","59c59f00b004617a142a4ffa07208354"],["E:/qinhao/hexo/public/page/4/index.html","6fd5224c53c36e8c0b05d2e54ac08d7b"],["E:/qinhao/hexo/public/page/5/index.html","81e274fec3d6007ac4557d6ef1daba27"],["E:/qinhao/hexo/public/page/6/index.html","5372949297c30377237def04906be96f"],["E:/qinhao/hexo/public/page/7/index.html","ddc67d36ffdaab66c0b6d75d67213444"],["E:/qinhao/hexo/public/page/8/index.html","74c68f2b15fb5c44cc30695ebb5ea739"],["E:/qinhao/hexo/public/page/9/index.html","3073c76e125d02d3cfadd55ded52fd16"],["E:/qinhao/hexo/public/sw-register.js","3ab74423e7e8dfadb730cc69891415b1"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/index.html","e7276e152b8d528d5c4234791afbbacd"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"]];
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







