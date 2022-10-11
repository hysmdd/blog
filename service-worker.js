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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","fd9b97e66b05d12d92a58b62f2bf4742"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","6da3b639f70dedfb6d7cb04b27dbe8fd"],["E:/qinhao/hexo/public/AOP_1/index.html","26e08da262254348baf156d8a6a785f0"],["E:/qinhao/hexo/public/AOP_2/index.html","179ca0a08d2f6225bd88160fa07fa905"],["E:/qinhao/hexo/public/AOP_3/index.html","c89723a9bf3b762ea41983c01fc11e0f"],["E:/qinhao/hexo/public/Algorithm_1/index.html","0797be998363568800181efc34309501"],["E:/qinhao/hexo/public/Base/index.html","26f2275c27fe4118c7724c2c26203548"],["E:/qinhao/hexo/public/ByteDanceVerify.html","aa2b18d630b01a55ce602274489857bd"],["E:/qinhao/hexo/public/CPU_Register/index.html","ade2dd23a0321f73822d67b5392f3011"],["E:/qinhao/hexo/public/C_Programming_1/index.html","f379221d344443809eadc162974e3543"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","1729e16c3074564f8bc503d0263641f1"],["E:/qinhao/hexo/public/FileDownload/index.html","41f18b362a6503470c1853df69c8ddc2"],["E:/qinhao/hexo/public/Files_and_directories/index.html","5e856515f67027f310fd739b77b004ce"],["E:/qinhao/hexo/public/FixedTools/index.html","e1d447f4e69b64995a2c7fa063edc9de"],["E:/qinhao/hexo/public/GRE-VPN/index.html","4d21b8c80e5a74aca0860c5802bb5a82"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","e6dbb08e6682802e8b0da74eae29a8ce"],["E:/qinhao/hexo/public/GSM/index.html","c71156b8d67949a2555178c3332779c5"],["E:/qinhao/hexo/public/ICIC/index.html","eced5e541dae63c3b691bd796ad10629"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","318bd1ec6d053a5bf47456b3e189fd90"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","86d148463c736c44ce9ab54959d65c92"],["E:/qinhao/hexo/public/JDBC/index.html","329b1aa92d86481a4e94093efd354275"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","58befbdcf4e076429220dd945e3d9d5c"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","b61f3e46332e73ff4161c41ae2746383"],["E:/qinhao/hexo/public/LTE/index.html","004dea59f2be4b748132ee3f6315767d"],["E:/qinhao/hexo/public/Layer/index.html","da683999e4f4e97ef07a65475bf322a1"],["E:/qinhao/hexo/public/Linux_often_use/index.html","09fd3d1bde59d54cda6238a0daceb3a5"],["E:/qinhao/hexo/public/MIMO/index.html","9eec2635085137271f1e1f75aec840f7"],["E:/qinhao/hexo/public/MySQL/index.html","d301ab7dddb6d228a62eb1ab1da31e3f"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","e615d6e89f5a2976b752f563322af455"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","f34ec8d62a2def7db1da86ade543fb30"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","d69ec2b63dee0dddaafabf7a81bef84e"],["E:/qinhao/hexo/public/NB-IoT/index.html","6351652458b6520244114d8d42ca2640"],["E:/qinhao/hexo/public/Network_Access/index.html","95535fc8e61cf9fee11ea566a13a6674"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","1a2cb40b03e3b2f807eb04ba57766c37"],["E:/qinhao/hexo/public/OFDMA/index.html","552b24b8df91b28d65471c87ef5dad3d"],["E:/qinhao/hexo/public/OLT_command/index.html","c6332cb7bfefec2445b1a0a5d5d9c2da"],["E:/qinhao/hexo/public/OverLoad_1/index.html","027e163d12a310d7ddcb3e9792c9d659"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","20f19e3c635e77644b43e0471e813d97"],["E:/qinhao/hexo/public/Python-3/index.html","3c619ea00b04da05e9b0fc4d4a9a10b0"],["E:/qinhao/hexo/public/Python-4/index.html","e6f17e97ea2052bbcab6d98cd3e0928e"],["E:/qinhao/hexo/public/Python-5/index.html","f8125bfe52605f6bf0cfc57c4d468468"],["E:/qinhao/hexo/public/PythonUdp/index.html","b6800b9ccb74d8262fc5d5bee6b9cd19"],["E:/qinhao/hexo/public/Python_basic/index.html","2e38c84492026712ad598b0f84ec5c45"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","ce4044cbd6a8fc3723005166a518e202"],["E:/qinhao/hexo/public/Python_variable/index.html","cf3f54427d2bbe7683f30b303240aca1"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","faa4c7e648a55b3eb98a54740556f701"],["E:/qinhao/hexo/public/TCP/index.html","5c326824171c7c4f466e85854a7f9a24"],["E:/qinhao/hexo/public/TCP_client/index.html","bcf76a8dd1044980b3250599130b1a89"],["E:/qinhao/hexo/public/TCP_server/index.html","b3193dea4d6f2b795ba1480c42e017fd"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","a113fe93742facfdb954641e624764dd"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","11920b346175455f51232ab26eded012"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","ac864553f0766e1c6e70b5f986765303"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","d3670da81bc5c72b04bb2a0c8ee859de"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","a6c7a8da96a92771c91be63af2360d6e"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","15736628dacdbc00c461bb926f351f0f"],["E:/qinhao/hexo/public/about/index.html","4f0f43272a0271bd3623cf375d6bbc9e"],["E:/qinhao/hexo/public/acl/index.html","66f249e2accca9f0c8587816fc2515e1"],["E:/qinhao/hexo/public/archives/2020/01/index.html","ae35a5bb22c05f6b2b8dd7a22ebeaf7c"],["E:/qinhao/hexo/public/archives/2020/02/index.html","7f2ec1e8ae4c7a4b6c45792d5506fbe6"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","3316d2c5870fa798115c4f96b63bdf44"],["E:/qinhao/hexo/public/archives/2020/03/index.html","6c64cdb7d04d4f3e0c6f5e840206c37b"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","d18c4273e9a3195c1066aaff7ea1eb75"],["E:/qinhao/hexo/public/archives/2020/04/index.html","59619eace7160a3a7a6c41ab56710da0"],["E:/qinhao/hexo/public/archives/2020/05/index.html","a68f834f1819122f9f088a7fa120c3b8"],["E:/qinhao/hexo/public/archives/2020/06/index.html","f71ac513d1e89a2cc982b845ca4c5ab4"],["E:/qinhao/hexo/public/archives/2020/07/index.html","765c8d235a1b70b469b8f0a051b30510"],["E:/qinhao/hexo/public/archives/2020/08/index.html","9acb219d663a1676af197543d0543ec5"],["E:/qinhao/hexo/public/archives/2020/10/index.html","a2549467ca8d6df63bafc51ce485d867"],["E:/qinhao/hexo/public/archives/2020/11/index.html","a4f3f0d49bf5391af6c567367f8051a1"],["E:/qinhao/hexo/public/archives/2020/index.html","1c53f41d8c8986360834dee52fe770ef"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","9374a7b9e31385057267470887c08b49"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","43c5a33d37113f320b911ab82f32838b"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","5c72096ee0dab9d88274ed360f898c83"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","5388d73f1847dadd82266588e90c5a25"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","ba01786ed712df594bbc08ea87ce6f79"],["E:/qinhao/hexo/public/archives/2021/03/index.html","50dd5bd83b972236e7e8bb1de96619a0"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","2e598ce93095207af5bf8ce880c755b1"],["E:/qinhao/hexo/public/archives/2021/04/index.html","d8163d2b8cf477023d9da176728d11f7"],["E:/qinhao/hexo/public/archives/2021/05/index.html","f09d0e416a9de8b5d0878012ccdebe45"],["E:/qinhao/hexo/public/archives/2021/06/index.html","92b9b56d72652596c94ceab7dfa1613d"],["E:/qinhao/hexo/public/archives/2021/07/index.html","fb180f9cc91a32e4deb4745174a2894a"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","f28f2a72a0938a04a89d6457f71bc65f"],["E:/qinhao/hexo/public/archives/2021/08/index.html","224f327739e9747f0734afe0c8350ac6"],["E:/qinhao/hexo/public/archives/2021/09/index.html","8f0e3d9849f4bba00aee7c56d4adb8ea"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","afd05366c038ad137f3f2e4eac07d6f1"],["E:/qinhao/hexo/public/archives/2021/10/index.html","10d8a6b92421ab2bafe31f2c916d4faf"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","3b0104e96f84f7a84227e24209acbae6"],["E:/qinhao/hexo/public/archives/2021/index.html","ab46efd05ce4ecc157035ec9a224e387"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","73d6d5f4d565cadac6000faab28ac9f6"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","41997fc51aa6f58defb64037527e1d5b"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","edd406bf0e064a43ad7c652b481e9f9a"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","d0b68d12d50cee8cd0f8bbb4624c89a1"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","005a440fc06d21e1fd40eb19fdd21e05"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","42a1725ba826c870a5d74618234d3ceb"],["E:/qinhao/hexo/public/archives/2022/01/index.html","b848eec24fe2189448a62ea1cac2c5c6"],["E:/qinhao/hexo/public/archives/2022/index.html","ef6bf86c0d21248bfd648c9e421d1949"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","5d162592fa5ad5523532bd96c69e034e"],["E:/qinhao/hexo/public/archives/index.html","fd96180be4e24aa619d118216d15c3f9"],["E:/qinhao/hexo/public/archives/page/10/index.html","9364babac7ba62a2d1bb5913a9621a78"],["E:/qinhao/hexo/public/archives/page/11/index.html","531609ff70e16a64f9f1c6e4328a7cfa"],["E:/qinhao/hexo/public/archives/page/12/index.html","531609ff70e16a64f9f1c6e4328a7cfa"],["E:/qinhao/hexo/public/archives/page/13/index.html","531609ff70e16a64f9f1c6e4328a7cfa"],["E:/qinhao/hexo/public/archives/page/2/index.html","fd96180be4e24aa619d118216d15c3f9"],["E:/qinhao/hexo/public/archives/page/3/index.html","fd96180be4e24aa619d118216d15c3f9"],["E:/qinhao/hexo/public/archives/page/4/index.html","e8a5195ee63c1d48cb4c08e8d4ef6d49"],["E:/qinhao/hexo/public/archives/page/5/index.html","e8a5195ee63c1d48cb4c08e8d4ef6d49"],["E:/qinhao/hexo/public/archives/page/6/index.html","e8a5195ee63c1d48cb4c08e8d4ef6d49"],["E:/qinhao/hexo/public/archives/page/7/index.html","e8a5195ee63c1d48cb4c08e8d4ef6d49"],["E:/qinhao/hexo/public/archives/page/8/index.html","9364babac7ba62a2d1bb5913a9621a78"],["E:/qinhao/hexo/public/archives/page/9/index.html","9364babac7ba62a2d1bb5913a9621a78"],["E:/qinhao/hexo/public/artitalk/index.html","48e08af74025fc0e695b2e6c75521b39"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","fd8460889354cb9221b119bd58095640"],["E:/qinhao/hexo/public/bitwarden/index.html","56e7ff5a3aa8320ff96d14eab3d29ed8"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","9e3c318e5248c62847809a4857fb17b6"],["E:/qinhao/hexo/public/c-11/index.html","c13f587772a72d21eb131affb757a0a0"],["E:/qinhao/hexo/public/c_1/index.html","ac06a6637cab39d067c2fc450b289e75"],["E:/qinhao/hexo/public/c_10/index.html","9dd227d87add4ee35d94e6b089b09ac8"],["E:/qinhao/hexo/public/c_2/index.html","2847ee724b6fad4c367133c61427667d"],["E:/qinhao/hexo/public/c_3/index.html","bb97c906bbab4e8776a070af623ca734"],["E:/qinhao/hexo/public/c_4/index.html","2dd56679abc624a82c42892cfb0a2181"],["E:/qinhao/hexo/public/c_5/index.html","171eaeefcba23b1181f9030249110e81"],["E:/qinhao/hexo/public/c_6/index.html","7108cc48709639c479f7a69aabff4ec1"],["E:/qinhao/hexo/public/c_7/index.html","8989d13c51720335d4d073b4050ed23e"],["E:/qinhao/hexo/public/c_8/index.html","45f840ee52ab0c0fd0db6d54e3fe8753"],["E:/qinhao/hexo/public/c_9/index.html","f42608563f78f685e328af5c3c593e89"],["E:/qinhao/hexo/public/categories/C语言/index.html","980c6d28cd6b9c6f4c2ebbb4d8f03158"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","0190a1ac95169e681129f1a0dd7090a6"],["E:/qinhao/hexo/public/categories/Java/index.html","de201d81d199e14d72b29e318c243910"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","8357f1970ec47b871844e15f65bf449f"],["E:/qinhao/hexo/public/categories/Linux/index.html","a2cd2a94cbb99b499c5f8d9f4f53a24d"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","f189543a516333b396d366242b5d882b"],["E:/qinhao/hexo/public/categories/Python/index.html","a9273c5b2d718eb07f17fff50aeaad52"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","b1460668bcd3d82c7201cd04a756fa60"],["E:/qinhao/hexo/public/categories/交换机/index.html","60fd61ea1124757191a14fb5c5a5d012"],["E:/qinhao/hexo/public/categories/前端学习/index.html","843fc45d6682e41a8bcc42eccc3cc71c"],["E:/qinhao/hexo/public/categories/华为认证/index.html","cd80df142c153f24bd44f0a8f3c83a7c"],["E:/qinhao/hexo/public/categories/小技巧/index.html","4cc75a5ed3e1ebbf6a7836e1d29d0125"],["E:/qinhao/hexo/public/categories/操作系统/index.html","d2bf0a576d8492e3a90703a99b9fca22"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","41fbbe1806ed38017cb19aab90e8015a"],["E:/qinhao/hexo/public/categories/数据库/index.html","03f5ef542d7c5d469e953201411a783a"],["E:/qinhao/hexo/public/categories/数据结构/index.html","503b0157f45e685761fd80a2a911bb62"],["E:/qinhao/hexo/public/categories/服务器/index.html","8ad649d00db336a219c77653791d2413"],["E:/qinhao/hexo/public/categories/算法基础/index.html","d98331c3f1d78d9d086a42b68980d641"],["E:/qinhao/hexo/public/categories/网络安全/index.html","2aae740972cc76f5abfe2eba995c5db1"],["E:/qinhao/hexo/public/categories/股票知识/index.html","a394bf2e29d606bc552b1ca6578fa57a"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","9f00427b4f6f3e1e8c9ff8d43840fde6"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","dfb14a90579266e67e4b9e3f12e12b43"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","6cb78603a8d8b16384e960f1020d7479"],["E:/qinhao/hexo/public/categories/软件破解/index.html","623c87ad3f25c665f71ea226b84df42a"],["E:/qinhao/hexo/public/categories/通信技术/index.html","fe4f292aeaec5ab0b3e837d32afff5c5"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","d9652c4d6079901a6a73a8aabbcdd09f"],["E:/qinhao/hexo/public/category/index.html","4c9d8b5f8c03590ab9c9bdd8f377a393"],["E:/qinhao/hexo/public/cinemas/index.html","3721c7933a52678fac11e020f2d4fe03"],["E:/qinhao/hexo/public/color/index.html","28f944958296a66f0221bc43443ff8dd"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","9ae00b8399844399b0e77840c5eb120d"],["E:/qinhao/hexo/public/computer_network_basics/index.html","b9c2fe3ac780c403c544e07916b1d993"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","08a9e3ea666f2a82f599057a7ca3881c"],["E:/qinhao/hexo/public/dataStructure-1/index.html","3e5663479eebdbe07478583c991b2238"],["E:/qinhao/hexo/public/dataStructure-2/index.html","2fedac6b0029d6fd9e0716f496baeaff"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","0729a7aa7f60dd37adea381fc686edff"],["E:/qinhao/hexo/public/friends/index.html","38fcf4f8b7ca76ee188051c8c22f4683"],["E:/qinhao/hexo/public/gcc/index.html","9480ccfd5067a6c71717b4a259325b1b"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","2033e195a7058a7be480cda6a97533ed"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","896934d697de493fd119c46ec7f9e999"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","c08fe95c73de44c2fe8a2e33111a4656"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","b8abb64a1307748f85eb837b63a664b6"],["E:/qinhao/hexo/public/linux/index.html","8f5a70dc38d23d347760e1e0c36e3406"],["E:/qinhao/hexo/public/login_demo/index.html","2e30b44a569fbfe0960f2d201ceb4d34"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","1fae4ef6bf6fbbc739f4e39e20906e83"],["E:/qinhao/hexo/public/memory_save_number/index.html","2e799f641e2903e4410dd6fdea67c0b5"],["E:/qinhao/hexo/public/mobile_communication/index.html","5721c82da17f564974f22ed28c65a46f"],["E:/qinhao/hexo/public/movies/index.html","01cc0f1907c87cd50c2f1a5084021baa"],["E:/qinhao/hexo/public/mylist/index.html","79aca8ca0d660241f21d08303f8ffa47"],["E:/qinhao/hexo/public/myphotos/index.html","61db50e25865a6f38283c7941bf41a07"],["E:/qinhao/hexo/public/mysql-install/index.html","986331992c4969c80e30dc63794765d5"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","c1f45434a291f8b42fc2a57f31283045"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","fac018440c23826a31e925f7849fb85a"],["E:/qinhao/hexo/public/mysql_question_1/index.html","36001be5bd1a258fdd4ccc1f2d387841"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","d03dc6c26eef893fe99e31e894281196"],["E:/qinhao/hexo/public/not-allow-F12/index.html","2165e12a2ef955238c4a54bd6e3c5f8d"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","53b6320eab30ac889cd5fdd17b646645"],["E:/qinhao/hexo/public/page/10/index.html","f66de5c2055d94a973c54ba9588dd214"],["E:/qinhao/hexo/public/page/11/index.html","2f6ebf3ca160de5f88a86c269c285d55"],["E:/qinhao/hexo/public/page/12/index.html","269354ce57818430d5364b87139afcd2"],["E:/qinhao/hexo/public/page/13/index.html","ec077aca970e6df69a2a6f52b1850af9"],["E:/qinhao/hexo/public/page/2/index.html","25ea28fa43206abb73a24ac34ffdd1c1"],["E:/qinhao/hexo/public/page/3/index.html","e55723ae3d2fee94799ee30dfb2faf14"],["E:/qinhao/hexo/public/page/4/index.html","2bbd08b5894afad9686bf9393ef32bbd"],["E:/qinhao/hexo/public/page/5/index.html","d05658c0c91e293a699f172742471b78"],["E:/qinhao/hexo/public/page/6/index.html","ae239e2e5f84b72c21969726eeb5f207"],["E:/qinhao/hexo/public/page/7/index.html","8f2e066b6c3f63c5e8db51597a5b83f4"],["E:/qinhao/hexo/public/page/8/index.html","7c73025cb2a904fe1ba39140ff491b57"],["E:/qinhao/hexo/public/page/9/index.html","b2b41358ff4184ca825ec81a3a452911"],["E:/qinhao/hexo/public/python-2/index.html","d8db954282595375592d4fcfc426ae71"],["E:/qinhao/hexo/public/ssh/index.html","1e7fd9ee3860012e9eef211fdcf98cfd"],["E:/qinhao/hexo/public/stock_1/index.html","9de778012edd14cb3120c73c036f227a"],["E:/qinhao/hexo/public/stock_10/index.html","af4e781016351b3de36ce8b91b2dc124"],["E:/qinhao/hexo/public/stock_11/index.html","f667ce9088b1183e34d653f8eaa49378"],["E:/qinhao/hexo/public/stock_12/index.html","a831b096a72dc1dc17f9718c0e063c0a"],["E:/qinhao/hexo/public/stock_13/index.html","cc94d6ff87eff28710fb9a0130774762"],["E:/qinhao/hexo/public/stock_14/index.html","1a4a499cee7f05081b164ef0e91806f5"],["E:/qinhao/hexo/public/stock_15/index.html","07e15976ea8d1d62ff36ce9efc32c631"],["E:/qinhao/hexo/public/stock_2/index.html","9ba3ab3b50640748f18e781a408fab6f"],["E:/qinhao/hexo/public/stock_3/index.html","7d402cf84788898debc8248d9555e274"],["E:/qinhao/hexo/public/stock_4/index.html","85782c4baa20d7a8c035f82b7fd75781"],["E:/qinhao/hexo/public/stock_5/index.html","42d5ec1c3d78031d8602b11b7a4e4404"],["E:/qinhao/hexo/public/stock_6/index.html","b04f2d911cb54b2a98b286ca788935c7"],["E:/qinhao/hexo/public/stock_7/index.html","4118a6a2a2986c382d1e741f20ac4b00"],["E:/qinhao/hexo/public/stock_8/index.html","d2dfe7dc58ea2e9a08806476a69c079b"],["E:/qinhao/hexo/public/stock_9/index.html","f7525222483483394c203dbb67ab8348"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","d5f4c7ee679fe1339a6f33eb38f5b809"],["E:/qinhao/hexo/public/sw-register.js","f91b02e0f67a29a37917df810635c6e9"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","a3b2ecba3377d8ff668fb55a641a587c"],["E:/qinhao/hexo/public/system1/index.html","92da4b1ccc244abf8675a5a707751887"],["E:/qinhao/hexo/public/system10/index.html","0bd02dd5edd2b850671f14b0a5ec8fce"],["E:/qinhao/hexo/public/system11/index.html","f22a803a2d98594623406203797a661b"],["E:/qinhao/hexo/public/system12/index.html","c2f14a92838b8f55a14864fd4630e7ee"],["E:/qinhao/hexo/public/system2/index.html","a253fb7b97874360695bea54b6f332f8"],["E:/qinhao/hexo/public/system3/index.html","fa7e6f7c45afdcd1e9b7bda3f4274e9a"],["E:/qinhao/hexo/public/system4/index.html","ebd248fd1ecf39305dddd057ad519110"],["E:/qinhao/hexo/public/system5/index.html","0b0078221468033b2f4910c3c7c380e4"],["E:/qinhao/hexo/public/system6/index.html","2c0f32b121891ac580ef417b01c67cc8"],["E:/qinhao/hexo/public/system7/index.html","f4f88451d22c4d920b06f2372c6d9d43"],["E:/qinhao/hexo/public/system8/index.html","d4936f1966da343346676fe43cf9ad1d"],["E:/qinhao/hexo/public/system9/index.html","2be68b1ac49fcd1629fa1f338daa0593"],["E:/qinhao/hexo/public/system_info/index.html","fd85d24e3d237173667f0b005ce65008"],["E:/qinhao/hexo/public/tags/index.html","7167933e773f8fea97a83b47621eef8f"],["E:/qinhao/hexo/public/transactionManager/index.html","d96de10173393ca40754f46f744c7806"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","cbd9060ddecbb435d8c63ef1b097c2cd"],["E:/qinhao/hexo/public/wireless_radio/index.html","fe606423d63877222c3949c85b80c96f"],["E:/qinhao/hexo/public/wireless_word/index.html","47b6660ffabf473223f9c22391efe5aa"],["E:/qinhao/hexo/public/xml/index.html","d72e102dc65825d535d7eafce8537f86"]];
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







