import express from "express";
import ctrl from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";
const router = express.Router();

router
  .route("/api/contacts")
  .get(authCtrl.requireSignin, ctrl.list)
  .post(ctrl.create)
  .delete(authCtrl.requireSignin, ctrl.removeAll);

router
  .route("/api/contacts/:id")
  .get(authCtrl.requireSignin, ctrl.read)
  .put(authCtrl.requireSignin, ctrl.update)
  .delete(authCtrl.requireSignin, ctrl.remove);

router.param("id", ctrl.itemByID);
export default router;
