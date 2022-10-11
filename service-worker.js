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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","ede71ebc32d07e70aabdbe860a77f59a"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","cbb806476fb47088eab2213d65534c33"],["E:/qinhao/hexo/public/AOP_1/index.html","d62b57c40ef03f95663639b11de62d69"],["E:/qinhao/hexo/public/AOP_2/index.html","c6a65fbff6826820552a55d87ddbadb0"],["E:/qinhao/hexo/public/AOP_3/index.html","cdd96a495b1b882085fedb6b0c5c760e"],["E:/qinhao/hexo/public/Algorithm_1/index.html","9c293fd205625a5f9afe2e3f6b941f31"],["E:/qinhao/hexo/public/Base/index.html","4f592c6d17415e16de98e11bf15ea401"],["E:/qinhao/hexo/public/ByteDanceVerify.html","7804b0069257e17b88692c500120b8bb"],["E:/qinhao/hexo/public/CPU_Register/index.html","eca620d1c04d6978c669931c656b0011"],["E:/qinhao/hexo/public/C_Programming_1/index.html","3811ee15a7825d30dcb590ac72ee1b85"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","b8ea8ccef70b7a1e3ed5bbd01664ed32"],["E:/qinhao/hexo/public/FileDownload/index.html","5790167f3a8d3a86971018cdb5174907"],["E:/qinhao/hexo/public/Files_and_directories/index.html","93eeb46c21d5f5db68ab207d18877ed9"],["E:/qinhao/hexo/public/FixedTools/index.html","a01249d249e5d49f336ace7335b694a3"],["E:/qinhao/hexo/public/GRE-VPN/index.html","51bb574583f89eccf0bc686673e48471"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","48c76a905229208dc4fe4c61eb195b82"],["E:/qinhao/hexo/public/GSM/index.html","84dfbd494a9e7c8f9ebbf454ce2b269c"],["E:/qinhao/hexo/public/ICIC/index.html","ba9c282d106ff5c56e91dd2855eebefb"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","f70959bfbf1f4980e41d098ee5c0c8c0"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","ef2aff18030570ef2018e14c9981717d"],["E:/qinhao/hexo/public/JDBC/index.html","2e88aaa52570330852b3c214f50f107d"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","1923f8253d5ba7dc8e9a483fc459e657"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","40b1ed5751770bb797c7f2400a223660"],["E:/qinhao/hexo/public/LTE/index.html","9faac2a5f3c9aa4a091a77f0ba3792b2"],["E:/qinhao/hexo/public/Layer/index.html","1cc4b0cfeff14634db0b5456b3bcbdf4"],["E:/qinhao/hexo/public/Linux_often_use/index.html","f069b0f4f137f598948298a693a5d14c"],["E:/qinhao/hexo/public/MIMO/index.html","21b0418730705f4a145d74117e00451b"],["E:/qinhao/hexo/public/MySQL/index.html","e98f4118f052cb2332efea653fdb83cf"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","7433a1383cc47ebde302bc842372e9d9"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","353a5fa852f9e98c49f9b6bc23aa2cb6"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","44b166b90cc0150080210d69dbe7bf6b"],["E:/qinhao/hexo/public/NB-IoT/index.html","1d5b3b84e8695018b44ed87858be882b"],["E:/qinhao/hexo/public/Network_Access/index.html","b437ef43d3c73a13f96d8bcc2a319566"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","643cec2ed4297aaaf4cb79bcd21c9399"],["E:/qinhao/hexo/public/OFDMA/index.html","98b87828a9df0cc8ff166cdabc9f3ec1"],["E:/qinhao/hexo/public/OLT_command/index.html","0f19fa125d941eb7976c9f1536f20035"],["E:/qinhao/hexo/public/OverLoad_1/index.html","a0d60451a29e078d3fbee81351ebafa0"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","548ceb91b7d026ca64d566706e86dd4c"],["E:/qinhao/hexo/public/Python-3/index.html","8f99921aab82dbfe00fb4ef0181bd9d2"],["E:/qinhao/hexo/public/Python-4/index.html","9a7bd5749bc0c9176792da97715c9550"],["E:/qinhao/hexo/public/Python-5/index.html","a8270d533c7f11441e7babbcbfbd8876"],["E:/qinhao/hexo/public/PythonUdp/index.html","e8357576d3f6e9b260156ca0397c437b"],["E:/qinhao/hexo/public/Python_basic/index.html","a30046253161b70c4993ce39057075b0"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","87afe13fb28401b1b63682d07bcdb8fa"],["E:/qinhao/hexo/public/Python_variable/index.html","facf55a49ad97c0426a38695bec9a097"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","420f6852f26cfac8e22ff2d729ec4905"],["E:/qinhao/hexo/public/TCP/index.html","2a1b0d8498f6610ba26d0968e2dda297"],["E:/qinhao/hexo/public/TCP_client/index.html","432a3c418d9c85f553b6ebf66ac696e5"],["E:/qinhao/hexo/public/TCP_server/index.html","94f5a73a17719e9d8944ccb37d9aee88"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","c7c49389949cc71e549f0f161e45fe64"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","aa3afba4c58f20fe484737a15b9aacfb"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","450659810ed45dda3fc34bbedddb812e"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","3863c65d0266547ad142bed88e465e62"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","f3a290134c833d2712df412d1c3ea17a"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","0f4b7d2f506026fb770c3772451eb0bf"],["E:/qinhao/hexo/public/about/index.html","d6544f7f1d307bebad77a4926b70edf6"],["E:/qinhao/hexo/public/acl/index.html","e02209003cac3148f7712aad830e10b4"],["E:/qinhao/hexo/public/archives/2020/01/index.html","62b548e8c2fe585be85d16f5eb436add"],["E:/qinhao/hexo/public/archives/2020/02/index.html","d4120e25613e147a066100468a7c4aca"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9f6cc005d68b860eb0e5b59c87cc7f0b"],["E:/qinhao/hexo/public/archives/2020/03/index.html","c3b740307e649030f88b409355b7b88d"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","d53ce58112160832b88919cb9957b3c7"],["E:/qinhao/hexo/public/archives/2020/04/index.html","552c7fc9d37f13b5141fb0e43315a078"],["E:/qinhao/hexo/public/archives/2020/05/index.html","489bfc12bc1616624bba8ab51254f38a"],["E:/qinhao/hexo/public/archives/2020/06/index.html","ec28b332fcb2c3f4788afa56bc733f68"],["E:/qinhao/hexo/public/archives/2020/07/index.html","90e642b9a866770984cf848011506ebf"],["E:/qinhao/hexo/public/archives/2020/08/index.html","8d766f25337c751856487b41fb02641d"],["E:/qinhao/hexo/public/archives/2020/10/index.html","ae1529e545f55a07d578bc5efb179065"],["E:/qinhao/hexo/public/archives/2020/11/index.html","4407020e1d1f16fa3a1092f6b6b52cf3"],["E:/qinhao/hexo/public/archives/2020/index.html","acee89745e19444a5765b258777ec0a5"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","d606c699486f561d3bbc88eb98f8bbd7"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","c73f48dcc166a042de71382734cc02be"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","8a5b87f256e520c83798bce49e802111"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","1a5d7e59341c2da7d94da7d0b4539499"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","24a9478c7e79b029a5e8b9edaccd4341"],["E:/qinhao/hexo/public/archives/2021/03/index.html","88df0796d6bcb1854357b2a3cb7ba141"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","3f548c62cc2ff9dc3ff63846f6d56c85"],["E:/qinhao/hexo/public/archives/2021/04/index.html","3088cc4ef159e78446cb5865c4e40bb3"],["E:/qinhao/hexo/public/archives/2021/05/index.html","91080f4084dbf6e293d4a42eb88e7c28"],["E:/qinhao/hexo/public/archives/2021/06/index.html","e432743a15ec7a0264ed7e03c04801ad"],["E:/qinhao/hexo/public/archives/2021/07/index.html","fdd9565f292ddaea958e06e93ba09f10"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","378f479fd5986a4fe566ca1b98aea4a6"],["E:/qinhao/hexo/public/archives/2021/08/index.html","36523cb00a5d04d4d89e6ee7ff2c6a08"],["E:/qinhao/hexo/public/archives/2021/09/index.html","85889ee0799243ff3c33efa7648a4cb4"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","4b98d413f7101b84584b3e39cdfa5acc"],["E:/qinhao/hexo/public/archives/2021/10/index.html","0fae0d9331244f52f94a7a521a0be51b"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","0d8cdd568cf3ec8422da5c2493b81649"],["E:/qinhao/hexo/public/archives/2021/index.html","f00ad0afff8df889815fc05e0b0d6ff9"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","f2c63284a3daddac0c124e9c4b8e1318"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","3fcf5258571100d07cd141fed9a16e42"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","2eddda04b8204537fb895d289961e492"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","7edc9bbd619ba4e3731aef571ad5a54b"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","b430e71d4b9a61ac17516e0f8602a02b"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","63f75cc8ae0baff5d3eb64071ec98617"],["E:/qinhao/hexo/public/archives/2022/01/index.html","6fc4e830a808ec27e1b4ae8e537cbaf5"],["E:/qinhao/hexo/public/archives/2022/index.html","f58731403ba2a2af906467f97f62a989"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","b9ab89289c60da2e50ec05e45e8ee84d"],["E:/qinhao/hexo/public/archives/index.html","b2d65de9644971bf8e58957ffe4b1405"],["E:/qinhao/hexo/public/archives/page/10/index.html","902545cd7a87544446ea54e7c0ea74f4"],["E:/qinhao/hexo/public/archives/page/11/index.html","902545cd7a87544446ea54e7c0ea74f4"],["E:/qinhao/hexo/public/archives/page/12/index.html","902545cd7a87544446ea54e7c0ea74f4"],["E:/qinhao/hexo/public/archives/page/13/index.html","902545cd7a87544446ea54e7c0ea74f4"],["E:/qinhao/hexo/public/archives/page/2/index.html","b2d65de9644971bf8e58957ffe4b1405"],["E:/qinhao/hexo/public/archives/page/3/index.html","d24543d7b9737dd22a7161ac6b8aae32"],["E:/qinhao/hexo/public/archives/page/4/index.html","b2d65de9644971bf8e58957ffe4b1405"],["E:/qinhao/hexo/public/archives/page/5/index.html","b2d65de9644971bf8e58957ffe4b1405"],["E:/qinhao/hexo/public/archives/page/6/index.html","b2d65de9644971bf8e58957ffe4b1405"],["E:/qinhao/hexo/public/archives/page/7/index.html","d24543d7b9737dd22a7161ac6b8aae32"],["E:/qinhao/hexo/public/archives/page/8/index.html","d24543d7b9737dd22a7161ac6b8aae32"],["E:/qinhao/hexo/public/archives/page/9/index.html","d24543d7b9737dd22a7161ac6b8aae32"],["E:/qinhao/hexo/public/artitalk/index.html","d3472e787a21c227f31bfe7c5c22ead2"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","122b7a3ab5c26c9b307c89c313b0f163"],["E:/qinhao/hexo/public/bitwarden/index.html","807e8bed338c9f2272efdddf9a4d6228"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","35dc5f74fdfb5db5d87e8951b0d7d7d5"],["E:/qinhao/hexo/public/c-11/index.html","dd20f4c561776f31db42267537188b89"],["E:/qinhao/hexo/public/c_1/index.html","9bf6a973e60972dad0a1c9def3e81d9d"],["E:/qinhao/hexo/public/c_10/index.html","ca9f585780c72f1f590b9eec65ce686b"],["E:/qinhao/hexo/public/c_2/index.html","b524219d55d640f0cb619685a60c3789"],["E:/qinhao/hexo/public/c_3/index.html","28ec4903ac44df3fa1dc0b17578b82bd"],["E:/qinhao/hexo/public/c_4/index.html","819964d143d9f799c9a7ae9686b3d45d"],["E:/qinhao/hexo/public/c_5/index.html","eae8b01ae64d453380337a4d195ad1c9"],["E:/qinhao/hexo/public/c_6/index.html","aa3684d8dbeeec9a587fa1dc5183d184"],["E:/qinhao/hexo/public/c_7/index.html","61ca1490c92ddee76b2ab34986f847f4"],["E:/qinhao/hexo/public/c_8/index.html","a71fc6e062575bda6c842c6eb8def1d3"],["E:/qinhao/hexo/public/c_9/index.html","7916573e2500bd6b76b1205f1b5fcb79"],["E:/qinhao/hexo/public/categories/C语言/index.html","b916c1e22f6aea9309ace29d9226b653"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","337162e1f0851779013e3ef30bd18da1"],["E:/qinhao/hexo/public/categories/Java/index.html","ec0fc46ce0e21eb3e2eb4ed9fea94c1f"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","42c315202148aa23797a73e368c4caef"],["E:/qinhao/hexo/public/categories/Linux/index.html","bc45fc6810fb6181903665416304b9fe"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","8ea2729730858eab0992ea7b658e59f7"],["E:/qinhao/hexo/public/categories/Python/index.html","aa8944722675ddd5dc2a069a65732525"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","61482a65633d137f40957cc57468ccb9"],["E:/qinhao/hexo/public/categories/交换机/index.html","c6f8d4d663ccc0851930c64ea0453a1c"],["E:/qinhao/hexo/public/categories/前端学习/index.html","86d9d0d01df11a100ad6ddafa602f8be"],["E:/qinhao/hexo/public/categories/华为认证/index.html","34370868f73bb0a038056d830acc6d18"],["E:/qinhao/hexo/public/categories/小技巧/index.html","8236441efa2fc03a2b52ada3526d4dc4"],["E:/qinhao/hexo/public/categories/操作系统/index.html","8c22b55ae93b902d4d89b714db801300"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","58d68a870b8e0025f214be41e1f8efc2"],["E:/qinhao/hexo/public/categories/数据库/index.html","651cdb096e597ff2d8f294a03e3c7143"],["E:/qinhao/hexo/public/categories/数据结构/index.html","5b1d3b10ac75845eef78c992f0b190dd"],["E:/qinhao/hexo/public/categories/服务器/index.html","33ca09ce8d092f57dcea5d5ae69642a3"],["E:/qinhao/hexo/public/categories/算法基础/index.html","2c6a1ca5a519b1b3dda53614421fcb9f"],["E:/qinhao/hexo/public/categories/网络安全/index.html","58014504214726b2719dc693cdc4559b"],["E:/qinhao/hexo/public/categories/股票知识/index.html","86ea83715ca1eb9731ca7635208282cd"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","a35a81d395a6ae51bbc60ccd1c902d06"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","f49383c8a5eb1873cb37abc5c9834a78"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","879e97ce1425ef5803aa6b5fbb423514"],["E:/qinhao/hexo/public/categories/软件破解/index.html","0f7280492c6fdd661d52c7682ae570b3"],["E:/qinhao/hexo/public/categories/通信技术/index.html","a518415cb1d0474f9459cc35ab10d1a1"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","db81c59358bbb6911b9fdec302125dfe"],["E:/qinhao/hexo/public/category/index.html","7d54feb466c4053f8f19f04a8314debc"],["E:/qinhao/hexo/public/cinemas/index.html","c29b93060cc428419e81a9aefbc0bb2f"],["E:/qinhao/hexo/public/color/index.html","bba132da9ac8058466b40571fa800d78"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","a1ffd18a22df07a01f929c55136bd708"],["E:/qinhao/hexo/public/computer_network_basics/index.html","5def0003a4d5365332a105b64f6e7ffe"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","9c05cda85eb86e267125d9f9d0472bc6"],["E:/qinhao/hexo/public/dataStructure-1/index.html","6288a3c437d5f47bdbf84ec505af0688"],["E:/qinhao/hexo/public/dataStructure-2/index.html","683dc1d6bb5aff2035c2fc813d2c4e8f"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","6568ba0e41257f531475f17dbaa06225"],["E:/qinhao/hexo/public/friends/index.html","411d12e11f8c1a226e4921b7539a68c1"],["E:/qinhao/hexo/public/gcc/index.html","c4aa9febd520fb95c8a1fb058cdccd8f"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","d26ba5fd1375c79364699aaa2f496cab"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","fa44c247dcc4b3a03442b7425d4ea9b0"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","f06c6bf81ee88e4bcb1013d4f5aaf7f7"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","0cd96f7a9e4f7d9963ae9ec16096f767"],["E:/qinhao/hexo/public/linux/index.html","4e5fdd94903e47c0ae545fdc31b55677"],["E:/qinhao/hexo/public/login_demo/index.html","44f27c1b941893920b02ef02fee9aaf5"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","05d2dfbb55fec73ec60a9d73dee6efbf"],["E:/qinhao/hexo/public/memory_save_number/index.html","d199413b95bdecca97de904f27877a6c"],["E:/qinhao/hexo/public/mobile_communication/index.html","af54a95c997ed99a27fda674e6655546"],["E:/qinhao/hexo/public/movies/index.html","623c9a89127283cc31b7caf91cd05519"],["E:/qinhao/hexo/public/mylist/index.html","a1d4f9b07d4121ebef2ed1e477ed181f"],["E:/qinhao/hexo/public/myphotos/index.html","3b9fc0b234d1e35f96e58a5628ee9881"],["E:/qinhao/hexo/public/mysql-install/index.html","890ca1a0b4662d386830f01ceae808ff"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","628206639305f1eb9db3c1e7c8f45069"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","0eeb1e5d069cc90d0bc76b446c7f80e5"],["E:/qinhao/hexo/public/mysql_question_1/index.html","146edeebba602ebc3f18c4b4aa3100aa"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","7932f1aa7a32013481bbf015a8776b7f"],["E:/qinhao/hexo/public/not-allow-F12/index.html","0bf456f6d8053e66f19a1ffcfa70fb75"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","8ee4a52595d13620207f7cac940a4b07"],["E:/qinhao/hexo/public/page/10/index.html","0ac9f4fdc3a8f43613c88a7b6fb7191d"],["E:/qinhao/hexo/public/page/11/index.html","efcdecd61ed8ff2044a2514ce1eaf831"],["E:/qinhao/hexo/public/page/12/index.html","bf122ca66764b49bf5edecf0f065316b"],["E:/qinhao/hexo/public/page/13/index.html","2d38af8940524c51426dd55da4abd3e1"],["E:/qinhao/hexo/public/page/2/index.html","dc2b16dd7c8c07155e2fc52b3c0efc6b"],["E:/qinhao/hexo/public/page/3/index.html","b66dd54b75871f93de6a8139830cf505"],["E:/qinhao/hexo/public/page/4/index.html","19f1b1a063735ccaa3d5ca6df974e810"],["E:/qinhao/hexo/public/page/5/index.html","df2b3f5f75c058a327845af108d069e2"],["E:/qinhao/hexo/public/page/6/index.html","ee599f015cbe2c6a840f30fef7eabfb4"],["E:/qinhao/hexo/public/page/7/index.html","b43d81b3627b928ecb89baa79a64858e"],["E:/qinhao/hexo/public/page/8/index.html","0cf729ee2488aea60597428de283a5da"],["E:/qinhao/hexo/public/page/9/index.html","c7e3a8e8bdecadbb8e207c8b8b6534e6"],["E:/qinhao/hexo/public/python-2/index.html","3ac0dbdb5330a84a90620a4e9f121047"],["E:/qinhao/hexo/public/ssh/index.html","60c46b48e400ce3877cff7252b25c83d"],["E:/qinhao/hexo/public/stock_1/index.html","405fd4162b4940a3eb90685d89190a66"],["E:/qinhao/hexo/public/stock_10/index.html","b9357bba59a3bf5ee1e44e71e527f6c6"],["E:/qinhao/hexo/public/stock_11/index.html","0c36b7386a330ce8f52c2bd695b633f4"],["E:/qinhao/hexo/public/stock_12/index.html","7d76315e9298f00a9c52becbd6762ac2"],["E:/qinhao/hexo/public/stock_13/index.html","32d75e38884946d158903786140258e8"],["E:/qinhao/hexo/public/stock_14/index.html","3cc925d516dc332073df6b989102c4bf"],["E:/qinhao/hexo/public/stock_15/index.html","e694949613edbaf3f515f22c1b8d904a"],["E:/qinhao/hexo/public/stock_2/index.html","661ea2628509d0fe8ed1652327bce5b4"],["E:/qinhao/hexo/public/stock_3/index.html","68d2656539e35ee2f32a8e9d3d206f85"],["E:/qinhao/hexo/public/stock_4/index.html","6a879f673870a930ab0ab7fdd0462a75"],["E:/qinhao/hexo/public/stock_5/index.html","eeb61abefb0057ba0ca19fd7701ac345"],["E:/qinhao/hexo/public/stock_6/index.html","c24e3daad8d87d64b99cebb94ffc8663"],["E:/qinhao/hexo/public/stock_7/index.html","b11ffb4166b2908d24490234f5eaa6f9"],["E:/qinhao/hexo/public/stock_8/index.html","5374cb858792946e12faf8ff89f2d185"],["E:/qinhao/hexo/public/stock_9/index.html","9bccf52ebcb400f256ba6b653d5318be"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","27f368a4d6e3ebf500e1fdafac5f8105"],["E:/qinhao/hexo/public/sw-register.js","8ab175a411b5f8b27b08a99f5592abaa"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","1456917238e8aa2c16739c58ca510616"],["E:/qinhao/hexo/public/system1/index.html","ea4559178c2bd555b24f888242ea15fa"],["E:/qinhao/hexo/public/system10/index.html","dd6f3066018c9d013251008cce58f0cd"],["E:/qinhao/hexo/public/system11/index.html","06483f95d218062b9b8d0253d0c2952a"],["E:/qinhao/hexo/public/system12/index.html","871434ff8c380477019d524de7c10ec7"],["E:/qinhao/hexo/public/system2/index.html","4caebffe9667615d152bc277670fa4f9"],["E:/qinhao/hexo/public/system3/index.html","4c038c428e8a684c89f6cb1bea7a60ad"],["E:/qinhao/hexo/public/system4/index.html","70569eb97a1839e3b9add17bcbbd5e3a"],["E:/qinhao/hexo/public/system5/index.html","ea7f5db8df7bd131f4734d3dbb571cb4"],["E:/qinhao/hexo/public/system6/index.html","c9a4826e14f4e8f9827c92d38e45aa7a"],["E:/qinhao/hexo/public/system7/index.html","a3574d070bca2e53bcce11cf7e72e0e7"],["E:/qinhao/hexo/public/system8/index.html","f957d45867347f855f908c38f0195817"],["E:/qinhao/hexo/public/system9/index.html","ecf01f9fa7cb868ccd4b15432c33247c"],["E:/qinhao/hexo/public/system_info/index.html","a4db5ce1e43d58f768f317aa7dbba4ec"],["E:/qinhao/hexo/public/tags/index.html","43f83b1b3f9cba529b496b9f0d15cdc7"],["E:/qinhao/hexo/public/transactionManager/index.html","ed4a63298aa2bdbb094a2d21a3b8b486"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","3d4365857558a87cc2da8cc3b407348a"],["E:/qinhao/hexo/public/wireless_radio/index.html","3c75a683736dbcfb4d7738130d3ee0d6"],["E:/qinhao/hexo/public/wireless_word/index.html","ca6a78cd95f1a1a192e9a2d642d24f3f"],["E:/qinhao/hexo/public/xml/index.html","8f6d4fd99f82df9b8d24f3f91800287b"]];
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







