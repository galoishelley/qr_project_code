-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-08-10 00:13:55
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qr_yf`
--

-- --------------------------------------------------------

--
-- 表的结构 `qr_func`
--

CREATE TABLE `qr_func` (
  `FUNC_ID` int(11) NOT NULL COMMENT 'ID-自增列',
  `FUNC_CODE` varchar(50) NOT NULL COMMENT '权限编码',
  `FUNC_NAME` varchar(50) NOT NULL COMMENT '权限名称',
  `NOTE` varchar(200) NOT NULL COMMENT '备注（可选）',
  `CREATE_USER` varchar(50) NOT NULL COMMENT '创建用户',
  `CREATE_DATE` datetime NOT NULL COMMENT '创建时间',
  `UPDATE_USER` varchar(50) NOT NULL COMMENT '更新用户',
  `UPDATE_DATE` datetime NOT NULL COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `qr_func`
--

INSERT INTO `qr_func` (`FUNC_ID`, `FUNC_CODE`, `FUNC_NAME`, `NOTE`, `CREATE_USER`, `CREATE_DATE`, `UPDATE_USER`, `UPDATE_DATE`) VALUES
(85, '0012', '管理员2', '333', 'shelleymyl', '2016-08-04 11:37:24', 'shelleymyl', '2016-08-09 20:39:39'),
(88, '0014', '管理员4', '4', 'shelleymyl', '2016-08-04 11:37:54', 'shelleymyl', '2016-08-04 11:37:54');

-- --------------------------------------------------------

--
-- 表的结构 `qr_log`
--

CREATE TABLE `qr_log` (
  `LOG_ID` int(11) NOT NULL,
  `OPR_CONTENT` varchar(100) NOT NULL,
  `CREATE_DATE` datetime NOT NULL,
  `CREATE_USER` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `qr_log`
--

INSERT INTO `qr_log` (`LOG_ID`, `OPR_CONTENT`, `CREATE_DATE`, `CREATE_USER`) VALUES
(60, '登录系统', '2016-08-09 14:36:25', 'shelleymyl'),
(61, '登录系统', '2016-08-09 14:36:36', 'yinx'),
(62, '登录系统', '2016-08-09 14:38:56', 'shelleymyl'),
(63, '登录系统', '2016-08-09 14:46:10', 'shelleymyl'),
(64, '增加权限', '2016-08-09 14:47:03', 'shelleymyl'),
(65, '增加权限:{eee222eee22}', '2016-08-09 14:48:12', 'shelleymyl'),
(66, '增加权限:{777777777:7776}', '2016-08-09 14:48:37', 'shelleymyl'),
(67, '增加权限:{呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿:3333333333333 }', '2016-08-09 15:09:05', 'shelleymyl'),
(68, '增加权限:{弟弟顶顶顶顶顶:的顶顶顶顶顶顶顶顶顶顶}', '2016-08-09 15:10:07', 'shelleymyl'),
(69, '登录系统', '2016-08-09 16:09:43', 'shelleymyl'),
(70, '登录系统', '2016-08-09 18:03:27', 'shelleymyl'),
(71, '增加权限:{333333333:33333333}', '2016-08-09 18:10:31', 'shelleymyl'),
(72, '登录系统', '2016-08-09 20:36:32', 'shelleymyl'),
(73, '增加权限:{44:44}', '2016-08-09 20:53:19', 'shelleymyl'),
(74, '增加权限:{3333333333:333333333333333}', '2016-08-09 20:54:57', 'shelleymyl'),
(75, '增加权限:{yinx123:测试}', '2016-08-09 20:58:37', 'shelleymyl'),
(76, '增加权限:{嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯:的顶顶顶顶顶顶顶顶顶顶}', '2016-08-09 21:00:42', 'shelleymyl'),
(77, '增加权限:{恩恩2:嗯嗯2}', '2016-08-09 21:04:33', 'shelleymyl'),
(78, '增加权限:{呃呃呃:呃呃呃}', '2016-08-09 21:06:10', 'shelleymyl'),
(79, '增加权限:{你好吗:我很好}', '2016-08-09 21:07:09', 'shelleymyl'),
(80, '增加权限:{说得对:对对对}', '2016-08-09 21:10:18', 'shelleymyl'),
(81, '增加权限:{呃呃呃:额鹅鹅鹅}', '2016-08-09 21:10:52', 'shelleymyl'),
(82, '增加权限:{呃呃呃呃呃呃:额鹅鹅鹅嗯嗯}', '2016-08-09 21:11:03', 'shelleymyl'),
(83, '增加权限:{鹅鹅鹅饿鹅鹅鹅饿:嗯嗯嗯嗯嗯嗯呃嗯嗯嗯}', '2016-08-09 21:12:17', 'shelleymyl'),
(84, '增加权限:{柔柔弱弱:日日日}', '2016-08-09 21:16:12', 'shelleymyl'),
(85, '增加权限:{333333332:333333333333332}', '2016-08-09 21:16:27', 'shelleymyl'),
(86, '增加权限:{121222:121212}', '2016-08-09 21:18:26', 'shelleymyl'),
(87, '增加权限:{额鹅鹅鹅2:2222}', '2016-08-09 21:20:31', 'shelleymyl'),
(88, '增加权限:{33333333333333:33333333333333}', '2016-08-09 21:21:03', 'shelleymyl'),
(89, '增加权限:{44444444444444444444:44545454545454545454545}', '2016-08-09 21:21:17', 'shelleymyl'),
(90, '增加权限:{测试中:测试中}', '2016-08-09 21:21:34', 'shelleymyl'),
(91, '增加权限:{hhhh:hhhhh}', '2016-08-09 21:23:37', 'shelleymyl'),
(92, '增加权限:{445:4}', '2016-08-09 21:37:12', 'shelleymyl'),
(93, '登录系统', '2016-08-09 21:40:14', 'shelleymyl'),
(94, '登录系统', '2016-08-09 21:41:58', 'shelleymyl'),
(95, '增加权限:{ee:ee}', '2016-08-09 21:45:22', 'shelleymyl'),
(96, '增加权限:{r:r}', '2016-08-09 21:56:09', 'shelleymyl'),
(97, '增加权限:{5:5}', '2016-08-09 21:57:16', 'shelleymyl'),
(98, '增加权限:{3:3}', '2016-08-09 21:58:10', 'shelleymyl'),
(99, '增加权限:{e:e}', '2016-08-09 22:00:58', 'shelleymyl'),
(100, '增加权限:{7:7}', '2016-08-09 22:01:19', 'shelleymyl'),
(101, '增加权限:{3:3}', '2016-08-09 22:04:21', 'shelleymyl'),
(102, '增加权限:{e:e}', '2016-08-09 22:05:27', 'shelleymyl'),
(103, '增加权限:{r:r}', '2016-08-09 22:07:38', 'shelleymyl'),
(104, '登录系统', '2016-08-09 23:54:03', 'shelleymyl'),
(105, '登录系统', '2016-08-09 23:55:39', 'shelleymyl');

-- --------------------------------------------------------

--
-- 表的结构 `qr_role`
--

CREATE TABLE `qr_role` (
  `ROLE_ID` int(11) NOT NULL,
  `ROLE_NAME` varchar(50) NOT NULL,
  `FUNC_ID` int(50) NOT NULL,
  `NOTE` varchar(200) DEFAULT NULL,
  `CREATE_USER` varchar(50) NOT NULL,
  `CREATE_DATE` datetime NOT NULL,
  `UPDATE_USER` varchar(50) NOT NULL,
  `UPDATE_DATE` datetime NOT NULL,
  `ROLE_CODE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `qr_role`
