// This code remove the prefix and sufix of the product price when they select to pay in full, keeping only the relevant price.
// This is only running on the The Educator Elevation page.
// This code is running using the plugin code snippets on Wordpress.
// Made by Lucas Oliveira - Dashboard Lim
document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodDropdown = document.querySelector("#payment-method");
    const productTitle = document.querySelector("#et_builder_outer_content > div > div > div > div.et_pb_row.et_pb_row_1.et_pb_equal_columns.et_pb_gutters2 > div.et_pb_column.et_pb_column_1_2.et_pb_column_2.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_wc_title.et_pb_wc_title_0.et_pb_bg_layout_light > div > h1").textContent;


    if (paymentMethodDropdown && productTitle == 'The Educator Elevation') {
        paymentMethodDropdown.addEventListener('change', function() {
            let selectedOption = paymentMethodDropdown.value;
            
            // Monitorar o value do dropdown e mostrar no console de acordo com a seleção
            if (selectedOption === 'Pay in full') {
                setTimeout(function() {
                    console.log('£1,999.00');
                    let price = document.querySelector(".subscription-details > .woocommerce-Price-amount.amount").textContent;
                    if (price == '£1,999.00') {
                        document.querySelector("#et_builder_outer_content > div > div > div > div.et_pb_row.et_pb_row_1.et_pb_equal_columns.et_pb_gutters2 > div.et_pb_column.et_pb_column_1_2.et_pb_column_2.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_wc_add_to_cart.et_pb_wc_add_to_cart_0.et_pb_hide_input_quantity.et_pb_hide_stock.et_pb_fields_label_position_default.et_pb_bg_layout_.et_pb_text_align_left > div > form > div > div.woocommerce-variation.single_variation > div.woocommerce-variation-price > span").textContent = "£1,999.00";
                    }
                    }, 5); // Delay de 0.01 segundos
            }
        });
    }
});
