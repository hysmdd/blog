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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/3G/index.html","41769bd52e94286464dbd3b2b8351704"],["E:/qinhao/hexo/public/404.html","449566d63d31bad401ad6da8328b1207"],["E:/qinhao/hexo/public/404/assets/css/bootstrap.min.css","6f6a19862483166ac73fcc2645006bca"],["E:/qinhao/hexo/public/404/assets/css/style.css","132ed6b14aa0e3d83eb3657a486042d5"],["E:/qinhao/hexo/public/404/assets/js/gsap.min.js","00e4b3172efa7bc9f131940a997bc067"],["E:/qinhao/hexo/public/404/assets/js/script.js","0540d3f1469bf028b5373ab4ca32e271"],["E:/qinhao/hexo/public/5G网络优化/index.html","999a51ad78fe33c487eacbb305be1cc3"],["E:/qinhao/hexo/public/AOP_1/index.html","465b5b9dabb8c1700e6cc0351525753c"],["E:/qinhao/hexo/public/AOP_2/index.html","2a4bf48ad57737ab59d0bfc518bbe611"],["E:/qinhao/hexo/public/AOP_3/index.html","bb5943f82006157eada0e29d472a8bdf"],["E:/qinhao/hexo/public/Algorithm_1/index.html","1df6a18d19d6be6f19086f8f57b17cbb"],["E:/qinhao/hexo/public/Base/index.html","143cd3bdf981e0b70352f949f38d1114"],["E:/qinhao/hexo/public/ByteDanceVerify.html","db28f91f11b7401336ae57f397492d2b"],["E:/qinhao/hexo/public/CPU_Register/index.html","72ae953ca6569c211529239a455553e1"],["E:/qinhao/hexo/public/C_Programming_1/index.html","8d6fd96f0f06b592b3090e7f8ab5a2bb"],["E:/qinhao/hexo/public/Design_patterns_1/index.html","a9d955275c27f26ee4728914691308e3"],["E:/qinhao/hexo/public/FileDownload/index.html","56cbb825561b6eaed219f295a4cf8ff0"],["E:/qinhao/hexo/public/Files_and_directories/index.html","f3dbf1d0f49a497aa2b455d569c6e28b"],["E:/qinhao/hexo/public/FixedTools/index.html","a559dbe533bd1b718a0fe726b99a836b"],["E:/qinhao/hexo/public/GRE-VPN/index.html","d9463a3d3dd1c2de8dcfebd10e4baa67"],["E:/qinhao/hexo/public/GRE-over-IPSec/index.html","366728d330164ab722f97f63fe6bef31"],["E:/qinhao/hexo/public/GSM/index.html","e98ee846fd1f558bb621aec9b726281c"],["E:/qinhao/hexo/public/ICIC/index.html","adf9047e7aa54f4bc989aeab8f863a83"],["E:/qinhao/hexo/public/IPSec_VPN/index.html","8b3d0b49afd453e4578851531a8842da"],["E:/qinhao/hexo/public/IP_Bearer_Network_basic/index.html","dbcb68da30304bee0cfbae959e7f75c0"],["E:/qinhao/hexo/public/JDBC/index.html","0564b5495205e667fc4e7d66d82d9d63"],["E:/qinhao/hexo/public/JDBCTemplate/index.html","d1bb186df505872cf95db041fc63d278"],["E:/qinhao/hexo/public/JDBC_SQL_injection/index.html","4fbce757e67b272e9a21a8e4a74c502b"],["E:/qinhao/hexo/public/LTE/index.html","4db40b49a7b68e8b83b9e50c2a25405b"],["E:/qinhao/hexo/public/Layer/index.html","dab7bae1f2ab2223ba5f44dcdf348cc8"],["E:/qinhao/hexo/public/Linux_often_use/index.html","2cb34f0de0556b39be877f316936087b"],["E:/qinhao/hexo/public/MIMO/index.html","761932305138610864bbd1699f98319c"],["E:/qinhao/hexo/public/MySQL/index.html","b1785b340c88a06a887505e60961496a"],["E:/qinhao/hexo/public/MySQL8_basics/index.html","0720525c27a0756c575122ff139c5d1b"],["E:/qinhao/hexo/public/MySQL_constraint/index.html","bd9146cac84d80efaea3ea02dc2adbbf"],["E:/qinhao/hexo/public/MySQL_transaction/index.html","e0ac8c3e573272b22c133fd16f5a476a"],["E:/qinhao/hexo/public/NB-IoT/index.html","8a47699a072c5b6dfcd0568a67255d09"],["E:/qinhao/hexo/public/Network_Access/index.html","79769aa9211820b0ea3f6d9e2f3d7bd6"],["E:/qinhao/hexo/public/No-module-named-pip/index.html","ab9cbea968e25217f1981a9cdc56ab19"],["E:/qinhao/hexo/public/OFDMA/index.html","56ad6860c383955c53a5cde6837a68a3"],["E:/qinhao/hexo/public/OLT_command/index.html","6393f0c89f3ba713d46b3f03994ac094"],["E:/qinhao/hexo/public/OverLoad_1/index.html","1ab6287df773f6ac17fd5a6ee9b38d99"],["E:/qinhao/hexo/public/PlatformTransactionManager/index.html","802bcecee95bba2e6a518f747e9958aa"],["E:/qinhao/hexo/public/Python-3/index.html","3e49eef18995e6b91fe66cc4fc46452a"],["E:/qinhao/hexo/public/Python-4/index.html","3a324aaa6d06504da3d9c3c7f680f2fe"],["E:/qinhao/hexo/public/Python-5/index.html","3f57cb0ed97a0187b04442f5e2ed912f"],["E:/qinhao/hexo/public/PythonUdp/index.html","86061a750901a34702a8955bbdfcdc90"],["E:/qinhao/hexo/public/Python_basic/index.html","0e7c3a8cd94bd9b512d5cede4d3b0a3c"],["E:/qinhao/hexo/public/Python_cards_manage/index.html","ddc4f1160dc7e41bbfc59eed6593f913"],["E:/qinhao/hexo/public/Python_variable/index.html","146815be9add56e44cd0eeeff94958c6"],["E:/qinhao/hexo/public/RedHat_setup_script/index.html","798340d01986aadeebf16110448797f9"],["E:/qinhao/hexo/public/TCP/index.html","4c6c08783820995ed781ee42a401e224"],["E:/qinhao/hexo/public/TCP_client/index.html","35b9407be452598ba8b4ea97c5e303cb"],["E:/qinhao/hexo/public/TCP_server/index.html","61a3b05193782efbf832cb45e6bd69e7"],["E:/qinhao/hexo/public/TD-LTE-System/index.html","7f4123510e1ce3089ab6500d4b426c6d"],["E:/qinhao/hexo/public/Web_site_SSL/index.html","4b4db27ec933445469940094664970dc"],["E:/qinhao/hexo/public/Windows_Web_build_environment/index.html","d1166e351855f437a7d0f545ef60a1d3"],["E:/qinhao/hexo/public/Windows_Web_build_website/index.html","cfee2e6fce133ee212d7ca02c02ed91f"],["E:/qinhao/hexo/public/Windows_Web_often_use/index.html","ac0f4bdef68ae3d962eef0fd3d62c625"],["E:/qinhao/hexo/public/a_server_build_many_webs/index.html","868f96d29303db40ed2cfa1692f60369"],["E:/qinhao/hexo/public/about/index.html","f5be0f8dd1205fa99087c085ec9094fa"],["E:/qinhao/hexo/public/acl/index.html","31d7f77c0065c46db8795daa6765531d"],["E:/qinhao/hexo/public/archives/2020/01/index.html","c889c9949f2da07dfdea8606ecf8235d"],["E:/qinhao/hexo/public/archives/2020/02/index.html","6d08ad42362971306995bcc490ee35e1"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","32c94faf3a513ddfa2a98f80db2eaa64"],["E:/qinhao/hexo/public/archives/2020/03/index.html","1f4b70ab97ca88b1c7efe3509c188bda"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","026b598598ee8b5f3038f0f662416431"],["E:/qinhao/hexo/public/archives/2020/04/index.html","6c696df992174ea13ecca7828d0d1c3b"],["E:/qinhao/hexo/public/archives/2020/05/index.html","db287fe2000574a4da8a22e33ca9796c"],["E:/qinhao/hexo/public/archives/2020/06/index.html","c01cbf8eeb9713027608322518644cc7"],["E:/qinhao/hexo/public/archives/2020/07/index.html","61c52fb36de635d3e8add2f8ed7fc240"],["E:/qinhao/hexo/public/archives/2020/08/index.html","0df924c8f2e164304c7ecacff7aaef45"],["E:/qinhao/hexo/public/archives/2020/10/index.html","90bcee976807fd4d47c3c1519130e7c4"],["E:/qinhao/hexo/public/archives/2020/11/index.html","f93af6117ca0cfe210dad3ee7cf6fe7d"],["E:/qinhao/hexo/public/archives/2020/index.html","3745c55ce41ce0408e04cccde59e94f7"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","be51dfa5280b02fca4b5ccf69f59dce5"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","afe0045debbbbd369321bebc683285de"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","4105fd354f3d3d30a9b08db744828484"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","230f1fe6fc1b8031d45cfac8be3bf3b5"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","fb3c935f5f7ad6916a7f5a6e58162834"],["E:/qinhao/hexo/public/archives/2021/03/index.html","9a139a4887a9f58ff6a15c78e6874984"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","759936003d61b274941a530daf98975d"],["E:/qinhao/hexo/public/archives/2021/04/index.html","53407de62b1b9f9ca6a528295c6f9aa0"],["E:/qinhao/hexo/public/archives/2021/05/index.html","51650d2ca2e0c3151636770869a9cee4"],["E:/qinhao/hexo/public/archives/2021/06/index.html","bdcefa8e24ac5514ac7a72244c13b376"],["E:/qinhao/hexo/public/archives/2021/07/index.html","51bb8d2ee7047057bbf3d2110a9da9fe"],["E:/qinhao/hexo/public/archives/2021/07/page/2/index.html","3d6b0398a55cb10e664d4122603c3072"],["E:/qinhao/hexo/public/archives/2021/08/index.html","9b1f5a4e1896deb65415565a8b3da8ad"],["E:/qinhao/hexo/public/archives/2021/09/index.html","eda19f503fc6aaef1da4624448da1faf"],["E:/qinhao/hexo/public/archives/2021/09/page/2/index.html","5f2d2d69fa370b89479ee968d86d3378"],["E:/qinhao/hexo/public/archives/2021/10/index.html","9826c3ea210721dcdfd3061737c30f40"],["E:/qinhao/hexo/public/archives/2021/10/page/2/index.html","106685c7293a09c9887e415dcccb38e7"],["E:/qinhao/hexo/public/archives/2021/index.html","124b30f6a988bcb5fe5926788a9d00fd"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","fadf5805c3f10744426c1b83788ad4ac"],["E:/qinhao/hexo/public/archives/2021/page/3/index.html","d3e28b1cf49e177ff9053b3df5a494d3"],["E:/qinhao/hexo/public/archives/2021/page/4/index.html","2d36f03fb395f1d342b4a179865d2521"],["E:/qinhao/hexo/public/archives/2021/page/5/index.html","c8373aad11eaa23f2580091548381b7e"],["E:/qinhao/hexo/public/archives/2021/page/6/index.html","7f006ded39c5a9556b93341fc15ea187"],["E:/qinhao/hexo/public/archives/2021/page/7/index.html","9390c1626775fbe7e837182df1d6f2c9"],["E:/qinhao/hexo/public/archives/2022/01/index.html","7a9b035325f1cc65e3354f91a41fc757"],["E:/qinhao/hexo/public/archives/2022/index.html","51a3f21d6df72763cedf144b57adb830"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","2fb33c6c26d65628bca6b199943c077d"],["E:/qinhao/hexo/public/archives/index.html","053fb22180eae447e027e8ac6056cc1c"],["E:/qinhao/hexo/public/archives/page/10/index.html","b1417819bd6eeb30aa14675afbd7def5"],["E:/qinhao/hexo/public/archives/page/11/index.html","b1417819bd6eeb30aa14675afbd7def5"],["E:/qinhao/hexo/public/archives/page/12/index.html","b1417819bd6eeb30aa14675afbd7def5"],["E:/qinhao/hexo/public/archives/page/13/index.html","12d4b50b627579ec659ce1fa8ef6abb7"],["E:/qinhao/hexo/public/archives/page/2/index.html","053fb22180eae447e027e8ac6056cc1c"],["E:/qinhao/hexo/public/archives/page/3/index.html","053fb22180eae447e027e8ac6056cc1c"],["E:/qinhao/hexo/public/archives/page/4/index.html","727e95f0164ca0a57869349801e78948"],["E:/qinhao/hexo/public/archives/page/5/index.html","727e95f0164ca0a57869349801e78948"],["E:/qinhao/hexo/public/archives/page/6/index.html","727e95f0164ca0a57869349801e78948"],["E:/qinhao/hexo/public/archives/page/7/index.html","727e95f0164ca0a57869349801e78948"],["E:/qinhao/hexo/public/archives/page/8/index.html","727e95f0164ca0a57869349801e78948"],["E:/qinhao/hexo/public/archives/page/9/index.html","b1417819bd6eeb30aa14675afbd7def5"],["E:/qinhao/hexo/public/artitalk/index.html","7423cce65aea9feb2b0cb671bf280f5d"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/bangumis/index.html","ed4d7bc75855d2eb5e065a8c5b2f3d6a"],["E:/qinhao/hexo/public/bitwarden/index.html","d68d9c51209529017efc600b7b37c85a"],["E:/qinhao/hexo/public/build-MAN-idea/index.html","c0485a7ef55e6cb059237163ff839b02"],["E:/qinhao/hexo/public/c-11/index.html","26b1c2ad85d67c12fa842b576f7c136e"],["E:/qinhao/hexo/public/c_1/index.html","992a20095d38b345c951e6dc651f5ed2"],["E:/qinhao/hexo/public/c_10/index.html","2ce3e4d36a45526ee82df9612f689263"],["E:/qinhao/hexo/public/c_2/index.html","8a697f4b2dc42487a5ab4acabe8f854e"],["E:/qinhao/hexo/public/c_3/index.html","022752ceed2c8e789238ac86cf3c751c"],["E:/qinhao/hexo/public/c_4/index.html","000d6bdfcbeca9bcaaaac22c33e5fec4"],["E:/qinhao/hexo/public/c_5/index.html","5fcc80d349bce9d19f9cdfb74863721e"],["E:/qinhao/hexo/public/c_6/index.html","3b170948052b7f3479b8d8d7a2c4f16d"],["E:/qinhao/hexo/public/c_7/index.html","b40ff7871d6440d4aa1d6056a6d2f943"],["E:/qinhao/hexo/public/c_8/index.html","57edfdd7621b62d88871ce24321f6bcc"],["E:/qinhao/hexo/public/c_9/index.html","612d00def4ad62bc108593975261ce9d"],["E:/qinhao/hexo/public/categories/C语言/index.html","682cf922daf1bbb1ebe7ba36b8b0661c"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","40ea168c94245b0f48f55545518f61b9"],["E:/qinhao/hexo/public/categories/Java/index.html","70bd534d0488241cb5926c0d59c15cb2"],["E:/qinhao/hexo/public/categories/Java/page/2/index.html","c47217072961c4272e65358354e40eb6"],["E:/qinhao/hexo/public/categories/Linux/index.html","d35b4eba718e2d19a616bfa7ed2af55d"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","29678ea7e8058aa872a5e586d55187da"],["E:/qinhao/hexo/public/categories/Python/index.html","f9dfbc2309753a838e5ebacda206cce9"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","79924437745cc4e723ddcea6c9925ed7"],["E:/qinhao/hexo/public/categories/交换机/index.html","4f73de59c263f7f9d8e4b92e404d8179"],["E:/qinhao/hexo/public/categories/前端学习/index.html","a53195cf8ee4660f75e34c8f22e24f57"],["E:/qinhao/hexo/public/categories/华为认证/index.html","113e467e9004d6bb68b27efa7200f196"],["E:/qinhao/hexo/public/categories/小技巧/index.html","5dd250514bd595a631fe7293f22f11a7"],["E:/qinhao/hexo/public/categories/操作系统/index.html","6d6ff35c3b5e548fa2065bf370421e41"],["E:/qinhao/hexo/public/categories/操作系统/page/2/index.html","4db31c6f98c9dfb5a564d6a62ee2f6f8"],["E:/qinhao/hexo/public/categories/数据库/index.html","07b6593fd2427b4f08e15da1a4a2e6b8"],["E:/qinhao/hexo/public/categories/数据结构/index.html","a8cd5658c27fb0429969727930dff8b1"],["E:/qinhao/hexo/public/categories/服务器/index.html","a963be3b5a6200868972949f27cad083"],["E:/qinhao/hexo/public/categories/算法基础/index.html","acee614c60cf33220d2593b2c9dd6f55"],["E:/qinhao/hexo/public/categories/网络安全/index.html","8db8a2f2e38a96120d5f7eed03072b6f"],["E:/qinhao/hexo/public/categories/股票知识/index.html","db64a279167e094107f17d42c5d89643"],["E:/qinhao/hexo/public/categories/股票知识/page/2/index.html","f80155bde4bb67d5b104c9b7fe057e7a"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","9ed82d3fe98478c5d2a9b3ab38438b9a"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","4f7d40973ed2e14976460c318ef11372"],["E:/qinhao/hexo/public/categories/软件破解/index.html","71487227bef3f5e4ac66d77558e06635"],["E:/qinhao/hexo/public/categories/通信技术/index.html","e542d758af2e621c5d00474eaaad7bfc"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","3d6776047df80253d79121d380641b31"],["E:/qinhao/hexo/public/category/index.html","df302ff58622dd63aa8c0b14a0507ae2"],["E:/qinhao/hexo/public/cinemas/index.html","7899fa022dc88f6994861eba40bb6e44"],["E:/qinhao/hexo/public/color/index.html","f788666f1221015f34cb75d8fa04cfdd"],["E:/qinhao/hexo/public/computer_Internet_1/index.html","b375e6530bf7a2a06d9d8a9767283efb"],["E:/qinhao/hexo/public/computer_network_basics/index.html","7b61f8dbe66fb8aeba381c5766b72be4"],["E:/qinhao/hexo/public/css/first.css","73dcb5eb9a421d75c8f2f17d4285295f"],["E:/qinhao/hexo/public/css/style.css","32f249f072182a7088a0f7a2c5b6dc9d"],["E:/qinhao/hexo/public/css_clear/index.html","3d543f350ae9f9e56c09ec2899ff9bea"],["E:/qinhao/hexo/public/dataStructure-1/index.html","39e17a0f8ded1f8d6576671dd220ca3d"],["E:/qinhao/hexo/public/dataStructure-2/index.html","580e895ef5d574419190f2300a1aab80"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","0dd8c02dbe3f0d582b1a52a1a00ed8af"],["E:/qinhao/hexo/public/donate/drinks/script.js","516bc286d1c162bf09c806066fda4171"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","12257cdd87244e6f517e5283e50f6c14"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/footer/index.html","e2c9a14305bd9e3b7e5c0225b68af954"],["E:/qinhao/hexo/public/free-get-189vip/index.html","962bf1b28e7892b612d5d5c66e4c178e"],["E:/qinhao/hexo/public/friends/index.html","70a0692c73c34a502d8c8db2565d44f5"],["E:/qinhao/hexo/public/gcc/index.html","a5720be87e9be8bae11a8922590960bd"],["E:/qinhao/hexo/public/huawei-PCManager/index.html","116b66e279cdedb92499404372f76cbd"],["E:/qinhao/hexo/public/huawei-exam-application/index.html","3b7927aa36677122881a622148a62cdf"],["E:/qinhao/hexo/public/image/png/circle.png","5d85080e43c457b35b23f4ad8ceaa6c5"],["E:/qinhao/hexo/public/image/png/icp.png","37975a3be8087f62933f7aa3e7e80d12"],["E:/qinhao/hexo/public/image/png/left_ptr.png","b893704c321e35374e4bc97adb72048d"],["E:/qinhao/hexo/public/image/png/openhand.png","b040b0a64d22b7f40388391ac744949d"],["E:/qinhao/hexo/public/image/png/pointer.png","14c9f722890f733da3ae7fb15013a81a"],["E:/qinhao/hexo/public/image/png/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["E:/qinhao/hexo/public/image/png/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["E:/qinhao/hexo/public/image/png/safari.png","5e83f8d5772a61cd7036bd7bf3f84563"],["E:/qinhao/hexo/public/image/png/text.png","80d9f4da0a0c20b02898f23b035b17c8"],["E:/qinhao/hexo/public/image/png/weibo.png","2af288384e8aee34e94adae792942d2c"],["E:/qinhao/hexo/public/image/png/zoom-in.png","bf6da71dce828553d50a1ce3fd65163a"],["E:/qinhao/hexo/public/image/png/zoom-out.png","d5da599e9fd8344973c64b8ca109958b"],["E:/qinhao/hexo/public/image/svg/1f37b.svg","5e2ea03aa4963cda5e91d395c2587e6b"],["E:/qinhao/hexo/public/image/svg/1f389.svg","b052a4bef57c1aa73cd7cff5bc4fb61d"],["E:/qinhao/hexo/public/image/svg/1f4cc.svg","09204f6a96455580e749454b7449aa82"],["E:/qinhao/hexo/public/image/svg/1f4f0.svg","51cd8436fb99a6f12257db34780fb7a7"],["E:/qinhao/hexo/public/image/svg/1f516.svg","2424297076c0d1c8499820fc4f9d9f57"],["E:/qinhao/hexo/public/image/svg/1f5c3.svg","b542a360ed4cdceeac3bca73b455ebc6"],["E:/qinhao/hexo/public/index.html","d629398db4c953aec538a0c4804c6e92"],["E:/qinhao/hexo/public/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["E:/qinhao/hexo/public/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["E:/qinhao/hexo/public/js/issues.js","d450701b133a092543f48ffc22ce966e"],["E:/qinhao/hexo/public/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["E:/qinhao/hexo/public/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["E:/qinhao/hexo/public/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["E:/qinhao/hexo/public/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["E:/qinhao/hexo/public/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["E:/qinhao/hexo/public/js/valine.js","15d0f1f9d975de124ef5389385961992"],["E:/qinhao/hexo/public/lanzous/index.html","e5dce6e417e900ce9e6e63de05136e65"],["E:/qinhao/hexo/public/linux/index.html","810d9295a0cfcb80716034c733010118"],["E:/qinhao/hexo/public/login_demo/index.html","0eb9c0c440309e249b4d5c9501a5ecec"],["E:/qinhao/hexo/public/manage-MAN-skill/index.html","de55fccae53f499baaf8562410199e77"],["E:/qinhao/hexo/public/memory_save_number/index.html","006915e03669ba1c86ea71f0e43adf6f"],["E:/qinhao/hexo/public/mobile_communication/index.html","1897a197cea7bc42a50b5c0984645e04"],["E:/qinhao/hexo/public/movies/index.html","47f614edb71e40ffbfa6e2db89b49c41"],["E:/qinhao/hexo/public/mylist/index.html","f6db477a7beacfcbe0cdedcd8756af80"],["E:/qinhao/hexo/public/myphotos/index.html","677b151eef6ea8393c1e66eeb329b20e"],["E:/qinhao/hexo/public/mysql-install/index.html","5b1056edc60fd08fc01b3132e44f0e58"],["E:/qinhao/hexo/public/mysql_dql_1/index.html","d4223480d7c9c6ab1aca388609d3fd8d"],["E:/qinhao/hexo/public/mysql_forget_root_password/index.html","f7ae655703a1ee933080965681d0b6bb"],["E:/qinhao/hexo/public/mysql_question_1/index.html","faa8472f1993d1035c9771fe9f24a006"],["E:/qinhao/hexo/public/network_security_comprehensive/index.html","179ccda1a1836d88e7d1b70a78e06c3c"],["E:/qinhao/hexo/public/not-allow-F12/index.html","5b1c344073be238212125257f1aff301"],["E:/qinhao/hexo/public/optical_transport_network_basic/index.html","38372e9f8013365068cc347ccb61aecd"],["E:/qinhao/hexo/public/page/10/index.html","2dccf3811647c0a946a51291b8e0b9d3"],["E:/qinhao/hexo/public/page/11/index.html","c640f742fc5b5bc447df3558336010ca"],["E:/qinhao/hexo/public/page/12/index.html","2d5027684de16d3a7ed5c89cb8b19913"],["E:/qinhao/hexo/public/page/13/index.html","79b13f3cc683dc79a0288a3062352f44"],["E:/qinhao/hexo/public/page/2/index.html","7d405aed0ebb3ad001faaa130ba8d437"],["E:/qinhao/hexo/public/page/3/index.html","1b5fd8d4188b85b73c199b02b3387b50"],["E:/qinhao/hexo/public/page/4/index.html","73da248eb1f3dbc9609d9dc1d82b2eff"],["E:/qinhao/hexo/public/page/5/index.html","824a597e4d5c5331717d39ee687b24df"],["E:/qinhao/hexo/public/page/6/index.html","7d6b1b4801341ae6b9605ea89336bfec"],["E:/qinhao/hexo/public/page/7/index.html","70c5505e667c4c00ebe11bce3f250fe3"],["E:/qinhao/hexo/public/page/8/index.html","343f2d3fc321a078f35d456d17fae0b5"],["E:/qinhao/hexo/public/page/9/index.html","0e0042d01a5cd911ab813a8a009e23ee"],["E:/qinhao/hexo/public/python-2/index.html","8f4bc4cf4edfaf1c752dfcbde0b6e4f6"],["E:/qinhao/hexo/public/ssh/index.html","882ddc38e5ad2ce8959381156c218b23"],["E:/qinhao/hexo/public/stock_1/index.html","6c886ce18961555ca22ce81463636fe0"],["E:/qinhao/hexo/public/stock_10/index.html","9216d2bbb567a73e9de1dc00fb8f2b34"],["E:/qinhao/hexo/public/stock_11/index.html","86a84963f35fd8e5faa23584b31ff567"],["E:/qinhao/hexo/public/stock_12/index.html","ead5e237441c7fa3e7af2f928812724c"],["E:/qinhao/hexo/public/stock_13/index.html","e34e5b9833eb51e0a9ee488dee7ab948"],["E:/qinhao/hexo/public/stock_14/index.html","9ef72c7c5c80dd240bfde1fcd7637054"],["E:/qinhao/hexo/public/stock_15/index.html","15fb218e7d3880e29f2a18002b63405f"],["E:/qinhao/hexo/public/stock_2/index.html","5cd0e94207e935668735f3cec50d0dbb"],["E:/qinhao/hexo/public/stock_3/index.html","1e6a3341fa56e52c488e537b6169daf5"],["E:/qinhao/hexo/public/stock_4/index.html","bad799ad39926e16f316cd911db80cb3"],["E:/qinhao/hexo/public/stock_5/index.html","f4207b8756e6166590027f95bf23adf4"],["E:/qinhao/hexo/public/stock_6/index.html","446fcaf54471e5744558c171707d8ae4"],["E:/qinhao/hexo/public/stock_7/index.html","4c5386a4896ea534c49135e28c9944dc"],["E:/qinhao/hexo/public/stock_8/index.html","92bfb388447f577fa824373c137feb6c"],["E:/qinhao/hexo/public/stock_9/index.html","436cb2c2c9dbe960738466e32f3c50f9"],["E:/qinhao/hexo/public/structure-of-MAN/index.html","d1c8bc4b9a4833ef7b44f1f4f0d97e55"],["E:/qinhao/hexo/public/sw-register.js","d1a419b5f8b7a3ad28c061c63a3d0a3a"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/switchport-security/index.html","6096eae2674af0b3b0c7d6c497977fc1"],["E:/qinhao/hexo/public/system1/index.html","d8bb08a56495ca5460b53f063e3619cc"],["E:/qinhao/hexo/public/system10/index.html","d7a8b36145cf168e6d1f68b36462c846"],["E:/qinhao/hexo/public/system11/index.html","6f572f2b7571718eb17955e28e020637"],["E:/qinhao/hexo/public/system12/index.html","125b9e7851beb90d92c85ccbd46d3b17"],["E:/qinhao/hexo/public/system2/index.html","f39c8a3b44408deec965571334949c4d"],["E:/qinhao/hexo/public/system3/index.html","2bdc5624949e370856741ffc049ecba8"],["E:/qinhao/hexo/public/system4/index.html","041de7f182868e03cb4fd4bf3dc121dd"],["E:/qinhao/hexo/public/system5/index.html","bd42742ca8b1bde281d09a6b9bdedc25"],["E:/qinhao/hexo/public/system6/index.html","fb530b6ed7cfe5533a34082f74e89fcd"],["E:/qinhao/hexo/public/system7/index.html","ae43ae570161a8567b579b73c434c67d"],["E:/qinhao/hexo/public/system8/index.html","8a696ece9ddd9f474e6f9723ecab7bbc"],["E:/qinhao/hexo/public/system9/index.html","469c97397d93d9c8fdeff34bdf82e142"],["E:/qinhao/hexo/public/system_info/index.html","8c3ccabc0002cab2e546d597e489dbab"],["E:/qinhao/hexo/public/tags/index.html","19b8841e80eae65bf65c2b2c2f109f9a"],["E:/qinhao/hexo/public/transactionManager/index.html","36140a96379a2833c0a40075ccd3732f"],["E:/qinhao/hexo/public/utils/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/utils/css/all.min.css","84d8ad2b4fcdc0f0c58247e778133b3a"],["E:/qinhao/hexo/public/utils/css/font-awesome-animation.min.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/qinhao/hexo/public/utils/css/solarized-light.min.css","769d25bae36c449b6612b98809d01041"],["E:/qinhao/hexo/public/utils/css/waves.min.css","ad8ce7fc1d688135eedeedee534aa9a2"],["E:/qinhao/hexo/public/utils/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/utils/js/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["E:/qinhao/hexo/public/utils/js/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["E:/qinhao/hexo/public/utils/js/artitalk.js","d94fe7817fad4ecae5681cbde76a4acc"],["E:/qinhao/hexo/public/utils/js/av-min.js","bcaf9b004ff4f49349bb6201fe3b9a5d"],["E:/qinhao/hexo/public/utils/js/bbtalk.min.js","a1ab1de2ae261228a7532e855f6980a5"],["E:/qinhao/hexo/public/utils/js/clipboard.min.js","27784b7376dd992368c71b6c5559f358"],["E:/qinhao/hexo/public/utils/js/comment_typing.js","ab7b34f055a2bf8e036daec67e968d1a"],["E:/qinhao/hexo/public/utils/js/flying-pages.min.js","c20e3f49966e71df80be9a6af59449dd"],["E:/qinhao/hexo/public/utils/js/highlight.min.js","a370252e88fa5c6611ab5005c7b87b96"],["E:/qinhao/hexo/public/utils/js/instant_page.js","1a3be845085b8d94a2997a3a472feb42"],["E:/qinhao/hexo/public/utils/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["E:/qinhao/hexo/public/utils/js/jquery.min.js","dc5e7f18c8d36ac1d3d4753a87c98d0a"],["E:/qinhao/hexo/public/utils/js/lazyload.min.js","0fcd5822c9e8af807a14d3985faf91c8"],["E:/qinhao/hexo/public/utils/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["E:/qinhao/hexo/public/utils/js/scrollreveal.min.js","f7d329c68b849d6685a7462c22f47ea2"],["E:/qinhao/hexo/public/utils/js/waves.min.js","9a5b3dfca09d9e3005dc697162d4bc65"],["E:/qinhao/hexo/public/utils/ttf/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["E:/qinhao/hexo/public/utils/ttf/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.ttf","ede4ff54ccb46fe67622dbcffeb90fdf"],["E:/qinhao/hexo/public/utils/webfonts/fa-brands-400.woff","07fa0741d97758debce36520d5a12d5b"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.ttf","04842b94683f70c18aeb76b5a27cd221"],["E:/qinhao/hexo/public/utils/webfonts/fa-regular-400.woff","f48a8829bec665258b9c85b23ecbf3c0"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.ttf","5f2f8485a00387b7a1d89e793555991f"],["E:/qinhao/hexo/public/utils/webfonts/fa-solid-900.woff","42d66a3eb75eac2b4fc0ee58e9846497"],["E:/qinhao/hexo/public/wireless_framework/index.html","528c8860e78289d5e9ee54e0cc9ec36e"],["E:/qinhao/hexo/public/wireless_radio/index.html","f4470bb5e15f8016fea3ffa9b2fd1a3a"],["E:/qinhao/hexo/public/wireless_word/index.html","a09f398ccdae180755d2f1c7ffdf92d0"],["E:/qinhao/hexo/public/xml/index.html","27b192976d66bf2be1cb573e1f5a9114"]];
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







