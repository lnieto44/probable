export const showData = async (list, shop, populares) => {
    const products = await list;



    products.forEach(product => {
        const {id, name, descrption, imgproducto, categoria, price, tallas} = product
        
        const formatoCOP = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        })

            shop.innerHTML +=
            `
           
        <section class="diseno_control_deslizante" aria-label="Coleccion de ropa principal">
            <div class="caja">
            <div class="imagen_caja sombra_caja">
              <a href="#slide-1"><img src="./imagenes/pequeno-hombre-01.png" width="80" height="120"/>
            </a>
            </div>
            <div class="imagen_caja">
              <a href="#slide-2">
                <img
                  src="./imagenes/pequeno-hombre-02.png" width="80" height="120"/>
            </a>
            </div>
            <div class="imagen_caja">
              <a href="#slide-3">
                <img
                  src="./imagenes/ropa-pequena-01.png" width="80" height="120"/>
              </a>
            </div>
            <div class="imagen_caja">
              <a href="#slide-4">
                <img
                  src="./imagenes/ropa-pequena-02.png" width="80" height="120"/>
              </a>
            </div>
          </div>
          <div class="control_deslizante">
            <div class="contenido_control_deslizante">
              <div id="slide-1" class="control_deslizante_item">
                <img
                  src="./imagenes/imagen-principal-01.png" width="616" height="700"/>
              </div>
              <div id="slide-2" class="control_deslizante_item">
                <img
                  src="./imagenes/imagen-principal-02.png" width="616" height="700"/>
              </div>
              <div id="slide-3" class="control_deslizante_item">
                <img
                  src="./imagenes/imagen-principal-03.png" width="616" height="700"/>
              </div>
              <div id="slide-4" class="control_deslizante_item">
                <img
                  src="./imagenes/imagen-principal-04.png" width="616" height="700"/>
              </div>
            </div>
            <div class="control_deslizante_puntos">
              <a class="puntos activo" href="#slide-1"></a>
              <a class="puntos" href="#slide-2"></a>
              <a class="puntos" href="#slide-3"></a>
              <a class="puntos" href="#slide-4"></a>
            </div>
          </div>
          </section>
          <section
            class="descripcion-diseno"
            aria-label="Descripcion de ropa principal"
          >
            <div class="descripcion">
              <div class="producto">
                <h2 class="nombre_producto">Crown Sweatshirt</h2>
                <p class="precio_producto">$80.00</p>
              </div>
              <div class="tamano">
                <p class="titulo_tamano">Size</p>
                <div class="tipos_tamanos">
                  <p class="item_tamano seleccionar_caja">S</p>
                  <p class="tipos_tamanos">M</p>
                  <p class="tipos_tamanos">L</p>
                  <p class="tipos_tamanos">XL</p>
                  <p class="tipos_tamanos">XXL</p>
                </div>
              </div>
              <div class="Botones_tienda">
                <a class="boton-compra primer-boton" href="#">add to cart</a>
                <a id="boton-compra" href="#" class="boton-compra segundo-boton"
                  >buy it now</a
                >
              </div>
              <p class="datos_productos">
                Let them know you’re 90s royalty with this official The Fresh
                Prince crown pattern sweater. Throw vintage vibes that Uncle Phil
                would approve of. Featuring woven The Fresh Prince logo on chest.
                Navy crown print crew neck sweatshirt with white ribbed collar and
                waist band. Cotton/Poly blend.
              </p>
            </div>
          </section>
            `        

            populares.innerHTML += `
            
            <div id="hand" class="animacion">
              <img src="./imagenes/hands.svg" />
            </div>
            <!-- animacion -->
            <div class="item_set">
              <img
                data-outfit="setOne"
                class="item_set_image"
                src="./imagenes/set-hombre-01.png" width="340" height="511"/>

              <p class="item_set_titulo ">Fresh Stripe Sweater</p>
              <p class="item_set_precio">$85.00</p>
            </div>
            <div class="item_set">
              <img
                data-outfit="setTwo"
                class="item_set_image"
                src="./imagenes/set-mujer-capucha-01.png" width="340" height="511"
              />
              <p class="item_set_titulo">Fresh Black Tie-Dye Hoodie</p>
              <p class="item_set_precio">$75.00</p>
            </div>
            <div class="item_set">
              <img
                data-outfit="setThree"
                class="item_set_image"
                src="./imagenes/set-mujer-capucha-02.png" width="340" height="511"/>
              <p class="item_set_titulo">Pose For It Tee</p>
              <p class="item_set_precio">$45.00</p>
            </div>
          </div>
            `
    })
}