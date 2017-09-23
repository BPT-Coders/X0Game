-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Сен 23 2017 г., 20:49
-- Версия сервера: 5.5.57-0+deb8u1
-- Версия PHP: 5.6.30-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `game`
--

-- --------------------------------------------------------

--
-- Структура таблицы `games`
--

CREATE TABLE IF NOT EXISTS `games` (
`id` int(11) NOT NULL,
  `symbol` varchar(1) CHARACTER SET latin1 NOT NULL,
  `h1` int(11) DEFAULT NULL,
  `h2` int(11) DEFAULT NULL,
  `h3` int(11) DEFAULT NULL,
  `h4` int(11) DEFAULT NULL,
  `h5` int(11) DEFAULT NULL,
  `h6` int(11) DEFAULT NULL,
  `h7` int(11) DEFAULT NULL,
  `h8` int(11) DEFAULT NULL,
  `h9` int(11) DEFAULT NULL,
  `weight` double DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `games`
--

INSERT INTO `games` (`id`, `symbol`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `h9`, `weight`) VALUES
(3, 'X', 11, NULL, 22, NULL, 33, NULL, NULL, NULL, NULL, NULL),
(4, 'X', 11, NULL, 22, NULL, 33, NULL, NULL, NULL, NULL, NULL),
(5, 'X', 12, NULL, 22, NULL, 32, NULL, NULL, NULL, NULL, NULL),
(7, '0', NULL, 22, NULL, 31, NULL, 13, NULL, NULL, NULL, NULL),
(8, '0', NULL, 22, NULL, 31, NULL, 13, NULL, NULL, NULL, NULL),
(9, '0', NULL, 22, NULL, 31, NULL, 13, NULL, NULL, NULL, NULL),
(10, '0', NULL, 22, NULL, 13, NULL, 31, NULL, NULL, NULL, NULL),
(11, 'X', 11, NULL, 21, NULL, 22, NULL, 33, NULL, NULL, NULL),
(12, 'X', 11, NULL, 21, NULL, 31, NULL, NULL, NULL, NULL, NULL),
(13, 'X', 11, NULL, 31, NULL, 21, NULL, NULL, NULL, NULL, NULL),
(14, 'X', 11, NULL, 13, NULL, 33, NULL, 23, NULL, NULL, NULL),
(15, '0', NULL, 22, NULL, 13, NULL, 31, NULL, NULL, NULL, NULL),
(16, '0', NULL, 12, NULL, 22, NULL, 32, NULL, NULL, NULL, NULL),
(17, 'X', 22, NULL, 33, NULL, 11, NULL, NULL, NULL, NULL, NULL),
(18, '0', NULL, 33, NULL, 31, NULL, 32, NULL, NULL, NULL, NULL),
(19, 'X', 22, NULL, 13, NULL, 32, NULL, 12, NULL, NULL, NULL),
(20, '0', NULL, 13, NULL, 11, NULL, 12, NULL, NULL, NULL, NULL),
(21, 'X', 22, NULL, 11, NULL, 33, NULL, NULL, NULL, NULL, NULL),
(22, 'X', 22, NULL, 11, NULL, 33, NULL, NULL, NULL, NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `games`
--
ALTER TABLE `games`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `games`
--
ALTER TABLE `games`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