--

INSERT INTO `qr_role` (`ROLE_ID`, `ROLE_NAME`, `FUNC_ID`, `NOTE`, `CREATE_USER`, `CREATE_DATE`, `UPDATE_USER`, `UPDATE_DATE`, `ROLE_CODE`) VALUES
(1, '测试', 85, NULL, 'admin', '2016-08-08 00:00:00', 'admin', '2016-08-23 00:00:00', 'CS_01'),
(2, '角色1', 88, NULL, 'admin', '2016-08-02 00:00:00', 'admin', '2016-08-17 00:00:00', 'Roel_4'),
(3, '测试', 88, NULL, 'admin', '2016-08-08 00:00:00', 'admin', '2016-08-08 00:00:00', 'CS_01');

-- --------------------------------------------------------

--
-- 表的结构 `qr_user`
--

CREATE TABLE `qr_user` (
  `USER_ID` int(11) NOT NULL,
  `LOGIN_NAME` varchar(50) NOT NULL,
  `LOGIN_PWD` varchar(50) NOT NULL,
  `CONFIRM_PWD` varchar(50) NOT NULL,
  `USER_NAME` varchar(50) NOT NULL,
  `USER_GENDER` varchar(50) NOT NULL,
  `USER_TEL` varchar(50) NOT NULL,
  `ROLE_ID` int(11) NOT NULL,
  `USER_ADDR` varchar(200) DEFAULT NULL,
  `NOTE` varchar(200) DEFAULT NULL,
  `CONTAIN_USER` varchar(50) NOT NULL,
  `CREATE_USER` varchar(50) NOT NULL,
  `CREATE_DATE` datetime NOT NULL,
  `UPDATE_USER` varchar(50) NOT NULL,
  `UPDATE_DATE` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `qr_user`
--

INSERT INTO `qr_user` (`USER_ID`, `LOGIN_NAME`, `LOGIN_PWD`, `CONFIRM_PWD`, `USER_NAME`, `USER_GENDER`, `USER_TEL`, `ROLE_ID`, `USER_ADDR`, `NOTE`, `CONTAIN_USER`, `CREATE_USER`, `CREATE_DATE`, `UPDATE_USER`, `UPDATE_DATE`) VALUES
(1, 'miaoyl', 'myl1102', 'myl1102', '苗亚柳', '女', '13500898234', 1, '长春市碧水云天34#3门806', NULL, '2', 'admin', '2016-05-04 09:22:25', 'admin', '2016-05-04 08:24:25'),
(2, 'yinx', 'yinx123', 'yinx123', '尹鑫', '男', '18986420139', 1, NULL, NULL, '2', 'admin', '2016-05-04 00:00:00', 'admin', '2016-05-04 00:00:00'),
(4, '恩恩', '额', '', '王鹏', 'e', '额', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(6, 'ruozhou', '123', '', '若周', '男', '13500898234', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(7, '对对对', 'd', '', 'dd', '男', 'dd', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(8, '对对对', 'd', '', 'dd', '男', 'dd', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(9, '对对对', 'd', '', 'dd', '男', 'dd', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(10, 'nihao', '123', '', '你好', '男', '13500898234', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(11, 'shelleymyl', 'myl1102', '', 'miaoyl', '女', '13500898234', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(12, '你好', 'myl', '', '你好', '女', '哈哈哈哈哈', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(13, '系统管理员', 'admin', '', 'admin', '男', '1358814124', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(14, 'd', 'd', '', 'ddd', '男', 'd', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(15, 'eee', 'ee', '', 'ee', '男', 'e', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(16, '444', '44', '', '44', '男', '44', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(17, 'nihao', 'hahahha', '', 'jeieii', '男', 'dddfde', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(18, '111', '111', '', '11', '男', '111', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
(19, 'test', 'test', '', 'test', '男', 'test', 1, NULL, NULL, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `qr_func`
--
ALTER TABLE `qr_func`
  ADD PRIMARY KEY (`FUNC_ID`);

--
-- Indexes for table `qr_log`
--
ALTER TABLE `qr_log`
  ADD PRIMARY KEY (`LOG_ID`);

--
-- Indexes for table `qr_role`
--
ALTER TABLE `qr_role`
  ADD PRIMARY KEY (`ROLE_ID`),
  ADD KEY `FK_ID` (`FUNC_ID`);

--
-- Indexes for table `qr_user`
--
ALTER TABLE `qr_user`
  ADD PRIMARY KEY (`USER_ID`),
  ADD KEY `FK_ID` (`ROLE_ID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `qr_func`
--
ALTER TABLE `qr_func`
  MODIFY `FUNC_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID-自增列', AUTO_INCREMENT=130;
--
-- 使用表AUTO_INCREMENT `qr_log`
--
ALTER TABLE `qr_log`
  MODIFY `LOG_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;
--
-- 使用表AUTO_INCREMENT `qr_role`
--
ALTER TABLE `qr_role`
  MODIFY `ROLE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `qr_user`
--
ALTER TABLE `qr_user`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- 限制导出的表
--

--
-- 限制表 `qr_role`
--
ALTER TABLE `qr_role`
  ADD CONSTRAINT `FK_ID` FOREIGN KEY (`FUNC_ID`) REFERENCES `qr_func` (`FUNC_ID`);

--
-- 限制表 `qr_user`
--
ALTER TABLE `qr_user`
  ADD CONSTRAINT `FK_user_ROLE_ID` FOREIGN KEY (`ROLE_ID`) REFERENCES `qr_role` (`ROLE_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
