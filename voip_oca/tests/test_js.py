# Copyright 2025 Dixmit
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

from odoo.tests.common import HttpCase, tagged


@tagged("post_install", "-at_install")
class TestJavascript(HttpCase):
    def test_javascript(self):
        self.browser_js("/web/tests?module=voip_oca", "", login="admin", timeout=1800)
