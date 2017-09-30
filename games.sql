-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Сен 30 2017 г., 16:10
-- Версия сервера: 5.5.52-0+deb8u1
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
  `history` text NOT NULL,
  `totalCount` int(11) NOT NULL,
  `winX` int(11) NOT NULL,
  `win0` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `games`
--

INSERT INTO `games` (`id`, `history`, `totalCount`, `winX`, `win0`) VALUES
(1, 'a:5:{i:0;s:35:"{"number":1,"player":"X","id":"22"}";i:1;s:35:"{"number":2,"player":"0","id":"11"}";i:2;s:35:"{"number":3,"player":"X","id":"13"}";i:3;s:35:"{"number":4,"player":"0","id":"12"}";i:4;s:35:"{"number":5,"player":"X","id":"31"}";}', 1, 1, 0),
(2, 'a:6:{i:0;s:35:"{"number":1,"player":"X","id":"22"}";i:1;s:35:"{"number":2,"player":"0","id":"13"}";i:2;s:35:"{"number":3,"player":"X","id":"11"}";i:3;s:35:"{"number":4,"player":"0","id":"33"}";i:4;s:35:"{"number":5,"player":"X","id":"12"}";i:5;s:35:"{"number":6,"player":"0","id":"23"}";}', 1, 0, 1),
(3, 'a:7:{i:0;s:35:"{"number":1,"player":"X","id":"22"}";i:1;s:35:"{"number":2,"player":"0","id":"13"}";i:2;s:35:"{"number":3,"player":"X","id":"11"}";i:3;s:35:"{"number":4,"player":"0","id":"33"}";i:4;s:35:"{"number":5,"player":"X","id":"23"}";i:5;s:35:"{"number":6,"player":"0","id":"12"}";i:6;s:35:"{"number":7,"player":"X","id":"21"}";}', 3, 3, 0),
(4, 'a:7:{i:0;s:35:"{"number":1,"player":"X","id":"22"}";i:1;s:35:"{"number":2,"player":"0","id":"13"}";i:2;s:35:"{"number":3,"player":"X","id":"11"}";i:3;s:35:"{"number":4,"player":"0","id":"33"}";i:4;s:35:"{"number":5,"player":"X","id":"23"}";i:5;s:35:"{"number":6,"player":"0","id":"31"}";i:6;s:35:"{"number":7,"player":"X","id":"21"}";}', 1, 1, 0);

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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
