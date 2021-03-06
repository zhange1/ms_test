SET NAMES UTF8;
DROP DATABASE IF EXISTS msl;
CREATE DATABASE msl CHARSET=UTF8;
USE msl;
CREATE TABLE t_user(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(30),
upwd VARCHAR(32)
);
INSERT INTO t_user VALUES(null,'gjx1992','123456');
INSERT INTO t_user VALUES(null,'zyh1994','456789');
INSERT INTO t_user VALUES(null,'zyz1993','987654');
INSERT INTO t_user VALUES(null,'gsy1990','654321');
CREATE TABLE m_product(
id INT PRIMARY KEY AUTO_INCREMENT,
pname VARCHAR(64),
pic VARCHAR(40),
price DOUBLE(10,2),
uprice DOUBLE(10,2)
);
INSERT INTO m_product VALUES(null,'康师傅桶西红柿打卤面','images/img/fbm10.jpg',7.5,8.3);
INSERT INTO m_product VALUES(null,'张君雅小妹妹','images/img/zjy.jpg',7.9,8.5);
INSERT INTO m_product VALUES(null,'伊利百利包纯牛奶','images/img/ylcnn.jpg',2.0,2.2);
INSERT INTO m_product VALUES(null,'醒目苹果味汽水','images/img/xm.jpg',2.1,2.3);
INSERT INTO m_product VALUES(null,'小浣熊干脆面','images/img/xhx.jpg',1.0,1.1);
INSERT INTO m_product VALUES(null,'金锣王中王','images/img/wzw.jpg',19.5,21.5);
INSERT INTO m_product VALUES(null,'宾堡手撕面包','images/img/ssmb.jpg',6.2,6.5);
INSERT INTO m_product VALUES(null,'舒肤佳纯白清香型香皂','images/img/sfj.jpg',13.6,14.5);
INSERT INTO m_product VALUES(null,'清扬男士洗发露','images/img/qy.jpg',27.9,32.0);
INSERT INTO m_product VALUES(null,'心心相印卫生纸','images/img/qfwsz.jpg',15.9,16.5);
INSERT INTO m_product VALUES(null,'蒙牛酸牛奶','images/img/mn.jpg',19.8,21.5);
INSERT INTO m_product VALUES(null,'鲁花自然鲜红烧酱油','images/img/lhzrx.jpg',13.8,15.1);
INSERT INTO m_product VALUES(null,'加多宝凉茶','images/img/jdb.jpg',3.9,4.3);
INSERT INTO m_product VALUES(null,'欣和葱伴侣黄豆酱','images/img/hdj.jpg',18.9,20.1);
INSERT INTO m_product VALUES(null,'恒大冰泉','images/img/hdbq.jpg',4.0,4.4);
INSERT INTO m_product VALUES(null,'康师傅劲爽拉面','images/img/fbm20.jpg',7.5,8.3);
INSERT INTO m_product VALUES(null,'康师傅西红柿打卤面','images/img/fbm19.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅鲜虾鱼极面','images/img/fbm17.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅小鸡肚蘑菇面','images/img/fbm16.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅红烧排骨面','images/img/fbm15.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅劲爽拉面蓝','images/img/fbm13.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅珍品乐牛肉面','images/img/fbm14.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅卤香牛肉面','images/img/fbm12.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅酸辣牛肉面','images/img/fbm11.jpg',12.5,13.8);
INSERT INTO m_product VALUES(null,'康师傅桶鲜虾鱼极面','images/img/fbm9.jpg',5.5,6.1);
INSERT INTO m_product VALUES(null,'康师傅桶香菇炖鸡面','images/img/fbm8.jpg',5.5,6.2);
INSERT INTO m_product VALUES(null,'法兰地草莓1kg','images/img/cm.jpg',12.0,13.2);
INSERT INTO m_product VALUES(null,'百事可乐','images/img/bskl.jpg',5.5,6.2);
CREATE TABLE m_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  productid INT,
  count INT
);
CREATE TABLE m_product_left(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  pic VARCHAR(40),
  price DOUBLE(10,2)
);
INSERT INTO m_product_left VALUES(null,'伊利纯牛奶240ml','images/image/ylx.jpg',23.80);
INSERT INTO m_product_left VALUES(null,'恒大冰泉水500ml','images/image/hdbqx.jpg',5.0);
INSERT INTO m_product_left VALUES(null,'金罐加多宝250ml','images/image/jdbx.jpg',5.0);
INSERT INTO m_product_left VALUES(null,'清风卫生纸2kg','images/image/qfwszx.jpg',17.9);
INSERT INTO m_product_left VALUES(null,'百事可乐饮料500ml','images/image/bsklx.jpg',6.00);
INSERT INTO m_product_left VALUES(null,'清扬洗发露400ml','images/image/qyx.jpg',21.00);
INSERT INTO m_product_left VALUES(null,'舒肤佳清香型香皂','images/image/sfjx.jpg',4.00);
CREATE TABLE m_product_fdj(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(40)
);
INSERT INTO m_product_fdj VALUES
(null,"images/fdj/photo1.jpg"),
(null,"images/fdj/photo2.jpg"),
(null,"images/fdj/photo3.jpg"),
(null,"images/fdj/photo4.jpg"),
(null,"images/fdj/photo5.jpg"),
(null,"images/fdj/photo6.jpg"),
(null,"images/fdj/photo7.jpg"),
(null,"images/fdj/photo8.jpg");
CREATE TABLE f_product(
id INT PRIMARY KEY AUTO_INCREMENT,
pname VARCHAR(64),
pic VARCHAR(40),
price DOUBLE(10,2),
uprice DOUBLE(10,2)
);
INSERT INTO f_product VALUES
(null,'小台芒每份约500g','images/1f/11.jpg',8.3,7.5),
(null,'80烟台富士每份约2kg','images/1f/12.jpg',26.40,24.4),
(null,'金桔每份约1kg','images/1f/13.jpg',26.40,24.00),
(null,'小西红柿每份约1kg','images/1f/14.jpg',5.00,4.50),
(null,'泰国桂圆每份约500g','images/1f/15.jpg',14.20,12.90),
(null,'不知火丑桔每份约1kg','images/1f/16.jpg',18.7,17.00),
(null,'美食林甜桃每份约500g','images/1f/17.jpg',11.1,9.90),
(null,'美国红提每份约500g','images/1f/18.jpg',15.10,14.50),
(null,'美国美味苹果','images/1f/19.jpg',6.00,5.50),
(null,'乌江榨菜','images/1f/20.jpg',1.50,1.00),
(null,'高露洁牙膏','images/1f/21.jpg',4.00,3.50),
(null,'超能洗衣液','images/1f/22.jpg',22.50,20.00),
(null,'三全芝麻球','images/1f/23.jpg',15.0,14.5),
(null,'超级飞鹤奶粉','images/1f/24.jpg',100,95),
(null,'陈克明挂面','images/1f/25.jpg',2.5,2.0),
(null,'珍极白醋','images/1f/26.jpg',1.5,1.0),
(null,'王守义十三香','images/1f/27.jpg',5.0,4.5),
(null,'福临门长粒米','images/1f/28.jpg',55,50),
(null,'金鼎食用油','images/1f/29.jpg',35,34),
(null,'美味海鲜(虾)','images/1f/30.jpg',10,9),
(null,'美味坚果','images/1f/31.jpg',25,20),
(null,'美味开心果','images/1f/32.jpg',15,14.5),
(null,'美味白瓜子','images/1f/33.jpg',10,9),
(null,'美味香蕉片','images/1f/34.jpg',6,5.5),
(null,'美味薯条','images/1f/35.jpg',4,3.5),
(null,'粗粮玉米糁','images/1f/37.jpg',6,5.5),
(null,'美味菠萝','images/1f/38.jpg',5,4.5),
(null,'美味樱桃','images/1f/39.jpg',6,5),
(null,'儿童专用牙刷','images/1f/40.jpg',5,3.9),
(null,'强生护手霜','images/1f/41.jpg',12,11),
(null,'美味凤梨酥','images/1f/43.jpg',6,5),
(null,'太太乐鸡精','images/1f/44.jpg',5,3.9),
(null,'MANGOFRUT薯条','images/1f/45.jpg',7,6),
(null,'明治黑巧克力','images/1f/46.jpg',5,4),
(null,'鸡蛋饼面包','images/1f/47.jpg',10,9),
(null,'美味煮玉米','images/1f/48.jpg',4,3),
(null,'大块冰糖','images/1f/49.jpg',10,9),
(null,'双汇泠鲜肉','images/1f/50.jpg',15,13);
