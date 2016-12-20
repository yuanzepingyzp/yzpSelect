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
###总结
######:after是CSS3新增的伪元素，必须设置content属性才有效，灵活使用可以绘制简单的图标，减少不必要的元素，例如三角形，CSS绘制三角形的原理是将元素宽高设为0，然后设置边框，将不需要显示的边框设为透明。在使用ng-show控制元素显示隐藏时会触发ng-mouseleave事件，在这种情况下应当考虑使用ngif替代。
