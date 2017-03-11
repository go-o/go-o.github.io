var count = 250;

		var square = new Path.Rectangle({
		point: [0,0],
		height: 5,
		width: 5,
		fillColor: 'red'
		});

		var symbol = new Symbol(square);

		for (var i=0; i<count; i++){
			var center = new Point.random() * view.size; //randomize a point to put it on
			var placed = symbol.place(center);
			placed.scale(i/count + 0.001);
			placed.data.vector = new Point({
				angle: Math.random() * 360,
				length: (i/count) * Math.random() / 5
			})
		}

		function onFrame(event){
			for (var i=0; i<count; i++){
				var item = project.activeLayer.children[i];
				var point = new Point({
					x: 0, 
					y: i * .025
				})
				item.position += point;
				keepInView(item);
			}
		}

		function keepInView(item){
			var position = item.position;
			var viewBounds = view.bounds;
			var itemBounds = item.bounds;
			if (position.isInside(viewBounds)){
				return;
			}
			if (position.y > viewBounds.height+5){
				position.y = 0;
			}
		}