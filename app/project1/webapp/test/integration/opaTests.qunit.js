sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/CategoriesList',
		'project1/test/integration/pages/CategoriesObjectPage',
		'project1/test/integration/pages/CoursesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CategoriesList, CategoriesObjectPage, CoursesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCategoriesList: CategoriesList,
					onTheCategoriesObjectPage: CategoriesObjectPage,
					onTheCoursesObjectPage: CoursesObjectPage
                }
            },
            opaJourney.run
        );
    }
);