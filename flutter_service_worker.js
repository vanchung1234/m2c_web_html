'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "edf23a242612e8a0bd2e1312f466b001",
"version.json": "e1c59eda926079df69bb238e2073916f",
"index.html": "8cb4d7cd71009c5406f995c1d302f9ad",
"/": "8cb4d7cd71009c5406f995c1d302f9ad",
"main.dart.js": "704b85a1c730d20dc08b78121235cd8c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5f35d169db05eff476e90147dd772fb9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ic_logo.png": "4fce14d93eff0c11fc0d2c34936d650c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8198a8a808cef1c0b77716cdda079378",
"assets/AssetManifest.json": "1c793cc721c0d003573e51a129ef46bd",
"assets/NOTICES": "9425950c8b1c3d9a5a721a68205a61f5",
"assets/pdfjs/pdf.worker.min.js": "1b21a52673403baa815d90e3c9347714",
"assets/pdfjs/pdf.min.js": "e2f5e1f9451c8a897484861679857823",
"assets/FontManifest.json": "7a60528c196af997ec07e7a36fdc7054",
"assets/AssetManifest.bin.json": "8e4ebaf36d62714a45d79e8b516ea211",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/tikop_os/assets/images/svg/ic_finger_scroll_down.svg": "6830e3b9434babec2bf6d2fd74dedb76",
"assets/packages/tikop_os/assets/images/svg/ic_condition_error.svg": "33c96bcbe61d5d2dfc575435cfe2a766",
"assets/packages/tikop_os/assets/images/svg/ic_condition_success.svg": "47f1baa6ade6186e2553e46c67d7cf1d",
"assets/packages/tikop_os/assets/images/svg/ic_condition_check_success.svg": "0bc0758ee02ec71663d678bb535f8ade",
"assets/packages/tikop_os/assets/images/svg/ic_slide_arrow.svg": "d527c8d68f758bb9b4e7e0386c35335b",
"assets/packages/tikop_os/assets/images/svg/ic_condition_info.svg": "f6dbb3464a10d0ca26eac4c0b1e17dff",
"assets/packages/tikop_os/assets/images/svg/ic_copy.svg": "2d4ce5cbc8aee454291f5277e976a5b1",
"assets/packages/tikop_os/assets/images/svg/ic_check_white.svg": "a82f47e4f6f7e97b9894d0c0aa721057",
"assets/packages/tikop_os/assets/images/svg/ic_condition_warning.svg": "c42228131ca5b83e0843382010344889",
"assets/packages/tikop_os/assets/images/png/introduce9pay/3x/icon_9pay.png": "a4518ef629466b571cd3b64afaccef34",
"assets/packages/tikop_os/assets/images/png/introduce9pay/2x/icon_9pay.png": "062bf03376c97d552939884a354ed2ac",
"assets/packages/tikop_os/assets/images/png/introduce9pay/icon_9pay.png": "4cc63ca966cfef98d27ec8f342c22670",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/deeplink.png": "a4cae2db3cdf57f14c283c4d2edc2041",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/inprogress.png": "48c994fe3c48b33e91c05932c55487e4",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/contract_1.png": "f47a96dc9c28d0c1e26e33378b57d589",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/house.png": "0e419ef3be59d33f0c2140c12f096e20",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/contract_3.png": "ae790d75be71e6274413a0a6fe26d86b",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/contract_2.png": "c29fa40db04144236b828d31077201c9",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/cup.png": "e70b77d87c4b2f3065e0cf3a3f1adaa1",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/crane.png": "f30c3becf6d3104b47748e8c8d8e1071",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/web_saving.png": "d8ff7ef5034e780eb7c57df0753e9929",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/box.png": "6dffc986d1a9624006883e47509a8024",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/dog_1.png": "6ff37df74ae0ec121269fb2177d4b4b1",
"assets/packages/tikop_os/assets/images/png/empty_state/3x/dog_2.png": "eca17ab58a5f254431c314e60e962e71",
"assets/packages/tikop_os/assets/images/png/empty_state/deeplink.png": "31474d9fdf2a0067f7135101faf9fe13",
"assets/packages/tikop_os/assets/images/png/empty_state/inprogress.png": "fef316f964dbd349dfead28977130504",
"assets/packages/tikop_os/assets/images/png/empty_state/contract_1.png": "7537e5b8d579d7d7aaafeb3904d52eb9",
"assets/packages/tikop_os/assets/images/png/empty_state/house.png": "21d1db71ab0d69cc14ded71172c9ef06",
"assets/packages/tikop_os/assets/images/png/empty_state/contract_3.png": "ed1df08b7df95acf5b957b1af2f880f9",
"assets/packages/tikop_os/assets/images/png/empty_state/contract_2.png": "34478ec54c78268c5908be27806b04ee",
"assets/packages/tikop_os/assets/images/png/empty_state/cup.png": "3f2deabc32b6afe2e569f12c29aa1bb1",
"assets/packages/tikop_os/assets/images/png/empty_state/crane.png": "aeb0f2b884f80a6099075ed5cf9704f4",
"assets/packages/tikop_os/assets/images/png/empty_state/web_saving.png": "0df681fdc2a880a42511c9297a066f9d",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/deeplink.png": "7e8b0797eb9b3ddf36b73aeea48e3f49",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/inprogress.png": "2c4100b9aa910abcb69c297a29afbe34",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/contract_1.png": "c88c81605314459b37d825d3a0c46aea",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/house.png": "ff8d92048a124e7146ed9b36d21429bd",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/contract_3.png": "bf4ea5e2ca80a7a460f44b96f830ec63",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/contract_2.png": "95f4f80ef873d9a8202e78ef736a293d",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/cup.png": "b516523e9a7541f9087287748e09845d",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/crane.png": "a5a087f1be2cb04458400ad132fa60f1",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/web_saving.png": "cc5545c303f23e01d7eeda6c114f0b16",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/box.png": "1268c3031d5efce46de6451aae522082",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/dog_1.png": "016646d8391204a0f58199a468d72ada",
"assets/packages/tikop_os/assets/images/png/empty_state/2x/dog_2.png": "d6488da715f96f78a7a11d4fdd89aa19",
"assets/packages/tikop_os/assets/images/png/empty_state/box.png": "9742be23d2f06cbd0de86f4fa82a455b",
"assets/packages/tikop_os/assets/images/png/empty_state/dog_1.png": "b62541cc79c2ed8e31a6cba052230e32",
"assets/packages/tikop_os/assets/images/png/empty_state/dog_2.png": "3c0a18487725b9c4a6187629476c8009",
"assets/packages/tikop_os/assets/images/png/common/3x/ic_condition_none.png": "4b9abd9f2f494a65da5154413583d553",
"assets/packages/tikop_os/assets/images/png/common/3x/avatar_default_ic.png": "5cc1352df4c9b30235444f80ac161862",
"assets/packages/tikop_os/assets/images/png/common/3x/ic_condition_check_none.png": "81b2b30f00e20be0721836c955a494b3",
"assets/packages/tikop_os/assets/images/png/common/3x/ic_hotline.png": "40feb272d42564e783c8b4c89505ceee",
"assets/packages/tikop_os/assets/images/png/common/3x/ic_hotline2.png": "dfaaba271a8f287628c19b2a5f44a3f1",
"assets/packages/tikop_os/assets/images/png/common/ic_condition_none.png": "da64302e9cec24b2d2020ee158b7dd3f",
"assets/packages/tikop_os/assets/images/png/common/ic_internet_popup.png": "bcda4c2e4b78a973731ea51d7d2732f5",
"assets/packages/tikop_os/assets/images/png/common/avatar_default_ic.png": "e88dd0046ec72d37f0db2d9253d1af82",
"assets/packages/tikop_os/assets/images/png/common/ic_condition_check_none.png": "84c3b48e4d8a817c8bd66bed4cd7ce5a",
"assets/packages/tikop_os/assets/images/png/common/ic_hotline.png": "ac873635d2d264e8b6d4ff3a62074307",
"assets/packages/tikop_os/assets/images/png/common/2x/ic_condition_none.png": "e78eb84e8777250afed2b237550c020a",
"assets/packages/tikop_os/assets/images/png/common/2x/avatar_default_ic.png": "48bd100aa9ecd069f00658b8592c5988",
"assets/packages/tikop_os/assets/images/png/common/2x/ic_condition_check_none.png": "4ee677548e0cb6922ba1a57cd2b38794",
"assets/packages/tikop_os/assets/images/png/common/2x/ic_hotline.png": "15fcffadc4794827fae7875adb440bed",
"assets/packages/tikop_os/assets/images/png/common/2x/ic_hotline2.png": "9ff5d7e4ce6d141cd1581e684f8347b9",
"assets/packages/tikop_os/assets/images/png/common/ic_hotline2.png": "2df345e049b8e2dd633f2fe6fe732c37",
"assets/packages/tikop_os/assets/images/png/button/ic_detail.png": "41509282e1f3b859b3b552f960f7eac1",
"assets/packages/tikop_os/assets/images/png/button/3x/ic_detail.png": "1e04b81bdb85d137ab6eb365f4704276",
"assets/packages/tikop_os/assets/images/png/button/3x/ic_support_new.png": "e6d6a20fe3149d3774a028ffaed39bc4",
"assets/packages/tikop_os/assets/images/png/button/3x/ic_swap.png": "b57b2fc2f24fa108b10b60487a6047b6",
"assets/packages/tikop_os/assets/images/png/button/3x/ic_deposit.png": "6f176ff02b7f8011d3cc510ccbda1a73",
"assets/packages/tikop_os/assets/images/png/button/3x/ic_withdraw.png": "a7dcde6d9120cb0c5f1de1a015832d3b",
"assets/packages/tikop_os/assets/images/png/button/ic_support_new.png": "b891711d10d0d8f50bb13d52c13c2ee4",
"assets/packages/tikop_os/assets/images/png/button/ic_swap.png": "447ea941f8796040e201e769d789272e",
"assets/packages/tikop_os/assets/images/png/button/ic_deposit.png": "a2de52e93e8d38a659a68d7f31b5ef58",
"assets/packages/tikop_os/assets/images/png/button/2x/ic_detail.png": "de343105283bb3e2829e540ad435863d",
"assets/packages/tikop_os/assets/images/png/button/2x/ic_support_new.png": "5512634ff3b85c85a7c98d641f7214b1",
"assets/packages/tikop_os/assets/images/png/button/2x/ic_swap.png": "a509f4843c91f1ca031e507ff2d6985f",
"assets/packages/tikop_os/assets/images/png/button/2x/ic_deposit.png": "78d7d8d3f17ec67983370d03e9936d8a",
"assets/packages/tikop_os/assets/images/png/button/2x/ic_withdraw.png": "4da677368f78da88e4e433700930c18b",
"assets/packages/tikop_os/assets/images/png/button/ic_withdraw.png": "cb03ea56e1c66f564ecd7f0928c9670a",
"assets/packages/tikop_os/assets/images/png/borderQr/3x/ic_download.png": "0eddbf101f505fe76655d2ffa046c528",
"assets/packages/tikop_os/assets/images/png/borderQr/border_qr.png": "e1a05b66e55d07f906867b84469e553e",
"assets/packages/tikop_os/assets/images/png/borderQr/ic_download.png": "dffebd51ce1315bbc781be08e681a348",
"assets/packages/tikop_os/assets/images/png/borderQr/2x/ic_download.png": "ca479efb74024ab5641c978b99e843f8",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Thin.otf": "2364038399f3ceab5b8ee587d6cc906f",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Regular.otf": "7b42fd5a45850fb868cefbc67b7ca37d",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Black.otf": "d2ad7a47a95da88c011ac4e3bffba42b",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Bold.otf": "756a0adb5e8b99f196e875ee755cdde3",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Extrabold.otf": "e8d2b946713daed7a7c6b16a4af25052",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Medium.otf": "36f293afcbed247dda9e4262510645f4",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Light.otf": "4dfb860d1c975330d9202f9d08caebac",
"assets/packages/tikop_os/assets/font/iCielHelveticaNowText/iCielHelveticaNowText-Extralight.otf": "6d456504afb53176d8d112d44bb10d32",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3adc2d2dba86bd0b7f1bf589377acfac",
"assets/fonts/MaterialIcons-Regular.otf": "7c09e3848926e8050198d6e26e6fc701",
"assets/assets/images/svg/ic_history_small.svg": "fc64efbda8a91dd1440f75ff7a9610c2",
"assets/assets/images/svg/ic_phone.svg": "254e2bbc738624bb2c62bbf91481d86e",
"assets/assets/images/svg/ic_referral_saving.svg": "1fbd842c1ea15d85b911b69e3e68cba9",
"assets/assets/images/svg/ic_lock_smart_otp.svg": "6862dca832edf1ca74092269c3585589",
"assets/assets/images/svg/ic_filter.svg": "02ce84ff9d576864e9a711996b4a0be6",
"assets/assets/images/svg/ic_mail.svg": "943233e567cb5d6ca5d582b80d0eff66",
"assets/assets/images/svg/ic_copy_content.svg": "0e1cbb4a32dbf82095fee0f4d41b2d89",
"assets/assets/images/svg/eye_off.svg": "417d6823d93ce03c72b16c65f36d2b0c",
"assets/assets/images/svg/ic_shield_check.svg": "a25c12e0091752ea0568215d98cf96ec",
"assets/assets/images/svg/ic_interest_cell_v2.svg": "4fd001d6121e28ecf6099a581b7b3488",
"assets/assets/images/svg/ic_condition_none.svg": "a9eebb87d781d25983c356da53597cfa",
"assets/assets/images/svg/ic_my_storage_btb_inactive.svg": "1625e10e3be72e70e8bfa39d615e610c",
"assets/assets/images/svg/ic_feedback.svg": "8ab070f10b9ae5d992a8d337f22ff118",
"assets/assets/images/svg/ic_store_btb_inactive.svg": "e1329fbfd9e127c5374aec7e0a12a308",
"assets/assets/images/svg/ic_lock.svg": "f45829ccbda7716e333173d1ef8667c9",
"assets/assets/images/svg/ic_error.svg": "81cb0d486de5c321f77a2c01c7049580",
"assets/assets/images/svg/ic_invest_deposit.svg": "f3489746164c73ee39f6470a8a3330a6",
"assets/assets/images/svg/ic_hot_package.svg": "169a0b1245e1599c21b0e71e81ca3124",
"assets/assets/images/svg/ic_money_flower.svg": "c7a7b1390339de49491878d17f29d8ac",
"assets/assets/images/svg/ic_move_product.svg": "15684a9eeda936a7a35cb26affd1c937",
"assets/assets/images/svg/ic_plus.svg": "cfdc8a5f1a28c2f4bf57244df22d9780",
"assets/assets/images/svg/ic_contract_gift.svg": "764a46682bf2534801f444eb3cf9ca16",
"assets/assets/images/svg/ic_profile_inactive.svg": "19af5b9825b13f3f400865e9a1d0df97",
"assets/assets/images/svg/ic_arrow_down_to_line.svg": "7c482d31619e0749e58e49872f856b70",
"assets/assets/images/svg/ic_history.svg": "46e5c1c679da13790d2b79da0c178718",
"assets/assets/images/svg/ic_harvest_blue.svg": "9a45b4b107f7ecab41ef3df69d0bcc04",
"assets/assets/images/svg/ic_minus.svg": "d9a6dcbd7fd85dd969006fde00216976",
"assets/assets/images/svg/ic_error_circle.svg": "6755d672c78e786f50d1055d44c11db8",
"assets/assets/images/svg/ic_tick.svg": "f86370fd1adb0876da38a0798cf5d373",
"assets/assets/images/svg/ic_inprogress.svg": "d1373d56df3c02e765784d7a57e8ea91",
"assets/assets/images/svg/ic_checkbox.svg": "46f55c64dc447d3ddc59c652dad24f99",
"assets/assets/images/svg/ic_shield_question.svg": "16fea687d4a79d6c475d9b091d286e67",
"assets/assets/images/svg/ic_profile_camera.svg": "16d177ccb5cf73e3b92bb1af47e18836",
"assets/assets/images/svg/ic_faceid.svg": "d23b4d27899341cdd6716b8b11b3d038",
"assets/assets/images/svg/ic_paypal.svg": "b013541967f95316afe2636de4248465",
"assets/assets/images/svg/ic_check_circle.svg": "0ac80e97bd1a154da2ebb66a74fb8fcc",
"assets/assets/images/svg/ic_close.svg": "bbb9a8bc2dde47cc823db570d7a1ff73",
"assets/assets/images/svg/ic_user.svg": "e492c9910a945af152f444283a482857",
"assets/assets/images/svg/ic_renew2.svg": "b6418af31e5cda1fe8401518150dfb52",
"assets/assets/images/svg/ic_faceid_green.svg": "346f44f01cb0465698a3023ebcdc71fc",
"assets/assets/images/svg/ic_fab_info.svg": "db4ec3a950fa2fd5a4b8c5a27660ad2e",
"assets/assets/images/svg/ic_limit_time_package.svg": "e9c28245d6bcee8f0d46552e10428e1b",
"assets/assets/images/svg/ic_circlewavycheck.svg": "5d3f2e1ec0e656d6a4896747fad2ee58",
"assets/assets/images/svg/ic_reload.svg": "ec2d327b4a58757c380478e172d86c4c",
"assets/assets/images/svg/ic_profile_active.svg": "f0c7e503860af80ad300c8f0b17892cf",
"assets/assets/images/svg/ic_restore_signature_pad.svg": "637bf4af803c829a3f098e30cc81c022",
"assets/assets/images/svg/ic_pencil.svg": "193d16dfebd79aae7e2e2ecc17abb044",
"assets/assets/images/svg/ic_recommend_package.svg": "0400f53b012349970576bbacf4f3f026",
"assets/assets/images/svg/eye_on.svg": "3c05f110893a7184a8cc9932e8bec954",
"assets/assets/images/svg/ic_sb_info.svg": "c05f75f16f289b51aca50747bf3c3ab1",
"assets/assets/images/svg/ic_checkbox_circle_active.svg": "cc56770dbf55085a0187b400a0e69c1c",
"assets/assets/images/svg/ic_filter_active.svg": "5ae416d2185a30d9139e3f7a0646c0e5",
"assets/assets/images/svg/ic_home_active.svg": "b08284c6d22483036892181bd3168d59",
"assets/assets/images/svg/ic_harvest_btb_active.svg": "630f4d19989ece6d63dd862fdc16bdfd",
"assets/assets/images/svg/ic_info_error.svg": "4302d49be2b215e8ef83ae2f99cedc04",
"assets/assets/images/svg/ic_sb_success.svg": "07bd276bdbca48cdb6638d9f7b8a7e02",
"assets/assets/images/svg/ic_sb_error.svg": "477f217a9310e4b41bd2d71dc81ae5ec",
"assets/assets/images/svg/ic_copy_paypal.svg": "5b06dc5d3e663c227ed430650c47386c",
"assets/assets/images/svg/ic_harvest_yellow.svg": "ba8a86d310f3e0b49961f1af8856d951",
"assets/assets/images/svg/ic_next_green.svg": "769ea4eab8c516130dd47018090ba38e",
"assets/assets/images/svg/icon_contract.svg": "7fde51c14d5d2eceb5d5982b0443490a",
"assets/assets/images/svg/ic_info_note.svg": "c41a1c0175f3da9dcb96ceccee2f1fd2",
"assets/assets/images/svg/ic_return.svg": "06ac9c61086f730f43e7e53eb86446c3",
"assets/assets/images/svg/ic_qrcode.svg": "06137ea38f1a6b978eec8c2f9d315051",
"assets/assets/images/svg/ic_partner_wallet.svg": "2680cbe523e8678b26024ea5d2ecc340",
"assets/assets/images/svg/ic_interest_cell.svg": "a8c7accb9d8f5c51968cee6468ef2c9c",
"assets/assets/images/svg/ic_notification_active.svg": "c07666794bd8637be4878dd555bf0402",
"assets/assets/images/svg/ic_saving_success.svg": "ae66e4ebf983b11cab0af2a3d1e73bf0",
"assets/assets/images/svg/ic_close_circle.svg": "d0836383a4bd87a6e816b45325634bb1",
"assets/assets/images/svg/transaction_history/withdraw_ic.svg": "b6f9e6ae7a401f9d683044558c27546b",
"assets/assets/images/svg/transaction_history/recharge_ic.svg": "14797522b87c5b065ed34ddf75e3cd4e",
"assets/assets/images/svg/transaction_history/referral_ic.svg": "4fea97eb33ccf1cae581df9f559eff31",
"assets/assets/images/svg/transaction_history/renew_ic.svg": "6fc57aa60b301851ad04ac841fd4104e",
"assets/assets/images/svg/transaction_history/convert_ic.svg": "eb6fd5e3b0c0ddb4eabdb7d2c1dbe4db",
"assets/assets/images/svg/ic_store_btb_active.svg": "00318e97b891ec29f63181da5f166d0d",
"assets/assets/images/svg/ic_invest_detail.svg": "0fcb437540a0c1e8baa261e4bc5eb2c7",
"assets/assets/images/svg/ic_mission.svg": "9f8c81e8b129e860a4af8e9151a3ff1c",
"assets/assets/images/svg/ic_guidebook.svg": "6b226d9b761907eb9c8bb5fb2474d254",
"assets/assets/images/svg/ic_preview.svg": "7e3150d065abcdf962614bde91877731",
"assets/assets/images/svg/ic_check.svg": "774c2d4029c2a35409475ed1f65405e6",
"assets/assets/images/svg/ic_referral.svg": "4d6f35484a04a03841f976957b529375",
"assets/assets/images/svg/ic_menu.svg": "f3385d8f03d5e7f83a86ae156ff7e215",
"assets/assets/images/svg/ic_arrow_down.svg": "a609a772ee331db251209c39184bf87c",
"assets/assets/images/svg/ic_arrow_up_to_line.svg": "2e1bf41eec8c39c300c8d2161a7ab08e",
"assets/assets/images/svg/ic_seed.svg": "7a23d536392c7b7e0f4212c57f8a603f",
"assets/assets/images/svg/ic_email.svg": "bffc54b011439be87702dc02519d20ea",
"assets/assets/images/svg/ic_checkbox_circle.svg": "55ca17bdc80033a17fa18af9fb7bdb8f",
"assets/assets/images/svg/ic_home_inactive.svg": "ad042c24d089c16f8a7fad0db3248fe4",
"assets/assets/images/svg/ic_close_with_border.svg": "407c13a1ad7589933e5be13dfefc8b95",
"assets/assets/images/svg/ic_sb_warning.svg": "0aed9e3f7bf353a00b56a9ae428151fb",
"assets/assets/images/svg/ic_invest_withdraw_disable.svg": "7303c1cc4b52e826b382b6c89f8a863e",
"assets/assets/images/svg/ic_polygon.svg": "d7e4711bc12e62eae597b9c1c16e966a",
"assets/assets/images/svg/ic_m2c.svg": "c314bf9602a229eb27ea24043b0fb206",
"assets/assets/images/svg/ic_promo_pack.svg": "d7983421bab1912e3405d779d5a4f510",
"assets/assets/images/svg/ic_download.svg": "b77838cfacd1d03f1f6b3c251d4f62a8",
"assets/assets/images/svg/ic_quiz.svg": "8c8840a24875d58afece948ae09e67b6",
"assets/assets/images/svg/ic_invest_withdraw_disable_new.svg": "d3c8a1a6e4f72f3e9ff4fedad23728e4",
"assets/assets/images/svg/ic_saving_failed.svg": "e66dd540deec9076bb6097b38a77401c",
"assets/assets/images/svg/ic_fab_support.svg": "a427e6fa6b9574cb0b7fdb9bbda15e43",
"assets/assets/images/svg/fast_time.svg": "c53e98b207fe56fe13f6432af8dbe8f5",
"assets/assets/images/svg/ic_copy.svg": "2d4ce5cbc8aee454291f5277e976a5b1",
"assets/assets/images/svg/ic_note_tag.svg": "c82a269dd9c69422f7d9d58f3f4c37d5",
"assets/assets/images/svg/ic_renew.svg": "733ee6e4bb4356150a40afeb81bd72dd",
"assets/assets/images/svg/ic_referral_step.svg": "e4eb65981599023e66212fd676728eff",
"assets/assets/images/svg/ic_waiting_harvest.svg": "b8318d3a9aece354805661e41185b134",
"assets/assets/images/svg/ic_arrow_up.svg": "65d1c7d1b6d5445781090a42d82391ac",
"assets/assets/images/svg/ic_piggy_cents.svg": "cdb1dcd37b23ccf6d61ffba52710f9e0",
"assets/assets/images/svg/ic_invest_deposit_disable.svg": "a426c366cb17288bdf06cdfd44f32eb7",
"assets/assets/images/svg/ic_invest_withdraw.svg": "1c85ee0cdab023b6df05b7183cbd7c3b",
"assets/assets/images/svg/ic_next.svg": "8de08248f65c0cb48e7282effaea44cf",
"assets/assets/images/svg/ic_my_storage_btb_active.svg": "d83e9fbbef195b653e44db98cb644cbe",
"assets/assets/images/svg/ic_notification_inactive.svg": "e64029f0ce4074c914d6307ea18cd88e",
"assets/assets/images/svg/ic_info_success.svg": "f9acfac30316609b9a72a70e6daf0f87",
"assets/assets/images/svg/ic_invest_list.svg": "ca51804058b75a400e0357a98de31f04",
"assets/assets/images/svg/ic_top_package.svg": "1ab54dab7b89de1e8e2e1bc195a4a1c4",
"assets/assets/images/svg/ic_harvest_btb_inactive.svg": "97e9f616e2232230c39437158569896d",
"assets/assets/images/svg/ic_info_blue.svg": "27c0eb457891559deb026a593744e401",
"assets/assets/images/svg/ic_invest_pod.svg": "08c2370833c619327c35f1311ad5e933",
"assets/assets/images/img_intro_4.png": "44fdb48aac129012013eb690bea9f82c",
"assets/assets/images/m2c_signature_fail.png": "65d74be4a7b617f4f23eace55d47d2f5",
"assets/assets/images/img_umpl_intro.png": "39b7483ea5883401e592007d65ee0dc0",
"assets/assets/images/3x/m2c_splash.png": "7e2c3e8c3e34dddcb6065a57a8072312",
"assets/assets/images/3x/m2c_banner_header.png": "589ffb0a0c70d6980b4d6bdc1e4d6884",
"assets/assets/images/3x/bg_empty_v2.png": "20b49b6546d9a106daeb11b1620807f0",
"assets/assets/images/3x/ic_interest_cell.png": "9d1fb61a93e055c607e86c4b4c2d6d48",
"assets/assets/images/img_intro_2.png": "99af86555b488fe6bdc7f1b7d85d03f7",
"assets/assets/images/ic_messenger.png": "a5c56950a2cb73bf1b60caf5d6a9d0a6",
"assets/assets/images/img_intro_3.png": "63592e6b5b686165e0efd8cb82a5b3db",
"assets/assets/images/seed_info.png": "a8fcb9466d2181fd890861f5da86b4ee",
"assets/assets/images/ic_logo2.png": "4fce14d93eff0c11fc0d2c34936d650c",
"assets/assets/images/ic_zalo.png": "e638b5422f2c4a6584610d465654bb12",
"assets/assets/images/ic_feedback.png": "7fdf1fd3700042dee7097046191ac411",
"assets/assets/images/ic_phone.png": "84940986b281e9f89c66158e1e1c918f",
"assets/assets/images/m2c_splash.png": "ed77fc798c77502d55cdbdedc0e1d0fa",
"assets/assets/images/error.png": "67ad1af5699f73151c65d383afe6ff62",
"assets/assets/images/ic_bank.png": "0c542530429ff0929e8f1786e587811f",
"assets/assets/images/m2c_banner_header.png": "b6f06f8ddabd0ad4d8a013b06c9666f1",
"assets/assets/images/img_feedback.png": "9a07ace8d7425bcab6a8ee1b51e4d347",
"assets/assets/images/ic_contract_progress.png": "b0266cc94b62e789373f7232e6e43e6e",
"assets/assets/images/bg_empty_v2.png": "77c1bb9cead9923c040d502859c94d00",
"assets/assets/images/mission_over.png": "bdaef33d636994a195011de1e9a273f8",
"assets/assets/images/ic_guidebook.png": "31db34ac64738f7a3434b96b80e0765d",
"assets/assets/images/img_bg_intro_1.png": "828037778fcdfdc744fb6b4accea0815",
"assets/assets/images/2x/m2c_splash.png": "14c355089f318c4f96bd485bdf6b5688",
"assets/assets/images/2x/m2c_banner_header.png": "9930adee1018c5a3a6d657335586f498",
"assets/assets/images/2x/bg_empty_v2.png": "8e04acce02ea818c8919edb3cd18d449",
"assets/assets/images/2x/ic_interest_cell.png": "b382405c3c2571499fd9ec510bc20d28",
"assets/assets/images/ic_interest_cell.png": "1173c7fc52514eb61c04dca50cf63684",
"assets/assets/images/img_bg_intro_2.png": "474381044bde15994e43c0923aa551c2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
