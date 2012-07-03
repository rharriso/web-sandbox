//	HYPE.documents["Winter Is coming"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Winter%20Is%20coming_Resources";
	var documentName = "Winter Is coming";

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
		}
		window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

		var headElement = document.getElementsByTagName('head')[0];
		var scriptElement = document.createElement('script');
		scriptElement.type= 'text/javascript';
		scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
		headElement.appendChild(scriptElement);
		return;
	}
	
	var attributeTransformerMapping = {"BoxShadowBlurRadius":"PixelValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","PaddingLeft":"PixelValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","BorderColorLeft":"ColorValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderColorRight":"ColorValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowYOffset":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"initialValues":{"6F62AD1F-D865-4A38-9179-223AD478E589-487-0000057948DDBA8B":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"467px","Display":"inline","BackgroundImage":"ice.png","ReflectionOffset":"0px","RotationAxis":"1","Height":"404px","Overflow":"visible","ReflectionDepth":"0.331683","Top":"64px","Width":"89px","ZIndex":"3","BackgroundSize":"100% 100%","TagName":"div","Rotate":"0deg"},"665C4EBB-E07C-4D3E-9893-42158695870E-487-000003DA88907BBF":{"FontFamily":"Zapfino,Script,Cursive","FontWeight":"bold","TextColor":"#000000","PaddingRight":"8px","FontSize":"72px","WordSpacing":"6px","Opacity":"0.000000","Display":"inline","LetterSpacing":"0px","WordWrap":"break-word","Top":"421px","PaddingBottom":"8px","TextShadowYOffset":"0px","WhiteSpaceCollapsing":"preserve","Position":"absolute","Height":"276px","Left":"42px","TextShadowBlurRadius":"0px","TextAlign":"center","InnerHTML":"Winter Is Coming","PaddingLeft":"8px","Width":"924px","TextShadowColor":"#FFFFFF","ZIndex":"2","PaddingTop":"8px","TextShadowXOffset":"0px","Overflow":"visible","TagName":"div"},"C57A9409-C8B2-47E9-8F4D-335D78A3EF51-487-000003C3D185A244":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"328px","Display":"inline","BackgroundImage":"house stark sigil.png","Height":"400px","Overflow":"visible","Width":"367.315px","Top":"16px","FontSize":"15px","ZIndex":"1","BackgroundSize":"100% 100%","TagName":"div","InnerHTML":""}},"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"0deg","isRelative":true,"endValue":"180deg","identifier":"Rotate","duration":1,"timingFunction":"linear","type":0,"oid":"6F62AD1F-D865-4A38-9179-223AD478E589-487-0000057948DDBA8B","startTime":0},{"startValue":"0px","isRelative":true,"endValue":"25px","identifier":"TextShadowBlurRadius","duration":2,"timingFunction":"easeout","type":0,"oid":"665C4EBB-E07C-4D3E-9893-42158695870E-487-000003DA88907BBF","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":2,"timingFunction":"easeout","type":0,"oid":"665C4EBB-E07C-4D3E-9893-42158695870E-487-000003DA88907BBF","startTime":0},{"startValue":"180deg","isRelative":false,"endValue":"360deg","identifier":"Rotate","duration":1,"timingFunction":"linear","type":0,"oid":"6F62AD1F-D865-4A38-9179-223AD478E589-487-0000057948DDBA8B","startTime":1},{"startValue":"25px","isRelative":false,"endValue":"5px","identifier":"TextShadowBlurRadius","duration":2,"timingFunction":"easein","type":0,"oid":"665C4EBB-E07C-4D3E-9893-42158695870E-487-000003DA88907BBF","startTime":2},{"startValue":"360deg","isRelative":false,"endValue":"180deg","identifier":"Rotate","duration":1,"timingFunction":"easeinout","type":0,"oid":"6F62AD1F-D865-4A38-9179-223AD478E589-487-0000057948DDBA8B","startTime":2},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":2,"timingFunction":"easein","type":0,"oid":"665C4EBB-E07C-4D3E-9893-42158695870E-487-000003DA88907BBF","startTime":2},{"startValue":"180deg","isRelative":false,"endValue":"360deg","identifier":"Rotate","duration":1,"timingFunction":"linear","type":0,"oid":"6F62AD1F-D865-4A38-9179-223AD478E589-487-0000057948DDBA8B","startTime":3}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":4}},"id":"7FE045BE-51F8-4A2B-9117-700B865F4740-266-0000021A779B43AC","sceneIndex":0,"perspective":"600px","oid":"7FE045BE-51F8-4A2B-9117-700B865F4740-266-0000021A779B43AC","onSceneAnimationCompleteAction":{"type":1,"transition":1,"sceneSymbol":3},"name":"Untitled Scene","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "winteriscoming_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 1;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

