# yzpSelect
基于angularjs的select组件
##EXAMPLE
###HTML CODE
```html
<!DOCTYPE html>
<html>
	<head>
		<title>yzpSelect</title>
		<meta charset=utf-8>
		<link rel="stylesheet" type="text/css" href="css/yzpSelect.css">
	</head>
	<body ng-app="yzpSelect">
		<div style="width:100px;">
			<yzp-select select-name="性别" select-list=[11111,22222,33333,444444,55555,66666,77777] yzp-model="mymodel" placeholder="请下拉选择"></yzp-select>
		</div>
		<script type="text/javascript" src="js/angular.js"></script>
		<script type="text/javascript" src="js/yzpSelect.js"></script>
	</body>
</html>
```
###API
```html
  <yzp-select select-name="性别" /*string define the name of the selector*/
              select-list=[11111,22222,33333,444444,55555,66666,77777] /*array define the list of the selector*/
              yzp-model="mymodel" /*string bind model for selector*/
              placeholder="请下拉选择"/*string define the placeholder of the selector*/
              >
 </yzp-select>
```
