TW.IDE.Widgets.streaming_chart = function () {

	this.widgetIconUrl = function() {
		return  "'../Common/extensions/StreamingChartWidget/ui/streaming_chart/default_widget_icon.ide.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'Streaming Chart',
			'description': 'Chart widget for live streaming data.',
			'category': ['Common'],
			'properties': {
				'Streaming Chart Property': {
					'baseType': 'STRING',
					'defaultValue': 'Streaming Chart Property default value',
					'isBindingTarget': true
				}
			}
		}
	};

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case 'Style':
			case 'Streaming Chart Property':
				thisWidget.jqElement.find('.streaming-chart-property').text(value);
			case 'Alignment':
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return 	'<div class="widget-content widget-streaming_chart">' +
					'<span class="streaming-chart-property">' + this.getProperty('Streaming Chart Property') + '</span>' +
				'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()

		// get a reference to the value element
		valueElem = this.jqElement.find('.streaming-chart-property');
		// update that DOM element based on the property value that the user set
		// in the mashup builder
		valueElem.text(this.getProperty('Streaming Chart Property'));
	};

};