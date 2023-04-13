const express = require('express');

const {
    getSupplies,
    getPatientsByAge,
    getAllergies,
    getMedicationsByAge
} = require('../db/queries');

const {
    calculatePeanutAllergy,
    calculateDiabetic,
    calculateInsulin,
    calculatePeanutMedication,
    calculatePollenMedication,
    calculatePollenAllergy
} = require("../insights_engine/prediction_algorithms");

const router = express.Router();

router.get('/supply', (req, res) => {
    getSupplies()
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/patients/:minAge/:maxAge', (req, res) => {
    getPatientsByAge(req.params.minAge, req.params.maxAge)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/allergies', (req, res) => {
    getAllergies()
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/medications/:minAge/:maxAge', (req, res) => {
    getMedicationsByAge(req.params.minAge, req.params.maxAge)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/peanutPatientsPrediction', (req, res) => {

    calculatePeanutAllergy().then((data) => {

        res.json({message: data});

    }).catch((error) => {
        console.error(error);
        res.send(error)
    });

});

router.get('/diabeticPatientsPrediction', (req, res) => {

    calculateDiabetic().then((data) => {

        res.json({message: data});

    }).catch((error) => {
        console.error(error);
        res.send(error)
    });

});

router.get('/pollenPatientsPrediction', (req, res) => {

    calculatePollenAllergy().then((data) => {

        res.json({message: data});

    }).catch((error) => {
        console.error(error);
        res.send(error)
    });

});

router.get('/insulinPrediction', (req, res) => {

    calculateInsulin().then((data) => {

        res.json({message: data});

    }).catch((error) => {
        console.error(error);
        res.send(error)
    });

});

router.get('/terfenadinePeanut', (req, res) => {
    calculatePeanutMedication(141918)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/astemizolePeanut', (req, res) => {
    calculatePeanutMedication(197378)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/epinephrinePeanut', (req, res) => {
    calculatePeanutMedication(1660014)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/cetirizinePeanut', (req, res) => {
    calculatePeanutMedication(1014676)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/chlorpheniraminePeanut', (req, res) => {
    calculatePeanutMedication(477045)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/fexofenadinePeanut', (req, res) => {
    calculatePeanutMedication(997488)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/diphenhydraminePeanut', (req, res) => {
    calculatePeanutMedication(1049630)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/loratadinePeanut', (req, res) => {
    calculatePeanutMedication(665078)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/astemizolePollen', (req, res) => {
    calculatePollenMedication(197378)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/cetirizineTenPollen', (req, res) => {
    calculatePollenMedication(1014678)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/cetirizineFivePollen', (req, res) => {
    calculatePollenMedication(1014676)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/chlorpheniramineTwoPollen', (req, res) => {
    calculatePollenMedication(477045)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/chlorpheniramineFourPollen', (req, res) => {
    calculatePollenMedication(1363309)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/diphenhydraminePollen', (req, res) => {
    calculatePollenMedication(1049630)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/fexofenadineThirtyPollen', (req, res) => {
    calculatePollenMedication(997488)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/fexofenadineSixtyPollen', (req, res) => {
    calculatePollenMedication(997501)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/loratadineFivePollen', (req, res) => {
    calculatePollenMedication(665078)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/loratadineTenPollen', (req, res) => {
    calculatePollenMedication(311372)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/epinephrinePollen', (req, res) => {
    calculatePollenMedication(1660014)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/terfenadinePollen', (req, res) => {
    calculatePollenMedication(141918)
        .then((data) => {
            res.json({message: data});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

module.exports = router;
