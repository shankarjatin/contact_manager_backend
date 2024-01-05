const express = require("express")
const router = express.Router();
const {create_contact, get_contacts, get_contact , update_contact , delete_contact } = require("../controllers/contactController")

router.route("/").get(get_contacts)


router.route("/").post(create_contact)



router.route("/:id").get(get_contact)

router.route("/:id").put(update_contact)
router.route("/:id").delete(delete_contact)

module.exports = router ;