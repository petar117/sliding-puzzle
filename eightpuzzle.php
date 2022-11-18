<html>
<head>

	<link rel="stylesheet" type="text/css" href="eightpuzzle.css">
	<link href="https://fonts.googleapis.com/css?family=Cinzel:700|Fredericka+the+Great" rel="stylesheet">
	<script language="JavaScript" src="eightpuzzle.js"></script> 
</head>


<body onLoad="on();">

	<h1>
		- The Sliding Puzzle -
		<br>
		<span id="welcome">Welcome: <?php echo $_POST['name']; ?></span>
		<br>
	</h1>
	

	<div id="stripe" >
		<button id="reset" onClick="themeNumbers();" >New Game</button>
		<span id="error" class="a"></span>

		<button id ="hardBtn" class="selected" onClick="themeNumbers();" >Number Puzzle</button>
		<button id ="easyBtn" onClick="themeImage();" >Image Puzzle</button>
	</div>

	
	<div id="container">
		
		<table>

			<tr>
				<td>
					<table id="one">
						<tr>
							<td><img src="" id="im1" onClick="imageClicked('im1',1)" /></td>
							<td><img src="" id="im2" onClick="imageClicked('im2',2)" /></td>
							<td><img src="" id="im3" onClick="imageClicked('im3',3)" /></td>
						</tr>
						<tr>
							<td><img src="" id="im4" onClick="imageClicked('im4',4)" /></td>
							<td><img src="" id="im5" onClick="imageClicked('im5',5)" /></td>
							<td><img src="" id="im6" onClick="imageClicked('im6',6)" /></td>
						</tr>
						<tr>
							<td><img src="" id="im7" onClick="imageClicked('im7',7)" /></td>
							<td><img src="" id="im8" onClick="imageClicked('im8',8)" /></td>
							<td><img src="" id="im9" onClick="imageClicked('im9',9)" /></td>
						</tr>
					</table>
					<p class="p1">PUZZLE VIEW</p>

				</td>
				<td>
					<table id="two">
						<tr>
							<td><img src="" id="iim1"  /></td>
							<td><img src="" id="iim2" /></td>
							<td><img src="" id="iim3" /></td>
						</tr>
						<tr>
							<td><img src="" id="iim4" /></td>
							<td><img src="" id="iim5" /></td>
							<td><img src="" id="iim6"  /></td>
						</tr>
						<tr>
							<td><img src="" id="iim7"  /></td>
							<td><img src="" id="iim8" /></td>
							<td><img src="" id="iim9" /></td>
						</tr>
					</table>
					<p class="p2">REAL VIEW</p>
				</td>
			</tr>
		</table>

	</div>
	
	<br/>
	
</body>
</html>
