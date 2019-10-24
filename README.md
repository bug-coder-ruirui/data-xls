# data-xls
Convert array data to excel table

# HOW TO USE
>import downloadExcel from 'data-xls';
>>use it as downloadExcel(data,map,name);

En
# About This Function
## about data
this is the list of data you need to export to excel. The format is mainly [{ key:value,key1:value1 },{ key:value,key1:value1 }] object[]
## about map
Map is the data dictionary of the data that needs to be used in data. Note that keys that do not exist in the map will not be exported.
{ key:name }   key as name
## about name 
name is fileName

Zh-CN
# 关于这个方法
## 参数 data
data是你需要导出为Excel的数据列表,格式主要为  [{key:value},{key:value}] object[]
## 参数 map
map是data中需要使用到的数据的数据字典,> 需要注意的是,map中不存在的key不会进行数据的导出
## 参数 name
name就只是文件名,你可以任意发挥